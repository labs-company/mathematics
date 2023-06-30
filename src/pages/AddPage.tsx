import { useState } from "react";
import { Banner } from "../components/Banner";
import { Navbar } from "../components/Navbar";
import { Modal } from "../components/Modal";
import suma from "../assets/data/add";

export default function AddPage() {
  const [open, setOpen] = useState(false);

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
