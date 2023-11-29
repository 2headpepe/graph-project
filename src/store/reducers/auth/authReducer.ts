import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoginResponse, IRegisterResponse, IUser } from "../../../api/auth/types";

export interface AuthState {
  authData: {
    accessToken: string | null;
    tokenType: string | null;
    isLoading: boolean;
    error: string | null;
  };
  profileData: {
    profile: IUser | null;
    isLoading: boolean;
    error: string | null;
  };
}

const initialState: AuthState = {
  authData: {
    accessToken: null,
    tokenType: null,
    isLoading: false,
    error: null,
  },
  profileData: {
    profile: null,
    isLoading: false,
    error: null,
  },
}

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state): AuthState => ({
      ...state,
      authData: {
        ...state.authData,
        isLoading: true,
      },
    }),
    loginSuccess: (state, action: PayloadAction<ILoginResponse>): AuthState => ({
      ...state,
      authData: {
        ...state.authData,
        accessToken: action.payload.access_token,
        tokenType: action.payload.token_type,
        isLoading: false,
        error: null,
      },
    }),
    loginFailure: (state, action: PayloadAction<string>): AuthState => ({
      ...state,
      authData: {
        ...state.authData,
        isLoading: false,
        error: action.payload,
      },
    }),
    registerStart: (state): AuthState => ({
      ...state,
      authData: {
        ...state.authData,
        isLoading: true,
      },
    }),
    registerSuccess: (state, action: PayloadAction<IRegisterResponse>): AuthState => ({
      authData: {
        ...state.authData,
        accessToken: action.payload.token,
        tokenType: action.payload.tokenType,
        isLoading: false,
        error: null,
      },
      profileData: {
        profile: action.payload,
        isLoading: false,
        error: null,
      }
    }),
    registerFailure: (state, action: PayloadAction<string>): AuthState => ({
      ...state,
      authData: {
        ...state.authData,
        isLoading: false,
        error: action.payload,
      },
    }),
    logoutSuccess: (): AuthState => initialState,
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  registerStart,
  registerSuccess,
  registerFailure
} = authReducer.actions;

export default authReducer.reducer;
