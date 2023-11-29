import { PayloadAction } from "@reduxjs/toolkit";
import { Payload, TreePayload, Trees } from "./types";

const initialState: Trees = {};

const userReducer = (state = initialState, action: PayloadAction<Payload>) => {
  switch (action.type) {
    case "UPDATE_TREE":
      return { ...state, [action.payload.id]: action.payload.data };
    case "UPDATE_EDGES":
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          edges: action.payload.data,
        },
      };
    case "UPDATE_NODES":
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          nodes: action.payload.data,
        },
      };
    case "UPDATE_EDGES":
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          edges: action.payload.data,
        },
      };
    default:
      return state;
  }
};


export default userReducer;
