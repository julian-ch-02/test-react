import React from "react";
import { useRoutes } from "react-router-dom";
import WareHousePage from "./WareHousePage";
import DetailWareHousePage from "./DetailWareHousePage";

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <WareHousePage />,
    },
    {
      path: "/:id",
      element: <DetailWareHousePage />,
    },
  ]);
};

export default AppRoutes;
