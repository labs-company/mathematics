import { ElementDragg } from "../../utils/types";
import { v4 as uuidv4 } from "uuid";
import basketball from "../basketball-svgrepo-com.svg";

export const INITIAL_DRAGG: ElementDragg[] = [
  {
    id: uuidv4(),

    content: basketball,
    status: "backlog",
  },
  {
    id: uuidv4(),
    content: basketball,
    status: "backlog",
  },
  {
    id: uuidv4(),
    content: basketball,
    status: "done",
  },
];