import { useState } from "react";
import { Banner } from "../components/Banner";
import { Navbar } from "../components/Navbar";
import { Modal } from "../components/Modal";
import suma from "../assets/data/add";
import {
  useSensor,
  useSensors,
  PointerSensor,
  KeyboardSensor,
  DndContext,
  closestCorners,
  DragEndEvent,
  DragStartEvent,
  DragOverEvent,
  DragOverlay,
  DropAnimation,
  defaultDropAnimation,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates, arrayMove } from "@dnd-kit/sortable";
import { INITIAL_DRAGG } from "../assets/data/add_dragg";
import { BoardSections as BoardSectionsType } from "../utils/types";
import { getElementDraggId } from "../utils/elementDragg";
import { findSectionContainer, initilizeBoardDrop } from "../utils/board";
import { BoardDroppableSection } from "../components/BoardSectionDrop";
import { ItemDraggable } from "../components/ItemDraggable";

export default function AddPage() {
  const [open, setOpen] = useState(false);
  const draggItemContent = INITIAL_DRAGG;
  const initialBoard = initilizeBoardDrop(INITIAL_DRAGG);
  const [boardSections, setBoardSections] =
    useState<BoardSectionsType>(initialBoard);

  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = ({ active }: DragStartEvent) => {
    setActiveId(active.id as string);
  };

  const handleDragOver = ({ active, over }: DragOverEvent) => {
    // Find the containers
    const activeContainer = findSectionContainer(
      boardSections,
      active.id as string
    );
    const overContainer = findSectionContainer(
      boardSections,
      over?.id as string
    );

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    setBoardSections((boardSection) => {
      const activeItems = boardSection[activeContainer];
      const overItems = boardSection[overContainer];

      // Find the indexes for the items
      const activeIndex = activeItems.findIndex(
        (item) => item.id === active.id
      );
      const overIndex = overItems.findIndex((item) => item.id !== over?.id);

      return {
        ...boardSection,
        [activeContainer]: [
          ...boardSection[activeContainer].filter(
            (item) => item.id !== active.id
          ),
        ],
        [overContainer]: [
          ...boardSection[overContainer].slice(0, overIndex),
          boardSections[activeContainer][activeIndex],
          ...boardSection[overContainer].slice(
            overIndex,
            boardSection[overContainer].length
          ),
        ],
      };
    });
  };

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    const activeContainer = findSectionContainer(
      boardSections,
      active.id as string
    );
    const overContainer = findSectionContainer(
      boardSections,
      over?.id as string
    );

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      return;
    }

    const activeIndex = boardSections[activeContainer].findIndex(
      (task) => task.id === active.id
    );
    const overIndex = boardSections[overContainer].findIndex(
      (task) => task.id === over?.id
    );

    if (activeIndex !== overIndex) {
      setBoardSections((boardSection) => ({
        ...boardSection,
        [overContainer]: arrayMove(
          boardSection[overContainer],
          activeIndex,
          overIndex
        ),
      }));
    }

    setActiveId(null);
  };

  const dropAnimation: DropAnimation = {
    ...defaultDropAnimation,
  };
  const task = activeId ? getElementDraggId(draggItemContent, activeId) : null;

  const handleModalClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Navbar />
      <Banner title="Suma" handleModalClick={handleModalClick} />
      <Modal
        title={suma.title}
        description={suma.description}
        option={open}
        setOpen={setOpen}
      />
    </>
  );
}
