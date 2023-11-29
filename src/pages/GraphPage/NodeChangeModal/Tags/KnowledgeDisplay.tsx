import { CloseOutlined } from "@ant-design/icons";
import { Button, Card, Input } from "antd";

import styles from "./KnowledgeDisplay.module.css";
import { IKnowledge } from "../../types";

//get id from server
//(here is basic implementation for dev without server)
export function getId(value: string[]): string {
  const id = Math.round(Math.random() * 1000).toString();
  if (value.includes(id)) return getId(value);
  value.push(id);
  return id;
}

const KnowledgeDisplay = ({
  knowledge,
  setKnowledge,
}: {
  knowledge: IKnowledge[];
  setKnowledge: React.Dispatch<React.SetStateAction<IKnowledge[]>>;
}) => {
  //changing knowledge data
  function changeKnowledge(
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) {
    setKnowledge((prev) => {
      const newKnowledge = [...prev];
      const index = newKnowledge.findIndex((el) => el.id === id);
      newKnowledge[index] = {
        ...newKnowledge[index],
        data: event.target.value,
      };
      return newKnowledge;
    });
    // console.log(knowledge);
  }

  //creating empty knowledge
  function createKnowledge() {
    setKnowledge((prev) => [
      ...prev,
      { id: getId(knowledge.map((e) => e.id)), data: "" },
    ]);
  }

  //deleting knowledge
  function deleteKnowledge(e: string) {
    setKnowledge((knowledge) => knowledge.filter((a) => a.id != e));
  }
  return (
    <div>
      {knowledge.map((e) => (
        <div
          className={styles.knowledgeWrapper}
          key={e.id}
        >
          <Input
            value={e.data}
            style={{ marginBottom: "20px", maxWidth: "50vw" }}
            className={styles.input}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              changeKnowledge(event, e.id)
            }
          />
          <Button
            className={styles.button}
            onClick={() => deleteKnowledge(e.id)}
          >
            <CloseOutlined />
          </Button>
        </div>
      ))}
      <Button
        block
        onClick={createKnowledge}
      >
        Add knowledge
      </Button>
    </div>
  );
};

export default KnowledgeDisplay;
