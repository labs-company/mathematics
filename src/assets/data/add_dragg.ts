import { ElementDragg } from "../../utils/types";
import { v4 as uuidv4 } from "uuid";

export const INITIAL_DRAGG: ElementDragg[] = [
  {
    id: uuidv4(),

    content: "url",
    status: "backlog",
  },
  {
    id: uuidv4(),
    content: "Title 3",
    status: "backlog",
  },
  {
    id: uuidv4(),
    content: "Title 4",
    status: "done",
  },
];
