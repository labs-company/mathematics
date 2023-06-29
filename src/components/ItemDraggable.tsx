import { Draggable } from "./Draggable";
type ItemDraggableProps = {
  id: string;
  content: string;
};
export function ItemDraggable({ id, content }: ItemDraggableProps) {
  return (
    <Draggable id={id}>
      <img
        src={content}
        className="inline-block h-16 w-16 rounded-full ring-2 ring-white"
      />
    </Draggable>
  );
}
