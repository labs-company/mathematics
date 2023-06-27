import fondo from "../assets/fondo.png";

export function Mathematics() {
  return (
    <section className="flex justify-start items-center">
      <div>
        <h1 className="font-light">Matematicas</h1>
      </div>
      <div className="relative w-full">
        <img
          src={fondo}
          alt="mathematics"
          className="absolute top-0 left-0 w-full h-full object-contain object-right-top"
          style={{ minHeight: "calc(100vh - 5rem)" }}
        />
      </div>
    </section>
  );
}
