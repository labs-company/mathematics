import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

type propsDrag = { id: string; children: JSX.Element };

export function Draggable(props: propsDrag) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="p-2"
    >
      {props.children}
    </div>
  );
}