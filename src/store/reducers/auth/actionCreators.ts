import { Dispatch } from "@reduxjs/toolkit";
import { ILoginRequest, IRegisterRequest, } from "../../../api/auth/types";
import { loginFailure, loginStart, loginSuccess, logoutSuccess, registerFailure, registerStart, registerSuccess } from "./authReducer";

import api from "../../../api";
import { store } from "../../../index"
export const loginUser =
  (data: ILoginRequest) =>
    async (dispatch: Dispatch<any>): Promise<void> => {
      try {
        dispatch(loginStart())

        const res = await api.auth.login(data)

        localStorage.setItem('token', res.data['access_token']);

        dispatch(loginSuccess(res.data))
      } catch (e: any) {
        console.error(e)
        dispatch(loginFailure(e.message))
      }
    }

export const registerUser =
  (data: IRegisterRequest) =>
    async (dispatch: Dispatch<any>): Promise<void> => {
      try {
        dispatch(registerStart())

        const res = await api.auth.register(data)

        dispatch(registerSuccess(res.data));
      } catch (e: any) {
        console.error(e)

        dispatch(registerFailure(e.message))
      }
    }



export const logoutUser =
  () =>
    async (dispatch: Dispatch): Promise<void> => {
      try {
        // await api.auth.logout()

        localStorage.removeItem('token');

        dispatch(logoutSuccess())

        // history.push('/')
      } catch (e) {
        console.error(e)
      }
    }



export const getAccessToken =
  () =>
    async (dispatch: Dispatch<any>): Promise<string | null> => {
      try {
        const accessToken = localStorage.getItem('token');
        if (accessToken) {
          return accessToken;
        }

        return store.getState().auth.authData.accessToken
      } catch (e) {
        console.error(e)

        return null
      }
    }