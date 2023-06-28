import { useState } from "react";
import { Banner } from "../components/Banner";
import { Navbar } from "../components/Navbar";
import { Modal } from "../components/Modal";
import { ItemDraggable } from "../components/ItemDraggable";
import { Draggable } from "../components/Draggable";
import suma from "../assets/data/add";
import basketball from "../assets/basketball-svgrepo-com.svg";
import { Droppable } from "../components/Droppable";

export default function AddPage() {
  const [open, setOpen] = useState(false);

  const handleModalClick = () => {
    if (!open) {
      setOpen(true);
      return;
    }

    return setOpen(false);
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
      <section className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center">
          <div className="border-solid border-2 border-zinc-600 p-10 shadow flex justify-center flex-wrap">
            <Draggable id="1">
              <ItemDraggable item={basketball} />
            </Draggable>
            <Draggable id="2">
              <ItemDraggable item={basketball} />
            </Draggable>
            <Draggable id="3">
              <ItemDraggable item={basketball} />
            </Draggable>
            <Draggable id="4">
              <ItemDraggable item={basketball} />
            </Draggable>
          </div>
          <Droppable id="droppable">
            <span>Drop Here !</span>
          </Droppable>
        </div>
      </section>
    </>
  );
}
