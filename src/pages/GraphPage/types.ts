import { Node } from "reactflow";

export interface IKnowledge {
  id: string;
  data: string;
}

export interface ICustomNodeData {
  name: string;
  grade: number;
  description: string;
  knowledge: IKnowledge[];
}
export interface IChangeNodeModal {
  modal: boolean;
  node: Node<ICustomNodeData> | null;
}
