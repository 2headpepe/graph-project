import React, { CSSProperties } from "react";
import { getStraightPath, ConnectionLineComponent } from "reactflow";

interface CustomConnectionLineProps {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  connectionLineStyle?: CSSProperties;
}
function CustomConnectionLine({
  fromX,
  fromY,
  toX,
  toY,
  connectionLineStyle,
}: CustomConnectionLineProps) {
  const [edgePath] = getStraightPath({
    sourceX: fromX,
    sourceY: fromY,
    targetX: toX,
    targetY: toY,
  });
  return (
    <g>
      <path
        style={connectionLineStyle}
        fill="none"
        d={edgePath}
      />
      <circle
        cx={toX}
        cy={toY}
        fill="black"
        r={1}
        stroke="black"
        strokeWidth={3}
      />
    </g>
  );
}

export default CustomConnectionLine;
