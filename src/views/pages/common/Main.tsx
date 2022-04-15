import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../Home/Home"));
// Code splitting
export const Main = () => {
  return (
    <div className="container mx-auto">
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="#" element={{}} />
        </Routes>
      </Suspense>
    </div>
  );
};
