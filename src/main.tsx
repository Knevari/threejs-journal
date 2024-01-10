import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Journal from "@/pages/Journal";
import Examples from "@/pages/Examples";
import Geometries from "@/pages/Geometries";

import "./styles/globals.css";
import { Container } from "@/components/Container";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Journal />,
  },
  {
    path: "/examples",
    element: <Examples />,
  },
  {
    path: "/geometries",
    element: <Geometries />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Container>
      <RouterProvider router={router} />
    </Container>
  </React.StrictMode>
);
