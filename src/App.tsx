import { Route } from 'wouter'
import Navbar from './components/navbar'
import Sum from './routes/sum'
import Res from './routes/res'
import Mul from './routes/mul'
import Home from './routes/home'
import Div from './routes/div'

function App() {
  return (
    <>
      <Navbar />
      <Route path="/" component={Home} />
      <Route path="/sum" component={Sum} />
      <Route path="/res" component={Res} />
      <Route path="/mul" component={Mul} />
      <Route path="/div" component={Div} />
    </>
  )
}

export default App
