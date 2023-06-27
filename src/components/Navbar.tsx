import logo from "../assets/logo-page.png";
import { Disclosure } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

export function Navbar() {
  return (
    <Disclosure as="nav" className="bg-slate-200">
      {({ open }) => (
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/*Menu mobile*/}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <img
                  className="block h-8 w-auto lg:hidden"
                  src={logo}
                  alt="Math"
                />
                <img
                  className="hidden h-8 w-auto lg:block"
                  src={logo}
                  alt="Math"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </Disclosure>
  );
}
