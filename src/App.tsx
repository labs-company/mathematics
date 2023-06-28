import RoutesApplication from "./routes/routes";
import { DndContext } from "@dnd-kit/core";

function App() {
  return (
    <DndContext>
      <RoutesApplication />;
    </DndContext>
  );
}

export default App;
