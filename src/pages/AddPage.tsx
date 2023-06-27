import { useState } from "react";
import { Banner } from "../components/Banner";
import { Navbar } from "../components/Navbar";
import { Modal } from "../components/Modal";

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
        title="¿QUE ES LA SUMA?"
        description="bla bla bla"
        option={open}
        setOpen={setOpen}
      />
      <div>{JSON.stringify(open)}</div>
    </>
  );
}
