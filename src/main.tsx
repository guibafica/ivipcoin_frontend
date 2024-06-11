import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material";

import { NotFound } from "./not-found-page";

import { Index } from "./routes";
import { Login } from "./routes/login";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />, // user ? <Index /> : <Login />
    errorElement: <NotFound />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

const theme = createTheme({
  typography: {
    fontFamily: ["Dosis", "cursive"].join(","),
  },
});

console.log(" ");
console.log(" ");
console.log(
  "%c Made with ❤️ by Guilherme Bafica!",
  "color: #01bf71; background: #010606; border-radius: 4px; padding: 10px; font-size: 12px; font-weight: bold"
);
console.log(" ");
console.log(" ");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ThemeProvider>
);
