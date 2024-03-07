import { Route } from 'wouter'
import Navbar from './components/navbar'
import Sum from './routes/sum'
import Res from './routes/res'
import Mul from './routes/mul'
import Home from './routes/home'
import Div from './routes/div'
import SumLvlTwo from './routes/sum-lvl-two'
import SumLvlThree from './routes/sum-lvl-three'

function App() {
  return (
    <>
      <Navbar />
      <Route path="/" component={Home} />
      <Route path="/sum" component={Sum} />
      <Route path="/sum/lvl-two" component={SumLvlTwo} />
      <Route path="/sum/lvl-three" component={SumLvlThree} />
      <Route path="/res" component={Res} />
      <Route path="/mul" component={Mul} />
      <Route path="/div" component={Div} />
    </>
  )
}

export default App
