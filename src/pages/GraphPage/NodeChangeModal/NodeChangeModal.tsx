import styles from "./NodeChangeModal.module.css";
import { Node } from "reactflow";

import { Button, Form, Input, InputNumber } from "antd";
import Tags, { getId } from "./Tags/KnowledgeDisplay";
import React, { useEffect } from "react";
import TextArea from "antd/es/input/TextArea";

import { IChangeNodeModal, ICustomNodeData, IKnowledge } from "../types";

interface NodeChangeModalProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<IChangeNodeModal>>;
  node: Node<ICustomNodeData> | null;
  nodes: Node<ICustomNodeData>[];
  setNodes: React.Dispatch<
    React.SetStateAction<Node<ICustomNodeData, string | undefined>[]>
  >;
}

function checkEqualKnowledge(
  knowledge1: IKnowledge[] | undefined,
  knowledge2: IKnowledge[] | undefined
) {
  if (!knowledge1 || !knowledge2) return 0;
  if (knowledge1.length != knowledge2.length) return 0;
  for (let i = 0; i < knowledge1.length; ++i) {
    if (knowledge1[i].id !== knowledge2[i].id) return 0;
    if (knowledge1[i].data !== knowledge2[i].data) return 0;
  }
  return 1;
}
const NodeChangeModal = ({
  modal,
  setModal,
  node,
  nodes,
  setNodes,
}: NodeChangeModalProps) => {
  const [knowledge, setKnowledge] = React.useState<IKnowledge[]>([]);
  useEffect(() => {
    setKnowledge(node ? node.data.knowledge : []);
  }, [node]);

  function closeModal(event: React.MouseEvent) {
    if (
      event.target instanceof HTMLElement &&
      event.target.className === styles.Modal
    ) {
      setModal({ modal: false, node: null });
    }
  }
  function handleFinish(values: {
    name: string;
    description: string;
    grade: number;
    knowledge: IKnowledge[];
    node: Node<ICustomNodeData> | null;
  }) {
    const { name, description, knowledge, grade, node } = values;
    if (!node) {
      //adding node
      //1.post https://gitlab.com/spbu-practice-fall-2023/server/-/issues/53
      //get id(from api, but now crutch)
      const nodeId = getId(nodes.map((e) => e.id));
      setNodes((prev) => [
        ...prev,
        {
          id: nodeId,
          type: "custom",
          position: { x: 0, y: 0 },
          data: {
            name,
            description,
            grade,
            knowledge,
          },
        },
      ]);
    } else {
      const index = nodes.findIndex((e) => node.id === e.id);
      // console.log(values);
      if (node.data.name !== name || node.data.description !== description) {
        //request to server
        setNodes((prev) => {
          const newNodes = [...prev];
          newNodes[index].data.name = name ?? "";
          newNodes[index].data.description = description ?? "";

          return newNodes;
        });
      }

      if (node.data.grade !== grade) {
        //request
        setNodes((prev) => {
          const newNodes = [...prev];
          newNodes[index].data.grade = grade ?? 0;
          return newNodes;
        });
      }
      // console.log(node.data.knowledge, knowledge);
      if (!checkEqualKnowledge(node.data.knowledge, knowledge)) {
        //request
        setNodes((prev) => {
          const newNodes = [...prev];
          newNodes[index].data.knowledge = knowledge;
          return newNodes;
        });
      }
      setKnowledge([]);
    }
    setModal({ modal: false, node: null });
  }
  function onFinish(values: {
    name: string;
    description: string;
    grade: number;
  }) {
    handleFinish({ ...values, node, knowledge });
  }

  return (
    <div>
      {modal && (
        <div
          className={styles.Modal}
          onClick={closeModal}
        >
          <div className={styles.modalContent}>
            <Form
              layout="vertical"
              onFinish={onFinish}
              initialValues={{
                name: node ? node.data.name : "",
                description: node ? node.data.description : "",
                grade: node ? node.data.grade : "",
              }}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ min: 1, message: "Please input node name" }]}
              >
                <Input></Input>
              </Form.Item>
              <Form.Item
                label="Description"
                name="description"
              >
                <TextArea />
              </Form.Item>
              <Form.Item
                label="Grade"
                name="grade"
              >
                <InputNumber></InputNumber>
              </Form.Item>
              <Form.Item
                label="Knowledge"
                name="knowledge"
              >
                <Tags
                  setKnowledge={setKnowledge}
                  knowledge={knowledge}
                ></Tags>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NodeChangeModal;
