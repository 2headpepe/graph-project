import React, { useCallback } from "react";

import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  MarkerType,
  Node,
  Edge,
  EdgeTypes,
  NodeTypes,
  OnConnect,
  Connection,
  Background,
  MiniMap,
  Controls,
  BackgroundVariant,
  OnNodesChange,
  OnEdgesChange,
  NodeMouseHandler,
  NodeChange,
} from "reactflow";

import CustomNode from "./components/CustomNode";
import FloatingEdge from "./components/FloatingEdge";
import CustomConnectionLine from "./components/CustomConnectionLine";

import styles from "./styles.module.css";
import "reactflow/dist/style.css";

import {
  NodeMouseEventHandler,
  NodeMouseEventParams,
} from "rc-tree/lib/contextTypes";
import TreeInfo from "../TreeInfo/TreeInfo";

const connectionLineStyle = {
  strokeWidth: 3,
  stroke: "black",
};

const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

const edgeTypes: EdgeTypes = {
  floating: FloatingEdge,
};

const defaultEdgeOptions = {
  style: { strokeWidth: 3, stroke: "black" },
  type: "floating",
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "black",
  },
};

interface TreeProps {
  nodes: Node[];
  edges: Edge[];
  currentNodeIndex: string | null;

  nodeInfoModal: boolean;
  setNodeInfoModal: React.Dispatch<React.SetStateAction<boolean>>;

  setEdges: React.Dispatch<React.SetStateAction<Edge<any>[]>>;

  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  setCurrentNodeIndex: React.Dispatch<React.SetStateAction<string | null>>;
}
const Tree = ({
  nodes,
  edges,
  currentNodeIndex,

  nodeInfoModal,
  setNodeInfoModal,

  setEdges,

  onNodesChange,
  onEdgesChange,
  setCurrentNodeIndex,
}: TreeProps) => {
  const onConnect: OnConnect = useCallback(
    (params: Connection) =>
      setEdges((eds: Edge[]) => {
        return addEdge(params, eds);
      }),
    [setEdges]
  );
  const onNodeClick: NodeMouseHandler = (event, node) => {
    if (nodeInfoModal && node.id === currentNodeIndex) {
      setNodeInfoModal(false);
    } else {
      setNodeInfoModal(true);
      setCurrentNodeIndex(node.id);
    }
  };

  function onNodesChangeMy(nodeChange: NodeChange[]) {
    nodeChange.forEach((e) => {
      if (e.type === "position") {
      }
    });
    onNodesChange(nodeChange);
  }
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChangeMy}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      defaultEdgeOptions={defaultEdgeOptions}
      connectionLineComponent={CustomConnectionLine}
      connectionLineStyle={connectionLineStyle}
      onNodeClick={onNodeClick}
      style={{ position: "relative" }}
    >
      <Controls position="bottom-left" />
      <Background
        id="1"
        gap={10}
        color="#f1f1f1"
        variant={BackgroundVariant.Lines}
      />
      <div style={{ height: "94vh" }}></div>
    </ReactFlow>
  );
};

export default Tree;
