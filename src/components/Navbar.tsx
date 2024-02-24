import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const links = [
  { name: 'Suma', href: '/add', current: false },
  { name: 'Resta', href: '/subtract', current: false },
  { name: 'Multiplicacion', href: '/multiply', current: false },
  { name: 'Division', href: '/split', current: false },
]

function classNames(...clases: string[]) {
  return clases.filter(Boolean).join(' ')
}

export function Navbar() {
  return (
    <Disclosure as="nav" className="bg-yellow-200">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Menu mobile */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open
                    ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      )
                    : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center gap-3">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="/logo-page.png"
                    alt="Math"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="/logo-page.png"
                    alt="Math"
                  />
                  <Link className="text-2xl font-bold" to="/">
                    MATEMATICAS
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {links.map(item => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-black hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-lg font-light',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {links.map(item => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
