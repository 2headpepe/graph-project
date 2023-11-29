import { CSSProperties, useCallback } from "react";
import {
  useStore,
  getStraightPath,
  ConnectionLineComponent,
  EdgeProps,
} from "reactflow";

import { getEdgeParams } from "../utils.js";

function FloatingEdge({ id, source, target, markerEnd, style }: EdgeProps) {
  const sourceNode = useStore(
    useCallback(
      (store: { nodeInternals: { get: (arg0: string) => any } }) =>
        store.nodeInternals.get(source),
      [source]
    )
  );
  const targetNode = useStore(
    useCallback(
      (store: { nodeInternals: { get: (arg0: string) => any } }) =>
        store.nodeInternals.get(target),
      [target]
    )
  );

  if (!sourceNode || !targetNode) {
    return null;
  }

  const { sx, sy, tx, ty } = getEdgeParams(sourceNode, targetNode);

  const [edgePath] = getStraightPath({
    sourceX: sx,
    sourceY: sy,
    targetX: tx,
    targetY: ty,
  });

  return (
    <path
      id={id}
      className="react-flow__edge-path"
      d={edgePath}
      markerEnd={markerEnd}
      style={style}
    />
  );
}

export default FloatingEdge;
