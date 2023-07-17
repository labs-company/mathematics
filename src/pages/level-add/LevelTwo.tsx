import suma from "../../assets/data/add";
import { Banner } from "../../components/Banner";
import { Modal } from "../../components/Modal";
import { useDraggableContext } from "../../hooks/useDraggable";
import { Container } from "@mui/material";

export function LevelTwoAdd() {
  const { handleModalClick, open, setOpen } = useDraggableContext();

  return (
    <>
      <Banner title="Suma - Level 2" handleModalClick={handleModalClick} />
      <Modal
        title={suma.title}
        description={suma.description}
        option={open}
        setOpen={setOpen}
      />
      <Container>
        <h1>Hola level 2</h1>
      </Container>
    </>
  );
}
