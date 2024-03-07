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
      <Route path="/mul" component={Mul} />
      <Route path="/div" component={Div} />
    </>
  )
}

export default App
