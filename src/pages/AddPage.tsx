import { useRef, useState } from "react";
import { Banner } from "../components/Banner";
import { Navbar } from "../components/Navbar";
import { Modal } from "../components/Modal";
import suma from "../assets/data/add";
import basketball from "../assets/basketball-svgrepo-com.svg";
import { Droppable } from "../components/Droppable";
import { DndContext, DragEndEvent, UniqueIdentifier } from "@dnd-kit/core";
import { ItemDraggable } from "../components/ItemDraggable";

export default function AddPage() {
  const [open, setOpen] = useState(false);
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);

  const [draggableItems, _] = useState([
    { id: "1", content: useRef(basketball) },
  ]);

  const handleModalClick = () => {
    setOpen(!open);
  };

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
              {!parent &&
                draggableItems.map((item) => (
                  <ItemDraggable
                    key={item.id}
                    id={item.id}
                    content={item.content.current}
                  />
                ))}
            </div>
            {parent === "drop" ? (
              <Droppable id="drop">
                {draggableItems.map((item) => (
                  <ItemDraggable
                    key={item.id}
                    id={item.id}
                    content={item.content.current}
                  />
                ))}
              </Droppable>
            ) : (
              <Droppable id="drop">
                <>Drop here</>
              </Droppable>
            )}
          </div>
        </section>
      </DndContext>
    </>
  );
}
