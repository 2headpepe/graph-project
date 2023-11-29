import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISkill, ISkillResponse } from "../../../api/skill/types";
import { ILink, ILinkResponse } from "../../../api/link/types";

export interface LinkState {
  linksData: {
    links: ILink[] | null;
    isLoading: boolean;
    error: string | null;
  };
  // deleteFailures: string[];
}

const initialState: LinkState = {
  linksData: {
    links: null,
    isLoading: false,
    error: null,
  },
};

export const linkReducer = createSlice({
  name: "link",
  initialState,
  reducers: {
    postLinkSuccess: (
      state,
      action: PayloadAction<ILinkResponse>
    ): LinkState => ({
      ...state,
      linksData: {
        ...state.linksData,
        isLoading: false,
        links: [...(state.linksData.links ?? []), action.payload],
      },
    }),
    postLinkFailure: (state, action: PayloadAction<string>): LinkState => ({
      ...state,
      linksData: {
        ...state.linksData,
        isLoading: false,
        error: action.payload,
      },
    }),
    getLinksStart: (state): LinkState => ({
      ...state,
      linksData: {
        ...state.linksData,
        isLoading: true,
      },
    }),
    getLinksSuccess: (state, action: PayloadAction<ILink[]>): LinkState => ({
      ...state,
      linksData: {
        ...state.linksData,
        links: [...action.payload],
        isLoading: false,
        error: null,
      },
    }),
    getLinksFailure: (state, action: PayloadAction<string>): LinkState => ({
      ...state,
      linksData: {
        ...state.linksData,
        isLoading: false,
        error: action.payload,
      },
    }),
  },
});

export const {
  postLinkSuccess,
  postLinkFailure,
  getLinksStart,
  getLinksSuccess,
  getLinksFailure,
} = linkReducer.actions;

export default linkReducer.reducer;
