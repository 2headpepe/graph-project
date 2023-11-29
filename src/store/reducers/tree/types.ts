import { OnNodesChange, Node, Edge, OnEdgesChange } from "reactflow";
import { ICustomNodeData } from "../../../pages/GraphPage/types";
import { ITreeResponse } from "../../../api/tree/types";

export interface Trees {
  trees: {
    trees: ITree[]|null;
    isLoading: boolean;
    error: string | null;
  };
  currentTree: {
    tree: ITree | null;
    isLoading: boolean;
    error: string | null;
  };
}
export type ITree = ITreeResponse;
export type TreePayload = ITree;

export interface NodesPayload {
  id: string;
  data: Node<ICustomNodeData, string | undefined>[];
}

export interface NodePayload {
  id: string;
  data: Node<ICustomNodeData, string | undefined>;
}

export interface EdgesPayload {
  id: string;
  data: Edge<any>[];
}

export interface ErrorPayload {
  id: string;
  error: string;
}

export type Payload = TreePayload | NodesPayload | EdgesPayload;