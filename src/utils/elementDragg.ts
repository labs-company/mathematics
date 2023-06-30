import { ElementDragg, Status } from "./types";

export const getStatusElementDragg = (
  elementDraggs: ElementDragg[],
  status: Status
) => {
  return elementDraggs.filter((elementDrag) => elementDrag.status === status);
};

export const getElementDraggId = (
  elementDraggs: ElementDragg[],
  id: string
) => {
  return elementDraggs.find((elementDragg) => elementDragg.id === id);
};
