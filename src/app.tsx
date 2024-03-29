import { Route } from 'wouter'
import Navbar from './components/navbar'
import Sum from './routes/sum'
import Res from './routes/res'
import Mul from './routes/mul'
import Home from './routes/home'
import Div from './routes/div'
import SumLvlTwo from './routes/sum-lvl-two'
import SumLvlThree from './routes/sum-lvl-three'
import ResLvlTwo from './routes/res-lvl-two'
import ResLvlThree from './routes/res-lvl-three'
import MulLvlTwo from './routes/mul-lvl-two'
import MulLvlThree from './routes/mul-lvl-three'
import DivLvlTwo from './routes/div-lvl-two'
import DivLvlThree from './routes/div-lvl-three'

function App() {
  return (
    <>
      <Navbar />
      <Route path="/" component={Home} />
      <Route path="/sum" component={Sum} />
      <Route path="/sum/lvl-two" component={SumLvlTwo} />
      <Route path="/sum/lvl-three" component={SumLvlThree} />
      <Route path="/res" component={Res} />
      <Route path="/res/lvl-two" component={ResLvlTwo} />
      <Route path="/res/lvl-three" component={ResLvlThree} />
      <Route path="/mul/lvl-two" component={MulLvlTwo} />
      <Route path="/mul/lvl-three" component={MulLvlThree} />
      <Route path="/mul" component={Mul} />
      <Route path="/div" component={Div} />
      <Route path="/div/lvl-two" component={DivLvlTwo} />
      <Route path="/div/lvl-three" component={DivLvlThree} />
    </>
  )
}

export default App
