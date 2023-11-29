import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import thunk from "redux-thunk";
import treeReducer from "./reducers/treeReducer";
import authReducer from "./reducers/auth/authReducer";
import userReducer from "./reducers/user/userReducer";
import treeReducer2 from "./reducers/tree/treeReducer";

const rootReducer = combineReducers({ tree: treeReducer, auth: authReducer, user:userReducer, tree2:treeReducer2 });

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
setupListeners(setupStore().dispatch);
