import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { authRoutes, pagesRoutes } from "./index";
import Layout from "../layout/Layout";

const AllRoutes = () => {
  const basename = document.querySelector("base")?.getAttribute("href") ?? "/";
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/">
          {authRoutes.map((render) => (
            <Route
              key={render.name}
              path={render.path}
              element={render.component}
            />
          ))}
        </Route>
        <Route path="/" element={<Layout />}>
          {pagesRoutes.map((render) => (
            <Route
              key={render.name}
              path={render.path}
              element={render.component}
              index={render.index}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
