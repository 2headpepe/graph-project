const Endpoints = {
  AUTH: {
    LOGIN: "/user/login",
    REGISTER: "/user/register",
  },
  SKILL: {
    POST_SKILL: "/skill",
    GET_SKILLS: "/skill",
    SELECT_SKILL: "/skill",
    DELETE_SKILL: "/skill",
  },
  TREE: {
    GET_BY_ID: "/tree",
    POST_TREE: "/tree",
    PUT_TREE: "/tree",
    GET_TREE: "/tree",
  },
  LINK: {
    POST_LINK: "/link",
    GET_LINKS: "/link",
  },
  USER:{
    GET_USER: "/user/me",
    PUT_USER: "/user",
  }
};

export default Endpoints;
