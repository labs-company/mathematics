import confetti from 'canvas-confetti'

export default function Home() {
  return (
    <>
      <section className="flex justify-center items-center h-[80vh] mt-[5.1rem]">
        <article className="px-8">
          <h1 className="font-bold text-7xl">Matematicas</h1>
          <p className="font-light text-xl text-pretty my-8">
            Aprende Matematicas arrastrando y soltando y complemetando las
            decenas con Dixon
          </p>
          <button
            className="uppercase bg-blue-700 text-white p-4 hover:bg-blue-900 w-64"
            onClick={() => confetti()}
          >
            Comienza ahora!
          </button>
        </article>
        <figure className="h-full">
          <img src="/fondo.png" alt="" className="object-cover aspect-video h-full" />
        </figure>
      </section>
    </>
  )
}
