import { Banner } from "../components/Banner";
import { Navbar } from "../components/Navbar";
import { Modal } from "../components/Modal";

export default function AddPage() {
  return (
    <>
      <Navbar />
      <Banner title="Suma" />
      <Modal title="Que es la suma ?" description="bla bla bla" />
    </>
  );
}
