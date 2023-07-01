import { Card, CardContent } from "@mui/material";
import { ElementDragg } from "../utils/types";

type ElementDraggItem = {
  dragg: ElementDragg;
};

export function ItemDraggable({ dragg }: ElementDraggItem) {
  return (
    <Card>
      <CardContent>
        <img
          src={dragg.content}
          alt={dragg.id}
          className="inline-block h-16 w-16 rounded-full ring-2 ring-white"
        />
      </CardContent>
    </Card>
  );
}
