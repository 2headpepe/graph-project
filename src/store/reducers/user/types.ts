import { IUserResponse } from "../../../api/user/types";
  
export type IUser = IUserResponse;

export interface IUserState {
    data: IUser|null;
    isLoading: boolean;
    error: string | null;
}

export interface UserPayload {
    data: IUser;
}

export interface ErrorPayload {
    id: number;
    error: string;
}