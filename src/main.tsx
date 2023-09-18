import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";

import About from "./Pages/About/index.tsx";
import Clients from "./Pages/Clients/index.tsx";
import Contacts from "./Pages/Contacts/index.tsx";
import Home from "./Pages/Home/index.tsx";
import Projects from "./Pages/Projects/index.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/clients",
        element: <Clients />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
