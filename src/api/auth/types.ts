export interface ILoginRequest {
  username: string;
  password: string;
}

export interface ILoginResponse {
  access_token: string;
  token_type: string;
}

export interface IRegisterRequest {
  username: string;
  firstname: string,
  lastname: string,
  birtdate: string;
  email: string,
  password: string
}

export interface IRegisterResponse {
  uid: string;
  username: string;
  firstname: string,
  lastname: string,
  birtdate: string;
  email: string,
  avatarUrl: string;
  description: string,
  location: string,
  occupance: string,
  externalLinks: string[],
  token: string,
  tokenType: string;
}


export interface IUser {
  uid: string;
  username: string;
  firstname: string,
  lastname: string,
  birtdate: string;
  email: string,
  avatarUrl: string;
  description: string,
  location: string,
  occupance: string,
  externalLinks: string[],
}