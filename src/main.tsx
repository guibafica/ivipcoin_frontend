import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { createTheme, ThemeProvider } from "@mui/material";

import { NotFound } from "./not-found-page";

import { Dashboard } from "./routes/dashboard";
import { Login } from "./routes/login";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />, // user ? <Dashboard /> : <Login />
    errorElement: <NotFound />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
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
      <Toaster richColors />
    </React.StrictMode>
  </ThemeProvider>
);
