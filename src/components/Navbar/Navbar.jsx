import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { WaveScopeLogotipo } from "../../assets/wave-scope-icons";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "New Realeases", href: "#", current: false },
  { name: "Top 200", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-28 items-center justify-between">
              <div className="flex flex-1 items-center justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <div className="block h-20 w-auto lg:hidden">
                    <WaveScopeLogotipo width={100} />
                  </div>
                  <div className="hidden h-28 w-auto lg:block">
                    <WaveScopeLogotipo width={100} />
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-yellow text-dark"
                            : "text-dark hover:bg-yellow",
                          "rounded-md px-3 py-2 text-lg font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-dark">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-10 w-10" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-10 w-10" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? " bg-yellow text-dark"
                      : "text-dark hover:bg-yellow",
                    "block rounded-md px-3 py-2 text-lg font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
