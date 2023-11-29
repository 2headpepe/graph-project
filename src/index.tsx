import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import { setupStore } from "./store/store";
import { Provider } from "react-redux";
import GraphPage from "./pages/GraphPage/GraphPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
// import TreePage from "./pages/TreePage/TreePage";

export const store = setupStore();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="register"
            element={<RegisterPage />}
          ></Route>
          <Route
            path="login"
            element={<LoginPage />}
          ></Route>
          <Route
            path="dashboard"
            element={<DashboardPage />}
          ></Route>
          <Route
            path="tree/:id"
            element={<GraphPage />}
          ></Route>
          <Route
            path=""
            element={<LandingPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
