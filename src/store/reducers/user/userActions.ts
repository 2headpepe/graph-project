import { Dispatch } from "@reduxjs/toolkit";
import api from "../../../api";
import { IPutUserRequest } from "../../../api/user/types";
import { getUserFailure, getUserStart, getUserSuccess } from "./userReducer";

export const getUser = () => async (dispatch: Dispatch<any>): Promise<void> => {
    try {
        dispatch(getUserStart());
        // const res = await api.user.getUser();
        setTimeout(() => {
            const res = {
                data: {
                    uid: '1',
                    username: 'bob.marley',
                    firstName: 'Bob',
                    lastName: 'Marley',
                    birthdate: '2023-11-11',
                    email: 'rasta@rambler.ru',
                    avatarUrl: '',
                    description: 'the coolest smoker',
                    location: 'yamayka',
                    occupance: 'student',
                    // countOfFollowers: 0,
                    // countOfLikes: 0,
                    // countOfTrees: 0
                }
              }
            dispatch(getUserSuccess(res));
        }, 1000)
        // dispatch(getUserSuccess(res));
    } catch (e: any) {
        console.error(e);
        dispatch(getUserFailure(e));
    }
}

export const putUser = (data: IPutUserRequest) => async (dispatch: Dispatch<any>): Promise<void> => {
    try {
        await api.user.putUser(data);
    } catch (e: any) {
        console.error(e);
        
    }
}

// import { User } from "./types";

// export const updateUser = (attributes: Partial<User>) => ({
//     type: 'UPDATE_USER',
//     payload: attributes,
// });