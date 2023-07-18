import { DndContext, closestCorners } from "@dnd-kit/core";
import suma from "../../assets/data/add";
import { Banner } from "../../components/Banner";
import { Modal } from "../../components/Modal";
import { useDraggableContext } from "../../hooks/useDraggable";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export function LevelTwoAdd() {
  const { handleModalClick, open, setOpen, sensors, handleDragStart } =
    useDraggableContext();

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
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={handleDragStart}
        >
          <Grid
            container
            spacing={8}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            height="83.3vh"
          ></Grid>
        </DndContext>
      </Container>
    </>
  );
}
