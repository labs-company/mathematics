import { Banner } from "../../components/Banner";

export function LevelTwoAdd() {
  const handleClick = () => {
    console.log("Open bug")
  };
  return (
    <>
      <Banner title="Suma - Level 2" handleModalClick={handleClick} />
    </>
  );
}
