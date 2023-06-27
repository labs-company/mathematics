import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import AddPage from "../pages/AddPage";
import SubtractPage from "../pages/SubtractPage";
import MultiplyPage from "../pages/MultiplyPage";
import SplitPage from "../pages/SplitPage";

export default function RoutesApplication() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddPage />} />
      <Route path="/subtract" element={<SubtractPage />} />
      <Route path="/multiply" element={<MultiplyPage />} />
      <Route path="/split" element={<SplitPage />} />
    </Routes>
  );
}
