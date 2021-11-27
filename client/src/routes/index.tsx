import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../Layout";
import { Loading } from "../components/Loading";

const Landing = lazy(() => import("../Pages/Landing"));
const Room = lazy(() => import("../Pages/Room"));

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path=":roomId" element={<Room />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};
