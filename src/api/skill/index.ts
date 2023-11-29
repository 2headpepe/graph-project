import { AxiosPromise } from "axios";
import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";
import { IDeleteSkillRequest, IGetSkillsRequest, IPostSkillRequest, ISelectSkillRequest, ISkillResponse, ISkillsResponse } from "./types";

export const postSkill = (
  params: IPostSkillRequest
): AxiosPromise<ISkillResponse> =>
  axiosInstance.post(Endpoints.SKILL.POST_SKILL, params);
export const getSkills = (
  params: IGetSkillsRequest
): AxiosPromise<ISkillsResponse> =>
  axiosInstance.post(Endpoints.SKILL.POST_SKILL, params);
export const selectSkill = (
  params: ISelectSkillRequest
): AxiosPromise<ISkillResponse> =>
  axiosInstance.post(Endpoints.SKILL.POST_SKILL, params);
export const deleteSkill = (params: IDeleteSkillRequest): void => {
  axiosInstance.post(Endpoints.SKILL.POST_SKILL, params);
};

// export const register = (params: IRegisterRequest): AxiosPromise<IRegisterResponse> =>axiosInstance.post(Endpoints.AUTH.REGISTER, params);

// export const getProfile = (): AxiosPromise<IUserProfile> => axiosInstance.get(Endpoints.AUTH.PROFILE)
