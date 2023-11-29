import React from "react";
import { Node } from "reactflow";

import styles from "./InfoModal.module.css";
import { List } from "antd";
import Meta from "antd/es/card/Meta";

interface InfoModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentNode: Node | undefined;
  editNode: (id: string) => void;
}
const InfoModal = ({ setModal, currentNode, editNode }: InfoModalProps) => {
  return (
    <List
      header={
        <div>
          <div className={styles.headerWrapper}>{currentNode?.data.name}</div>
          <div className={styles.descriptionWrapper}>
            {currentNode?.data.description}
          </div>
        </div>
      }
      footer={
        <div className={styles.buttonWrapper}>
          {currentNode && (
            <div
              style={{ color: "grey", cursor: "pointer" }}
              onClick={() => editNode(currentNode.id)}
            >
              Edit
            </div>
          )}
          <div
            style={{ color: "grey", cursor: "pointer" }}
            onClick={() => setModal(false)}
          >
            Close
          </div>
        </div>
      }
      bordered={false}
      dataSource={currentNode?.data.knowledge}
      renderItem={(item: { id: string; data: string }) => (
        <Meta
          description={
            <a
              key={item.id}
              href={item.data}
            >
              {item.data}
            </a>
          }
        />
        //возможно в будущем добавить валидацию ссылок
      )}
      className={styles.modalBody}
    />
  );
};

export default InfoModal;
