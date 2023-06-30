import { BoardSections, ElementDragg, Status } from "./types";
import { BOARD_SECTIONS } from "./constants";
import { getStatusElementDragg } from "./elementDragg";

export const initilizeBoardDrop = (elementDraggs: ElementDragg[]) => {
  const boardSections: BoardSections = {};

  Object.keys(BOARD_SECTIONS).forEach((boardSectionKey) => {
    boardSections[boardSectionKey] = getStatusElementDragg(
      elementDraggs,
      boardSectionKey as Status
    );
  });
};
