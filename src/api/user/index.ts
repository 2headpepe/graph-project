import { AxiosPromise } from "axios";
import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";
import { IPutUserRequest, IUserResponse } from "./types";

export const getUser = (): AxiosPromise<IUserResponse> => axiosInstance.get(Endpoints.USER.GET_USER);

export const putUser = (params: IPutUserRequest): void => {axiosInstance.put(Endpoints.USER.PUT_USER, params)};