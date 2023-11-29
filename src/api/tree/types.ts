export interface IGetTreeByIdRequest{
    uid:string;
}
export interface IGetTreeRequest{
  page:number;
  per_page:number;
  author:string;
  name?:string;
  public?:boolean;
}
export interface IPutTreeRequest{
  id:string;
  name:string;
  description:string;
}
export interface ITreeResponse{
  uid: string;
  name: string,
  description: string,
  public: boolean,
  publicGrades: boolean,
  author: string
}


export interface IPostTreeRequest{
  name: string,
  description: string,
  public: boolean,
  publicGrades: boolean
}

export interface IPostTreeResponse{
  uid: string,
  name: string,
  description: string,
  public: boolean,
  publicGrades: false,
  author: string
}

