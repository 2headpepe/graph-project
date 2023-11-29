import { AxiosPromise } from "axios";
import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";
import {IGetTreeByIdRequest, IGetTreeRequest, IPostTreeRequest, IPostTreeResponse, IPutTreeRequest, ITreeResponse } from "./types";

export const getTreeById = (params: IGetTreeByIdRequest): AxiosPromise<ITreeResponse> => axiosInstance.get(Endpoints.TREE.GET_BY_ID + '/' + params.uid);

export const postTree = (params: IPostTreeRequest): AxiosPromise<IPostTreeResponse> => axiosInstance.post(Endpoints.TREE.POST_TREE,params);

export const getTree = (params: IGetTreeRequest): AxiosPromise<ITreeResponse[]> => {
    let query = '/?page='+params.page+'&per_page='+params.per_page;
    if(params.author){
        query+='&author='+params.author;
    }
    if(params.name){
        query+='&name='+params.name;
    }
    if(params.public){
        query+='&public='+params.public;
    }   
    
    return axiosInstance.get(Endpoints.TREE.GET_TREE+query);
}

export const putTree = (params: IPutTreeRequest): void =>{ axiosInstance.put(Endpoints.TREE.PUT_TREE + '/' + params.id, params)};
