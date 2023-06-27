import fondo from "../assets/fondo.png";

export function Mathematics() {
  return (
    <section className="flex">
      <div className="text-center">
        <h1 className="font-bold text-3xl">Matematicas</h1>
        <p className="font-light text-lg">
          Aprende Matematicas arrastrando y soltando y complemetando las decenas
        </p>
        <button className="uppercase bg-blue-700 text-white p-4 hover:bg-blue-900">
          Comienza ahora!
        </button>
      </div>
      <div className="relative w-full">
        <img src={fondo} alt="mathematics" />
      </div>
    </section>
  );
}
