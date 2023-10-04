import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Box } from "@mui/material";
import { ElementDragg } from "../utils/types";
import { ItemDraggable } from "./ItemDraggable";
import { SortableItem } from "./SortableItem";
import { useState } from "react";

type BoardDroppableProp = {
  id: string;
  itemsDragg: ElementDragg[];
};

export function BoardDroppableSection({ id, itemsDragg }: BoardDroppableProp) {
  const { setNodeRef } = useDroppable({
    id,
  });

  const [maxOfElement, setMaxOfElement] = useState(itemsDragg.length)

  const isElderly = maxOfElement <= 3

  console.log(maxOfElement);
  
    console.log(isElderly);
    
    const isReferenceElement = (el: HTMLDivElement) => {
      setNodeRef(el)
      if(el) {
        setMaxOfElement(el.children.length)
      }
    }
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
        <div ref={isReferenceElement} className="flex justify-center flex-wrap">
          {itemsDragg.map((dragItem) => (
            <Box
              key={dragItem.id}
              sx={{
                mb: 2,
                display: "inline-block",
                marginRight: 2,
              }}
            >
              <SortableItem id={dragItem.id || null} disabled={isElderly}>
                <ItemDraggable dragg={dragItem} />
              </SortableItem>
            </Box>
          ))}
        </div>
      </SortableContext>
    </Box>
  );
}
