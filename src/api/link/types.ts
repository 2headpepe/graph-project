export interface IPostLinkRequest {
  source: string;
  target: string;
  tree: string;
}

export type ILinkResponse = ILink;

export interface IGetLinksRequest {
  tree: string;
}

export type ILinksResponse = ILink[];

export interface ILink {
  source: string;
  target: string;
}
