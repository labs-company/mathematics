import { useDroppable } from "@dnd-kit/core";

type propsDrop = { id: string; children: JSX.Element };

export function Droppable(props: propsDrop) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
