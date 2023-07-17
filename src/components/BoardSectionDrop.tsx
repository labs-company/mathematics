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
  itemsDragg: ElementDragg[];
};

export function BoardDroppableSection({ id, itemsDragg }: BoardDroppableProp) {
  const { setNodeRef } = useDroppable({
    id,
  });
  return (
    <Box
      sx={{
        backgroundColor: "#eee",
        padding: 2,
        height: "max-content",
        borderRadius: "20px",
      }}
      className="shadow"
    >
      <SortableContext
        id={id}
        items={itemsDragg}
        strategy={verticalListSortingStrategy}
      >
        <div ref={setNodeRef} className="flex justify-center flex-wrap">
          {itemsDragg.map((dragItem) => (
            <Box
              key={dragItem.id}
              sx={{
                mb: 2,
                display: "inline-block",
                marginRight: 2,
              }}
            >
              <SortableItem id={dragItem.id || null}>
                <ItemDraggable dragg={dragItem} />
              </SortableItem>
            </Box>
          ))}
        </div>
      </SortableContext>
    </Box>
  );
}
