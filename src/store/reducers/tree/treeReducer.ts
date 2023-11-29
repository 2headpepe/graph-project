import {
  EdgesPayload,
  ErrorPayload,
  NodePayload,
  NodesPayload,
  Payload,
  TreePayload,
  Trees,
} from "./types";
import { OnNodesChange, Node, Edge, OnEdgesChange } from "reactflow";

// const treeReducer = (state = initialState, action: PayloadAction<Payload>) => {
//   switch (action.type) {
//     case "UPDATE_TREE":
//       return { ...state, [action.payload.id]: action.payload.data };
//     case "UPDATE_EDGES":
//       return {
//         ...state,
//         [action.payload.id]: {
//           ...state[action.payload.id],
//           edges: action.payload.data,
//         },
//       };
//     case "UPDATE_NODES":
//       return {
//         ...state,
//         [action.payload.id]: {
//           ...state[action.payload.id],
//           nodes: action.payload.data,
//         },
//       };
//     case "UPDATE_EDGES":
//       return {
//         ...state,
//         [action.payload.id]: {
//           ...state[action.payload.id],
//           edges: action.payload.data,
//         },
//       };
//     default:
//       return state;
//   }
// };

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type TreeState = Trees;
const initialState: TreeState = {
  trees: {
    trees: null,
    isLoading: false,
    error: null,
  },
  currentTree: {
    tree: null,
    isLoading: false,
    error: null,
  },
};

export const treeReducer2 = createSlice({
  name: "tree",
  initialState,
  reducers: {
    //   addNodeSuccess: (state: TreeState, action:PayloadAction<NodePayload>): TreeState => {
    //     if(!state[action.payload.id] || !state[action.payload.id].error || !state[action.payload.id].isLoading){
    //       return state;
    //     }
    //     return {...state,
    //     [action.payload.id]:{
    //       ...state[action.payload.id],
    //       tree:{
    //         ...state[action.payload.id].tree!,
    //         nodes:{
    //           ...state[action.payload.id].tree?.nodes!,
    //           nodes: [
    //             ...(state[action.payload.id].tree?.nodes.nodes??[]),
    //             action.payload.data,
    //           ]
    //         }
    //       }
    //     }}
    //   },
    //   addNodeFailure: (state: TreeState, action:PayloadAction<ErrorPayload>): TreeState => {
    //     if(!state[action.payload.id] || !state[action.payload.id].error || !state[action.payload.id].isLoading){
    //       return state;
    //     }
    //     return {...state,
    //     [action.payload.id]:{
    //       ...state[action.payload.id],
    //       tree:{
    //         ...state[action.payload.id].tree!,
    //         nodes:{
    //           ...state[action.payload.id].tree?.nodes!,
    //           error:action.payload.error,
    //         }
    //       }
    //     }}
    //   },
    //   updateEdgesSuccess: (state, action:PayloadAction<EdgesPayload>): TreeState => {
    //     if(!state[action.payload.id] || !state[action.payload.id].error || !state[action.payload.id].isLoading){
    //       return state;
    //     }
    //     return{ ...state,
    //     [action.payload.id]:{
    //       ...state[action.payload.id],
    //       tree:{
    //         ...state[action.payload.id].tree!,
    //         edges:{
    //           ...state[action.payload.id].tree!.edges,
    //           edges:action.payload.data,
    //           isLoading:false,
    //           error:null,
    //         }
    //       }
    //     }
    //   };
    //   },
    //   updateEdgesFailure: (state, action:PayloadAction<ErrorPayload>): TreeState => {
    //   if(!state[action.payload.id] || !state[action.payload.id].error || !state[action.payload.id].isLoading){
    //     return state;
    //   }
    //   return{ ...state,
    //   [action.payload.id]:{
    //     ...state[action.payload.id],
    //     tree:{
    //       ...state[action.payload.id].tree!,
    //       edges:{
    //         ...state[action.payload.id].tree!.edges,
    //         isLoading:false,
    //         error:action.payload.error,
    //       }
    //     }
    //   }
    // };
    //   },
    //   updateNodesSuccess: (state, action:PayloadAction<NodesPayload>): TreeState => {
    //     if(!state[action.payload.id] || !state[action.payload.id].error || !state[action.payload.id].isLoading){
    //       return state;
    //     }
    //     return{ ...state,
    //     [action.payload.id]:{
    //       ...state[action.payload.id],
    //       tree:{
    //         ...state[action.payload.id].tree!,
    //         nodes:{
    //           ...state[action.payload.id].tree!.edges,
    //           nodes:action.payload.data,
    //           isLoading:false,
    //           error:null,
    //         }
    //       }
    //     }
    //   };
    //   },
    //   updateNodesFailure: (state, action:PayloadAction<ErrorPayload>): TreeState => {
    //   if(!state[action.payload.id] || !state[action.payload.id].error || !state[action.payload.id].isLoading){
    //     return state;
    //   }
    //   return{ ...state,
    //   [action.payload.id]:{
    //     ...state[action.payload.id],
    //     tree:{
    //       ...state[action.payload.id].tree!,
    //       nodes:{
    //         ...state[action.payload.id].tree!.nodes,
    //         isLoading:false,
    //         error:action.payload.error,
    //       }
    //     }
    //   }
    // };
    //   },
    getTreeByIdStart: (state, action: PayloadAction<string>) => ({
      ...state,
      currentTree: {
        ...state.currentTree,
        isLoading: true,
      },
    }),
    getTreeByIdSuccess: (state, action: PayloadAction<TreePayload>) => {
      return {
        ...state,
        currentTree: {
          ...state.currentTree,
          isLoading: false,
          tree: {
            ...state.currentTree.tree,
            ...action.payload,
          },
        },
      };
    },
    getTreeByIdFailure: (
      state,
      action: PayloadAction<ErrorPayload>
    ): TreeState => ({
      ...state,
      currentTree: {
        ...state.currentTree,
        isLoading: false,
        error: action.payload.error,
      },
    }),
    getTreeStart: (state) => ({
      ...state,
      trees: {
        ...state.trees,
        isLoading: true,
      },
    }),
    getTreeSuccess: (state, action: PayloadAction<TreePayload[]>) => ({
        ...state,
        trees: {
          ...state.trees,
          isLoading: false,
          trees:[
            ...action.payload
          ]
        },
    }),
    getTreeFailure: (
      state,
      action: PayloadAction<ErrorPayload>
    ): TreeState => ({
      ...state,
      trees: {
        ...state.trees,
        isLoading: false,
        error: action.payload.error,
      },
    }),
  },
});

export const {
  getTreeByIdStart,
  getTreeByIdSuccess,
  getTreeByIdFailure,
  getTreeStart,
  getTreeSuccess,
  getTreeFailure
} = treeReducer2.actions;

export default treeReducer2.reducer;
