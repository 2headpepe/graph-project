export interface IUserResponse {
    uid: string;
    username: string;
    firstName: string,
    lastName: string,
    birthdate: string;
    email: string,
    avatarUrl: string;
    description: string,
    location: string,
    occupance: string,
    // countOfFollowers: number,
    // countOfLikes: number,
    // countOfTrees: number
  }

export interface IPutUserRequest {
    // username: string;
    firstName: string,
    lastName: string,
    birthdate: Date;
    // email: string,
    // avatarUrl: string,
    description: string,
    location: string,
    occupance: string, 
}