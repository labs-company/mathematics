import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Sum from '../pages/sum'
import SumLvlTwo from '../pages/lvl-sum/lvl-two'
import SumLvlThree from '../pages/lvl-sum/lvl-three'
import Subtract from '../pages/subtract'
import SubtractLvlTwo from '../pages/lvl-subtract/lvl-two'
import SubtractLvlThree from '../pages/lvl-subtract/lvl-three'
import Multiply from '../pages/multiply'
import MultiplyLvlTwo from '../pages/lvl-multiply/lvl-two'
import MultiplyLvlThree from '../pages/lvl-multiply/lvl-three'
import Split from '../pages/split'
import SplitLvlTwo from '../pages/lvl-split/lvl-two'
import SplitLvlThree from '../pages/lvl-split/lvl-three'
import NotFound from '../pages/not-found'

export default function RoutesApplication() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sum" element={<Sum />} />
      <Route path="/sum/lvl-two" element={<SumLvlTwo />} />
      <Route path="/sum/lvl-three" element={<SumLvlThree />} />
      <Route path="/subtract" element={<Subtract />} />
      <Route path="/subtract/lvl-two" element={<SubtractLvlTwo />} />
      <Route
        path="/subtract/lvl-three"
        element={<SubtractLvlThree />}
      />
      <Route path="/multiply" element={<Multiply />} />
      <Route path="/multiply/lvl-two" element={<MultiplyLvlTwo />} />
      <Route path="/multiply/lvl-three" element={<MultiplyLvlThree />} />
      <Route path="/split" element={<Split />} />
      <Route path="/split/lvl-two" element={<SplitLvlTwo />} />
      <Route path="/split/lvl-three" element={<SplitLvlThree />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
