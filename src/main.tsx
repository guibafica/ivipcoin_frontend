import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./error-page";

import { Index } from "./routes";
import { Login } from "./routes/login";

// import { App } from "./app";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />, // user ? <Index /> : <Login />
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
