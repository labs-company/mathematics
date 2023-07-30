import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import AddPage from "../pages/AddPage";
import SubtractPage from "../pages/SubtractPage";
import MultiplyPage from "../pages/MultiplyPage";
import SplitPage from "../pages/SplitPage";
import NotFoundPage from "../pages/NotFoundPage";
import LevelTwoAdd from "../pages/level-add/LevelTwo";
import LevelThreeAdd from "../pages/level-add/LevelThree";
import LevelTwoSubtract from "../pages/level-subtract/LevelTwo";

export default function RoutesApplication() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddPage />} />
      <Route path="/subtract" element={<SubtractPage />} />
      <Route path="/multiply" element={<MultiplyPage />} />
      <Route path="/split" element={<SplitPage />} />
      <Route path="/level-add/leveltwo" element={<LevelTwoAdd />} />
      <Route path="/level-add/levelthree" element={<LevelThreeAdd />} />
      <Route path="/level-subtract/leveltwo" element={<LevelTwoSubtract/>}/>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
