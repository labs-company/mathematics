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

export const findSectionContainer = (
  boardSections: BoardSections,
  id: string
) => {
  if (id in boardSections) {
    return id;
  }

  const container = Object.keys(boardSections).find((key) => {
    boardSections[key].find((item) => item.id === id);
  });

  return container;
};
