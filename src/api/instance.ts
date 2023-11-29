import axios from "axios";

import Endpoints from './endpoints'
import { getAccessToken } from "../store/reducers/auth/actionCreators";
import { store } from "..";

export const axiosInstance = axios.create()

const urlsSkipAuth = [Endpoints.AUTH.LOGIN]



axiosInstance.interceptors.request.use(async (config) => {
    if (config.url && urlsSkipAuth.includes(config.url)) {
        return config
    }

    const accessToken = await store.dispatch(getAccessToken())

    if (accessToken) {
        const authorization = `Bearer ${accessToken}`

        config.headers['Authorization'] = authorization;
    }

    return config
})