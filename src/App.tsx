import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import RoutesApplication from "./routes/routes";
import { ErrorBoundary } from "./components/ErrorBoundary";

function App() {
  return (
    <>
      <Navbar />
      <ErrorBoundary>
        <RoutesApplication />
      </ErrorBoundary>
      <Footer />
    </>
  );
}

export default App;
