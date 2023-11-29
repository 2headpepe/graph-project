import { Handle, Position, useStore, NodeProps } from "reactflow";
import styles from "../styles.module.css";

const connectionNodeIdSelector = (state: { connectionNodeId: any }) =>
  state.connectionNodeId;

const sourceStyle = { zIndex: 1 };

export default function CustomNode({ id, data }: NodeProps) {
  const connectionNodeId = useStore(connectionNodeIdSelector);

  const isConnecting = !!connectionNodeId;
  const isTarget = connectionNodeId && connectionNodeId !== id;
  return (
    <div className={styles.customNode}>
      <div
        className={styles.customNodeBody}
        style={{
          backgroundColor: isTarget ? "#ffcce3" : "#ccd9f6",
        }}
      >
        {!isConnecting && (
          <Handle
            className={styles.customHandle}
            position={Position.Right}
            type="source"
            style={sourceStyle}
          />
        )}
        <Handle
          className={styles.customHandle}
          position={Position.Left}
          type="target"
        />

        <p>{data.name}</p>
      </div>
      <div className={styles.gradeBadge}>{data.grade}</div>
      <div className={styles.openInfo}>{"Open"}</div>
    </div>
  );
}
