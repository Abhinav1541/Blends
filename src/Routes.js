import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import OGTwo from "pages/OGTwo";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <OGTwo /> },
    { path: "*", element: <NotFound /> },
    {
      path: "ogtwo",
      element: <OGTwo />,
    },
  ]);

  return element;
};

export default ProjectRoutes;

