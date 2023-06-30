import { ElementDragg } from "../utils/types";

type ElementDraggItem = {
  dragg: ElementDragg;
};

export const ItemDraggable = ({ dragg }: ElementDraggItem) => {
  return (
    <div>
      <img src={dragg.content} alt={dragg.id} />
    </div>
  );
};
