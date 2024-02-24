import type { BoardSections, ElementDragg, Status } from './types'
import { BOARD_SECTIONS } from './constants'
import { getStatusElementDragg } from './elementDragg'

export function initilizeBoardDrop(elementDraggs: ElementDragg[]) {
  const boardSections: BoardSections = {}

  Object.keys(BOARD_SECTIONS).forEach((boardSectionKey) => {
    boardSections[boardSectionKey] = getStatusElementDragg(
      elementDraggs,
      boardSectionKey as Status,
    )
  })

  return boardSections
}

export function findSectionContainer(boardSections: BoardSections, id: string) {
  if (id in boardSections)
    return id

  const container = Object.keys(boardSections).find((key) => {
    return boardSections[key].find(item => item.id === id)
  })

  return container
}
