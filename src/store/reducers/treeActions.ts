import { EdgesPayload, NodesPayload, TreePayload } from "./types";

export const updateTree = (attributes: TreePayload) => ({
  type: "UPDATE_TREE",
  payload: attributes,
});

export const updateNodes = (attributes: NodesPayload) => ({
  type: "UPDATE_NODES",
  payload: attributes,
});

export const updateEdges = (attributes: EdgesPayload) => ({
  type: "UPDATE_EDGES",
  payload: attributes,
});

