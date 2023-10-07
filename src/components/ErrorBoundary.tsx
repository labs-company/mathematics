import { useEffect, useState } from 'react'

type ErrorBoundaryProps = {
  children: JSX.Element
}

export function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const errorHandler = (error: ErrorEvent) => {
      // Aquí puedes enviar el error a un servicio de registro de errores
      console.error(error.error)
      setHasError(true)
    }

    window.addEventListener('error', errorHandler)

    return () => {
      window.removeEventListener('error', errorHandler)
    }
  }, [])

  if (hasError) {
    const handleReload = () => {
      window.location.reload()
    }

    return (
      <main className='grid h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
        <div className='text-center'>
          <p className='text-base font-semibold text-black'>500</p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            Hubo un error. Por favor, recarga la página
          </h1>
          <p className='mt-6 text-base leading-7 text-gray-600'>
            Porfavor vuelve al menu principal o consulta con @netteam para
            posibles errores
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <button
              onClick={handleReload}
              className='rounded-md bg-yellow-200 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Recargar
            </button>
            <a
              href='github.com/netteam-novice'
              className='text-sm font-semibold text-gray-900'
            >
              Contact support <span aria-hidden='true'>&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    )
  }

  return children
}
