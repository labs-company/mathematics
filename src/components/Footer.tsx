export function Footer() {
  return (
    <footer className="bg-zinc-900 shadow p-2 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl o-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-200 sm:text-center">
          <a href="https://castrogarciajs.dev" className="hover:underline" target="_blank" rel="noreferrer">
            Made by Sebastián García
          </a>
          {' '}
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
