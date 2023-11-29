import { Dispatch } from "@reduxjs/toolkit";

import { IGetLinksRequest, IPostLinkRequest } from "../../../api/link/types";
import api from "../../../api";
import {
  getLinksFailure,
  getLinksStart,
  getLinksSuccess,
  postLinkFailure,
  postLinkSuccess,
} from "./linkReducer";

export const postLink =
  (data: IPostLinkRequest) =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      // dispatch(postSkillStart())

      const res = await api.link.postLink(data);

      dispatch(postLinkSuccess(res.data));
    } catch (e: any) {
      console.error(e);
      dispatch(postLinkFailure(e.message));
    }
  };

export const getLinks =
  (data: IGetLinksRequest) =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      dispatch(getLinksStart());

      const res = await api.link.getLinks(data);

      dispatch(getLinksSuccess(res.data));
    } catch (e: any) {
      console.error(e);
      dispatch(getLinksFailure(e.message));
    }
  };
