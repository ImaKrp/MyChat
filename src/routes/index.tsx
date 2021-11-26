import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../Layout";
import { Loading } from "../components/Loading";

const Landing = lazy(() => import("../Pages/Landing"));

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path=":roomId" element={<Landing />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};
