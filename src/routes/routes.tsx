import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";

export default function RoutesApplication() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
