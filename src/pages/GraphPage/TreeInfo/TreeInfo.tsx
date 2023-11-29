import { Card } from "antd";

import styles from "./TreeInfo.module.css";
import Meta from "antd/es/card/Meta";

interface TreeInfoProps {
  name: string;
  description: string;
  onClick: () => void;
  modal: boolean;
}

const TreeInfo: React.FC<TreeInfoProps> = ({
  name,
  description,
  modal,
  onClick,
}: TreeInfoProps) => (
  <Card
    className={styles.treeInfo}
    bordered={false}
    onClick={onClick}
  >
    {modal ? (
      <Meta
        title={name}
        description={description}
      />
    ) : (
      <Meta title={name} />
    )}
  </Card>
);

export default TreeInfo;
