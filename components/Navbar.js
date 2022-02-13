import { Disclosure, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import useActiveSection from './hooks/useActiveSection'
import { classNames } from './utils/classNames'

const navigation = [
  { name: 'Home', id: 'home' },
  { name: 'Middle', id: 'middle' },
  { name: 'Bottom', id: 'bottom' },
  { name: 'End', id: 'end' },
]

export default function Navbar() {
  const activeSection = useActiveSection()
  return (
    <Disclosure
      as='nav'
      className={'fixed bottom-0 sm:bottom-auto w-full z-10'}
    >
      {({ open }) => (
        <>
          <Transition
            enter='transition duration-200 ease-out'
            enterFrom='transform translate-y-4 opacity-0'
            enterTo='transform translate-y-0 opacity-100'
            leave='transition duration-75 ease-out'
            leaveFrom='transform translate-y-0 opacity-100'
            leaveTo='transform translate-y-4 opacity-0'
            unmount={false}
          >
            <Disclosure.Panel className='sm:hidden' unmount={false}>
              <div className='px-4 pt-2 pb-3 space-y-4 flex flex-col justify-end items-end'>
                {navigation.map((item) => (
                  <Disclosure.Button
                    as='a'
                    key={item.name}
                    href={`#${item.id}`}
                    className={classNames(
                      item.id === activeSection
                        ? 'bg-gray-900/10 -translate-x-5'
                        : 'bg-gray-900/50 hover:bg-gray-700/50',
                      'text-white px-6 py-1 pt-2 rounded-xl font-display text-xl backdrop-blur-sm backdrop-saturate-200 transition-transform shadow-lg'
                    )}
                    aria-current={
                      item.id === activeSection ? 'page' : undefined
                    }
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='relative flex justify-between items-center h-20 sm:h-24'>
              <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-full bg-gray-900/50 hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white backdrop-blur-sm backdrop-saturate-200 shadow-lg'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-9 w-9' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-9 w-9' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-end'>
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={`#${item.id}`}
                        title={item.name}
                        className={classNames(
                          item.id === activeSection
                            ? 'bg-gray-900/10 translate-y-1'
                            : 'bg-gray-900/50 hover:bg-gray-700/50 hover:text-white',
                          'text-white px-6 py-1 pt-2 rounded-xl font-display text-xl backdrop-blur-sm backdrop-saturate-200 transition-transform shadow-lg'
                        )}
                        aria-current={
                          item.id === activeSection ? 'page' : undefined
                        }
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}