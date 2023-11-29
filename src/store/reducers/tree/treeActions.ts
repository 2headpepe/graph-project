// export const updateTree = (attributes: TreePayload) => ({
//   type: "UPDATE_TREE",
//   payload: attributes,
// });

// export const updateNodes = (attributes: NodesPayload) => ({
//   type: "UPDATE_NODES",
//   payload: attributes,
// });

// export const updateEdges = (attributes: EdgesPayload) => ({
//   type: "UPDATE_EDGES",
//   payload: attributes,
// });

// export const addNode = (attributes: NodePayload) => ({
//   type: "ADD_NODE",
//   payload: attributes,
// });


import { Dispatch } from "@reduxjs/toolkit";

import { EdgesPayload, NodePayload, NodesPayload, TreePayload } from "./types";
import api from "../../../api";
import {
  getTreeByIdFailure,
  getTreeByIdStart,
  getTreeByIdSuccess,
  getTreeFailure,
  getTreeStart,
  getTreeSuccess,
} from "./treeReducer";
import { IGetTreeRequest, IPostTreeRequest, IPutTreeRequest } from "../../../api/tree/types";

// export const updateTree = (attributes: TreePayload) => ({
//   type: "UPDATE_TREE",
//   payload: attributes,
// });

// export const updateNodes = (attributes: NodesPayload) => ({
//   type: "UPDATE_NODES",
//   payload: attributes,
// });

// export const updateEdges = (attributes: EdgesPayload) => ({
//   type: "UPDATE_EDGES",
//   payload: attributes,
// });

// export const addNode = (attributes: NodePayload) => ({
//   type: "ADD_NODE",
//   payload: attributes,
// });

// export const getTreeById =
//   (data: IGetTreeByIdRequest) =>
//   async (dispatch: Dispatch<any>): Promise<void> => {
//     try {
//       dispatch(getTreeByIdStart(data.uid));

//       const res = await api.tree.getTreeById(data);

//       dispatch(getTreeByIdSuccess(res.data));
//       // dispatch(addNodeSuccess({id:treeId,data:{data:{...res.data, grade:mockGrade}, id:res.data.uid,position:{x:0,y:0}}}))
//     } catch (e: any) {
//       console.error(e);
//       dispatch(getTreeByIdFailure(e));
//     }
//   };

export const postTree =
  (data: IPostTreeRequest) =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      const res = await api.tree.postTree(data);
      // dispatch(addNodeSuccess({id:treeId,data:{data:{...res.data, grade:mockGrade}, id:res.data.uid,position:{x:0,y:0}}}))
    } catch (e: any) {
      console.error(e);
      // dispatch(postTreeFailure(e));
    }
  };
export const getTree =
  (data: IGetTreeRequest) =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      dispatch(getTreeStart());

      let trees = {
        data: [
          {
            uid: "1",
            name: "First try",
            description: "Some information",
            public: true,
            publicGrades: false,
            author: "1",
          },
        ],
      };
      // const res = await api.tree.getTree(data);

      setTimeout(() => {
        const res = trees;
        dispatch(getTreeSuccess(res.data));
      }, 2000);

      // dispatch(getTreeSuccess(res.data));

      // dispatch(addNodeSuccess({id:treeId,data:{data:{...res.data, grade:mockGrade}, id:res.data.uid,position:{x:0,y:0}}}))
    } catch (e: any) {
      console.error(e);
      dispatch(getTreeFailure(e));

      // dispatch(postTreeFailure(e));
    }
  };

export const putTree =
  (data: IPutTreeRequest) =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      const res = await api.tree.putTree(data);

      // dispatch(addNodeSuccess({id:treeId,data:{data:{...res.data, grade:mockGrade}, id:res.data.uid,position:{x:0,y:0}}}))
    } catch (e: any) {
      console.error(e);
      // dispatch(postTreeFailure(e));
    }
  };
