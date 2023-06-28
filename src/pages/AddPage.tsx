import { useState } from "react";
import { Banner } from "../components/Banner";
import { Navbar } from "../components/Navbar";
import { Modal } from "../components/Modal";
import { ItemDraggable } from "../components/ItemDraggable";
import { Draggable } from "../components/Draggable";
import suma from "../assets/data/add";
import basketball from "../assets/basketball-svgrepo-com.svg";
import { Droppable } from "../components/Droppable";
import { DndContext, DragEndEvent, UniqueIdentifier } from "@dnd-kit/core";

export default function AddPage() {
  const [open, setOpen] = useState(false);
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);

  const handleModalClick = () => {
    setOpen(!open);
  };
  const draggable = (
    <>
      <Draggable id="1">
        <ItemDraggable item={basketball} />
      </Draggable>
    </>
  );
  const handleDragEnd = ({ over }: DragEndEvent) => {
    setParent(over ? over.id : null);
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
      <DndContext onDragEnd={handleDragEnd}>
        <section className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="flex justify-around items-center">
            <div className="border-solid border-2 border-zinc-600 p-10 shadow flex justify-center flex-wrap">
              {/* <Draggable id="3">
                <ItemDraggable item={basketball} />
              </Draggable>
              <Draggable id="4">
                <ItemDraggable item={basketball} />
  </Draggable> */}
              {!parent ? draggable : null}
            </div>
            <Droppable id="drop">
              <span>{parent === "drop" ? draggable : "Drop here"}</span>
            </Droppable>
          </div>
        </section>
      </DndContext>
    </>
  );
}
