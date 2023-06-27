import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import AddPage from "../pages/AddPage";
import SubtractPage from "../pages/SubtractPage";

export default function RoutesApplication() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddPage />} />
      <Route path="/subtract" element={<SubtractPage />} />
    </Routes>
  );
}
