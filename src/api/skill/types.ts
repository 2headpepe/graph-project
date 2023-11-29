export interface IPostSkillRequest {
  name: string;
  description: string;
  tree: string;
  position: {
    x: number;
    y: number;
  };
}

export interface IGetSkillsRequest {
  tree: string;
}

export interface ISelectSkillRequest {
  skill_uid: string;
}

export type IDeleteSkillRequest = ISelectSkillRequest;

export interface ISkillResponse {
  uid: string;
  name: string;
  description: string;
  tree: string;
  author: string;
  position: {
    x: number;
    y: number;
  };
}

export type ISkill = ISkillResponse;

export type ISkillsResponse = ISkillResponse[];
