import { Navbar } from "../components/Navbar";
import fondo from "../assets/fondo.png";
import confetti from "canvas-confetti";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <section className="flex justify-between items-end">
        <div className="text-center self-center flex flex-col items-center gap-5">
          <h1 className="font-bold text-5xl">Matematicas</h1>
          <p className="font-light text-xl whitespace-pre-wrap px-5">
            Aprende Matematicas arrastrando y soltando y complemetando las
            decenas
          </p>
          <button
            className="uppercase bg-blue-700 text-white p-4 hover:bg-blue-900 w-64"
            onClick={() => confetti()}
          >
            Comienza ahora!
          </button>
        </div>
        <div>
          <img
            src={fondo}
            alt="mathematics"
            className="object-cover object-left-bottom inset-0 relative z-40"
          />
        </div>
      </section>
    </>
  );
}
