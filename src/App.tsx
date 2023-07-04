import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import RoutesApplication from "./routes/routes";

function App() {
  return (
    <>
      <Navbar />

      <RoutesApplication />
      <Footer />
    </>
  );
}

export default App;
