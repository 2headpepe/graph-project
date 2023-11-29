import { ErrorPayload, IUser, IUserState, UserPayload } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IUserState = {
    data: null,
    isLoading: false,
    error: null
}

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        
        getUserStart: (state) => ({
            ...state,
            isLoading: true,
        }),

        getUserSuccess: (state, action: PayloadAction<UserPayload>) => {
            return {
                ...state,
                data: action.payload.data,
                isLoading: false,
            };
        },

        getUserFailure: (state, action: PayloadAction<ErrorPayload>) => ({
            ...state,
            isLoading: false,
            error: action.payload.error,
        }),

    },
})

export const {
    getUserStart,
    getUserSuccess,
    getUserFailure
} = userReducer.actions;

export default userReducer.reducer;

// import {  } from "../../../api/user/types";
// import { User } from "./types";

// interface Action {
//     type: string;
//     payload: User;
// }

// interface UserState {
//     data: IUserData | null;
//     isLoading: boolean;
//     error: string | null
// }

// const initialState: User = {
//     uid: '',
//     firstName: '',
//     lastName: '',
//     description: '',
//     avatarUrl: '',
//     externalLinks: [],
//     countOfLikes: 144,
//     countOfFollowers: 23,
//     countOfTrees: 0,
//     birtdate: "",
//     email: "",
//     location: "",
//     occupance: ""
// };

// const userReducer = ( state = initialState, action: Action ) => {
//     switch (action.type) {
//         case 'UPDATE_USER':
//             return {
//                 ...state, ...action.payload,
//             };
//         default:
//             return state;
//     }
// };

// export default userReducer;