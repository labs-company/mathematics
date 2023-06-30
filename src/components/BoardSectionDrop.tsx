import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Box } from "@mui/material";
import { ElementDragg } from "../utils/types";
import { ItemDraggable } from "./ItemDraggable";
import { SortableItem } from "./SortableItem";

type BoardDroppableProp = {
  id: string;
  itemDragg: ElementDragg[];
};

export const BoardDroppableSection = ({
  id,
  itemDragg,
}: BoardDroppableProp) => {
  const { setNodeRef } = useDroppable({
    id,
  });
  return (
    <Box sx={{ backgroundColor: "#eee", padding: 2 }}>
      <SortableContext
        id={id}
        items={itemDragg}
        strategy={verticalListSortingStrategy}
      >
        <div ref={setNodeRef}>
          {itemDragg.map((dragItem) => (
            <Box key={dragItem.id}>
              <SortableItem id={dragItem.id}>
                <ItemDraggable dragg={dragItem} />
              </SortableItem>
            </Box>
          ))}
        </div>
      </SortableContext>
    </Box>
  );
};
