import React, { useEffect } from "react";
import Tree from "./Tree/Tree";
import InfoModal from "./InfoModal/InfoModal";
import {
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  NodeChange,
  EdgeChange,
} from "reactflow";
import TreeInfo from "./TreeInfo/TreeInfo";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";

import { IChangeNodeModal, ICustomNodeData } from "./types";

import styles from "./GraphPage.module.css";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import NodeChangeModal from "./NodeChangeModal/NodeChangeModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useParams } from "react-router-dom";
import {
  updateEdges,
  updateNodes,
  updateTree,
} from "../../store/reducers/treeActions";
import { ITree } from "../../store/reducers/types";

const GraphPage = () => {
  const id = useParams().id ?? "";

  const [nodeInfoModal, setNodeInfoModal] = React.useState(false);
  const [treeInfoModal, setTreeInfoModal] = React.useState(false);

  const [changeNodeModal, setChangeNodeModal] =
    React.useState<IChangeNodeModal>({ modal: false, node: null });

  const [currentNodeIndex, setCurrentNodeIndex] = React.useState<string | null>(
    null
  );
  const nodes: Node<ICustomNodeData>[] = [];
  const edges: Edge[] = [];

  let tree: ITree = {
    nodes,
    edges,
    name: "OOP",
    description: "Something about OOP",
  };
  tree = useSelector((state: RootState) => state.tree[id]) ?? {
    nodes,
    edges,
    name: "OOP",
    description: "Something about OOP",
  };
  const dispatch = useDispatch();
  useEffect(() => {
    //get from server
    const data = {
      nodes,
      edges,
      name: "OOP",
      description: "Something about OOP",
    };

    dispatch(
      updateTree({
        id,
        data,
      })
    );
  }, []);

  const onNodesChange = useNodesState<ICustomNodeData>(tree.nodes)[2];
  const onEdgesChange = useEdgesState(tree.edges)[2];

  function handleNode(id: string | null) {
    const node = id ? tree.nodes.find((e) => e.id === id)! : null;
    setChangeNodeModal({ modal: true, node: node });
  }
  function customSetNodes(
    nodes: React.SetStateAction<Node<ICustomNodeData, string | undefined>[]>
  ) {
    dispatch(
      updateNodes({
        id,
        data: typeof nodes === "function" ? nodes(tree.nodes) : nodes,
      })
    );
  }
  function customSetEdges(edges: React.SetStateAction<Edge<any>[]>) {
    if (typeof edges === "function") {
      dispatch(updateEdges({ id, data: edges(tree.edges) }));
    }
  }
  function customOnNodesChange(nodeChanges: NodeChange[]) {
    nodeChanges.forEach((change) => {
      switch (change.type) {
        case "position":
          if (!change.position) break;
          const index = tree.nodes.findIndex((e) => e.id === change.id);
          const newNodes = JSON.parse(JSON.stringify(tree.nodes));
          newNodes[index].position = change.position;

          dispatch(updateNodes({ id, data: newNodes }));
          break;
        case "remove":
          dispatch(
            updateNodes({
              id,
              data: tree.nodes.filter((e) => e.id !== change.id),
            })
          );
          break;

        default:
          onNodesChange([change]);
      }
    });
  }

  function customOnEdgesChange(edgeChanges: EdgeChange[]) {
    edgeChanges.forEach((change) => {
      switch (change.type) {
        case "remove":
          dispatch({
            type: "UPDATE_EDGES",
            payload: tree.nodes.filter((e) => e.id !== change.id),
          });
          break;
        case "add":
          dispatch(updateEdges({ id, data: [...tree.edges, change.item] }));
          break;
        default:
          onEdgesChange([change]);
      }
    });
  }

  return (
    <div>
      <HeaderComponent
        isMainPage={false}
      ></HeaderComponent>

      <Tree
        nodes={tree.nodes}
        edges={tree.edges}
        setEdges={customSetEdges}
        onNodesChange={customOnNodesChange}
        onEdgesChange={customOnEdgesChange}
        setCurrentNodeIndex={setCurrentNodeIndex}
        setNodeInfoModal={setNodeInfoModal}
        currentNodeIndex={currentNodeIndex}
        nodeInfoModal={nodeInfoModal}
      ></Tree>
      {nodeInfoModal && (
        <InfoModal
          setModal={setNodeInfoModal}
          currentNode={tree.nodes.find((e) => e.id === currentNodeIndex)}
          editNode={handleNode}
        ></InfoModal>
      )}
      <TreeInfo
        name={tree.name}
        description={tree.description}
        onClick={() => setTreeInfoModal((prev) => !prev)}
        modal={treeInfoModal}
      ></TreeInfo>
      <Button
        className={styles.button}
        icon={<PlusOutlined />}
        onClick={() => handleNode(null)}
      >
        Add node
      </Button>
      <NodeChangeModal
        modal={changeNodeModal.modal}
        setModal={setChangeNodeModal}
        node={changeNodeModal.node}
        nodes={tree.nodes}
        setNodes={customSetNodes}
        // editNode={handleNode}
      ></NodeChangeModal>
    </div>
  );
};

export default GraphPage;
