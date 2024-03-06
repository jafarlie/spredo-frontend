'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Dialog, Popover } from '@headlessui/react'
import Logo from '../../../../public/Logo.png'

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Button } from 'antd'

const products = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of your traffic',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will convert',
    href: '#',
    icon: ArrowPathIcon,
  },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showHamburgerIcon, setShowHamburgerIcon] = useState(true)

  const toggleVisibility = () => {
    setShowHamburgerIcon(!showHamburgerIcon)
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleMenuClick = () => {
    console.log('HHHHH')
    setShowHamburgerIcon(!showHamburgerIcon)
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="bg-nutty">
      <nav
        className="sm:ml-[8%] mr-2 xs:mr-4 xs:ml-4 sm:mr-[8%] flex max-w-7xl items-center justify-between pt-6 pb-6 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="">
            <span className="sr-only">Spredo</span>
            <Image src={Logo} alt="" width={200} height={200}></Image>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => toggleVisibility()}
          >
            {showHamburgerIcon && (
              <>
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />{' '}
              </>
            )}
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-24">
          <Link
            href="/#about"
            className="text-lg font-semibold leading-6"
            style={{ color: 'white' }}
          >
            About Us
          </Link>
          {/* <Link
            href="#products"
            className="text-lg font-semibold leading-6"
            style={{ color: "white" }}
          >
            Products
          </Link> */}
          <Link
            href="/blog"
            className="text-lg font-semibold leading-6"
            style={{ color: 'white' }}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-lg font-semibold leading-6"
            style={{ color: 'white' }}
            onClick={() => handleMenuClick()}
          >
            Contact Us
          </Link>
        </Popover.Group>
        {process.env.NODE_ENV === 'development' ? (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/signin"
              className="text-lg font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        ) : (
          ''
        )}
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => toggleVisibility()}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed bg-nutty inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-full sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="./Logo.png" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => toggleVisibility()}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="space-y-2 mt-6 flow-root font-sans">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <button className="block" onClick={toggleVisibility}>
                  <Link
                    href="/#about"
                    className="-mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    About Us
                  </Link>
                </button>

                {/* <Link
                  href="#products"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Products
                </Link> */}
                <Link
                  href="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </Link>
                <button className="block" onClick={toggleVisibility}>
                  <Link
                    href="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contact Us
                  </Link>
                </button>
              </div>
              {process.env.NODE_ENV === 'development' ? (
                <div className="py-6">
                  <a
                    href="/signin"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Navbar
