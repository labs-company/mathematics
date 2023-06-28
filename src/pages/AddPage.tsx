import { useState } from "react";
import { Banner } from "../components/Banner";
import { Navbar } from "../components/Navbar";
import { Modal } from "../components/Modal";
import suma from "../assets/data/add";
import { ItemDraggable } from "../components/ItemDraggable";
import basketball from "../assets/basketball-svgrepo-com.svg";

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
        <ItemDraggable item={basketball} />
      </section>
    </>
  );
}
