import { AxiosPromise } from "axios";
import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";
import {
  IGetLinksRequest,
  ILinkResponse,
  ILinksResponse,
  IPostLinkRequest,
} from "./types";

export const postLink = (
  params: IPostLinkRequest
): AxiosPromise<ILinkResponse> =>
  axiosInstance.post(Endpoints.LINK.POST_LINK, params);

export const getLinks = (
  params: IGetLinksRequest
): AxiosPromise<ILinksResponse> =>
  axiosInstance.get(Endpoints.LINK.POST_LINK + "/?tree=" + params);

// export const register = (params: IRegisterRequest): AxiosPromise<IRegisterResponse> =>axiosInstance.post(Endpoints.AUTH.REGISTER, params);

// export const getProfile = (): AxiosPromise<IUserProfile> => axiosInstance.get(Endpoints.AUTH.PROFILE)
