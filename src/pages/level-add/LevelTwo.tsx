import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  closestCorners,
} from '@dnd-kit/core'
import { BoardSections as BoardSectionsType } from '../../utils/types'
import suma from '../../assets/data/add'
import { Banner } from '../../components/Banner'
import { Modal } from '../../components/Modal'
import { useDraggableContext } from '../../hooks/useDraggable'
import { Container } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { INITIAL_DRAGG_LVL_TWO } from '../../assets/data/add_dragg'
import { findSectionContainer, initilizeBoardDrop } from '../../utils/board'
import { useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'
import { getElementDraggId } from '../../utils/elementDragg'
import { BoardDroppableSection } from '../../components/BoardSectionDrop'
import { ItemDraggable } from '../../components/ItemDraggable'
import { Link } from 'react-router-dom'

export default function LevelTwoAdd() {
  const {
    handleModalClick,
    open,
    setOpen,
    sensors,
    handleDragStart,
    activeId,
    setActivedId,
    dropAnimation,
  } = useDraggableContext()

  const draggableItemContent = INITIAL_DRAGG_LVL_TWO
  const initialBoard = initilizeBoardDrop(draggableItemContent)
  const [boardSections, setBoardSections] =
    useState<BoardSectionsType>(initialBoard)

  const handleDragOver = ({ active, over }: DragOverEvent) => {
    // Find the containers
    const activeContainer = findSectionContainer(
      boardSections,
      active.id as string,
    )
    const overContainer = findSectionContainer(
      boardSections,
      over?.id as string,
    )

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return
    }

    setBoardSections((boardSection) => {
      const activeItems = boardSection[activeContainer]
      const overItems = boardSection[overContainer]

      // Find the indexes for the items
      const activeIndex = activeItems.findIndex((item) => item.id === active.id)
      const overIndex = overItems.findIndex((item) => item.id !== over?.id)

      return {
        ...boardSection,
        [activeContainer]: [
          ...boardSection[activeContainer].filter(
            (item) => item.id !== active.id,
          ),
        ],
        [overContainer]: [
          ...boardSection[overContainer].slice(0, overIndex),
          boardSections[activeContainer][activeIndex],
          ...boardSection[overContainer].slice(
            overIndex,
            boardSection[overContainer].length,
          ),
        ],
      }
    })
  }

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    const activeContainer = findSectionContainer(
      boardSections,
      active.id as string,
    )
    const overContainer = findSectionContainer(
      boardSections,
      over?.id as string,
    )

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      return
    }

    const activeIndex = boardSections[activeContainer].findIndex(
      (item) => item.id === active.id,
    )
    const overIndex = boardSections[overContainer].findIndex(
      (item) => item.id === over?.id,
    )

    if (activeIndex !== overIndex) {
      setBoardSections((boardSection) => ({
        ...boardSection,
        [overContainer]: arrayMove(
          boardSection[overContainer],
          activeIndex,
          overIndex,
        ),
      }))
    }

    setActivedId(null)
  }

  const dragg = activeId
    ? getElementDraggId(draggableItemContent, activeId)
    : null
  return (
    <>
      <Banner
        title='Suma - Level 2'
        handleModalClick={handleModalClick}
        icon='+'
      />
      <Modal
        title={suma.title}
        description={suma.description}
        option={open}
        setOpen={setOpen}
      />
      <Container>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
        >
          <Grid
            container
            spacing={8}
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexWrap='wrap'
            height='83.3vh'
          >
            {Object.keys(boardSections).map((boardSectionKey) => (
              <Grid key={boardSectionKey} xs={6}>
                <BoardDroppableSection
                  id={boardSectionKey}
                  itemsDragg={boardSections[boardSectionKey]}
                />
              </Grid>
            ))}
            <DragOverlay dropAnimation={dropAnimation}>
              {dragg ? <ItemDraggable dragg={dragg} /> : null}
            </DragOverlay>
          </Grid>
        </DndContext>
        <div className='flex justify-end p-2'>
          <Link
            to='/level-add/levelthree'
            className='hover:bg-black hover:text-white hover:p-2 hover:rounded-md hover:transition'
          >
            Siguiente Nivel
          </Link>
        </div>
      </Container>
    </>
  )
}
