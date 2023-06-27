import fondo from "../assets/fondo.png";

export function Mathematics() {
  return (
    <section className="flex justify-center items-center">
      <div className="text-center self-start pt-32 flex flex-col items-center gap-5">
        <h1 className="font-bold text-5xl">Matematicas</h1>
        <p className="font-light text-xl">
          Aprende Matematicas arrastrando y soltando y complemetando las decenas
        </p>
        <button className="uppercase bg-blue-700 text-white p-4 hover:bg-blue-900 w-64">
          Comienza ahora!
        </button>
      </div>
      <div className="relative w-full">
        <img src={fondo} alt="mathematics" />
      </div>
    </section>
  );
}
