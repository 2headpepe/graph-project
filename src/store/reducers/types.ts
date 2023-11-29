import { OnNodesChange, Node, Edge, OnEdgesChange } from "reactflow";
import { ICustomNodeData } from "../../pages/GraphPage/types";

export interface Trees {
  [id: string]: ITree;
}
export interface ITree {
  nodes: Node<ICustomNodeData, string | undefined>[];
  edges: Edge<any>[];
  name: string;
  description: string;
}
export interface TreePayload {
  id: string;
  data: ITree;
}

export interface NodesPayload {
  id: string;
  data: Node<ICustomNodeData, string | undefined>[];
}

export interface EdgesPayload {
  id: string;
  data: Edge<any>[];
}

export type Payload = TreePayload | NodesPayload | EdgesPayload;
