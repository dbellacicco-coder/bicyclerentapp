import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";

const routes = [
  {
    id: 1,
    to: "/",
    path: "/",
    Component: Home,
    name: "Home",
  },
  {
    id: 2,
    to: "/bicycles",
    path: "/bicycles",
    Component: Home,
    name: "Bicycles",
  },
];

const APPRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((route) => {
          const { id, path, Component } = route;
          return <Route key={id} path={path} element={<Component />} />;
        })}
        <Route path="/" element={<h1>Bicke selected</h1>} />
      </Route>
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default APPRouter;
