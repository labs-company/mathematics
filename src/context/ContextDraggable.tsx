import {
  DragStartEvent,
  DropAnimation,
  KeyboardSensor,
  PointerSensor,
  SensorDescriptor,
  SensorOptions,
  defaultDropAnimation,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { createContext, useState } from "react";

type ContextGlobals = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeId: string | null;
  setActivedId: React.Dispatch<React.SetStateAction<string | null>>;
  sensors: SensorDescriptor<SensorOptions>[];
  handleDragStart: ({ active }: DragStartEvent) => void;
  handleModalClick: () => void;
  dropAnimation: DropAnimation;
};

type ContextProps = {
  children: JSX.Element;
};

const Context = createContext<ContextGlobals | null>(null);

function ContextDraggable({ children }: ContextProps) {
  const [open, setOpen] = useState(false);
  const [activeId, setActivedId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = ({ active }: DragStartEvent) => {
    setActivedId(active.id as string);
  };
  const handleModalClick = () => {
    setOpen(!open);
  };
  const dropAnimation: DropAnimation = {
    ...defaultDropAnimation,
  };
  return (
    <Context.Provider
      value={{
        open,
        setOpen,
        activeId,
        setActivedId,
        sensors,
        handleDragStart,
        handleModalClick,
        dropAnimation,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextDraggable, Context };
