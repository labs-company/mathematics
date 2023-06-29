import { useDroppable } from "@dnd-kit/core";

type PropsDrop = { id: string; children: JSX.Element | JSX.Element[] };

export function Droppable(props: PropsDrop) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="border-dashed border-2 border-zinc-900 p-10 shadow"
    >
      {Array.isArray(props.children) ? (
        props.children.map((child, index) => <div key={index}>{child}</div>)
      ) : (
        <div>{props.children}</div>
      )}
    </div>
  );
}
