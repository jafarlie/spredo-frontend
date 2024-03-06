'use client'

import Image from 'next/image'
import SpredoCartridge from '../../../public/SpredoCartridges.png'
import Founders from '../../../public/AboutUsSection.png'
import SpredoDeviceRed from '../../../public/DarkJellyBgRemoved.png'
// import NewsletterSubscription from '../forms/newsletterSubscribe/index'
import WhyUs from '../whyOurProduct/index'
import { Carousel } from 'antd'
import React, { useRef } from 'react'
import './styles.css'
import Link from 'next/link'
import {
  LockClosedIcon,
  ArrowPathIcon,
  ShoppingCartIcon,
  Cog8ToothIcon,
} from '@heroicons/react/24/outline'
import FAQComponent from '../faq/index'
import TrustedBy from '../trustedBy/index'
import ProductListComponent from '../productList/index'

const contentStyle: React.CSSProperties = {
  height: '300px',
  marginTop: '50px',
  color: 'white',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#dba76c',
}

const data = [
  {
    name: 'Ustin Zarubin',
    position: 'CEO, Streamdal',
    review:
      'Seems like everyone enjoys the unique spreads offered by Spredo. The device is work of art, simple in design and use. Definitely recommend having this device in your kitchen.',
  },
  {
    name: 'Kyle Grishenko',
    position: 'CEO, ActionHomeServices',
    review:
      'Our team is always on the go and Spredo is something we needed. The portable device makes our live easy and the Spredo flavours are just amazing.',
  },
  {
    name: 'Joshua Wattson',
    position: 'CEO, SimpliDesign',
    review:
      'Rarely do you come across something that exceeds your expectations right out of the box. This does that and then some. Highly recommend!',
  },
]

const features = [
  {
    name: 'Variety Choices',
    description:
      'Spredo partners with world-class manufacturers to deliver a variety of high-quality spreads to you, all on one platform.',
    icon: ShoppingCartIcon,
  },
  {
    name: 'Pick & Choose',
    description:
      "Tired of the same spread? Simply pick and choose your preferred spread delivery for the next month! It's that easy!",
    icon: LockClosedIcon,
  },
  {
    name: 'Monthly Restocking',
    description:
      "Each delivery brings a mix of classic and exotic flavors, ensuring a fresh twist to your daily meals. It's the perfect way to keep your pantry exciting.",
    icon: ArrowPathIcon,
  },
  {
    name: 'Maintenance',
    description:
      'Spredo is dedicated to provide best customer experience. If there are issues with the device, give us a call and we will get it fixed.',
    icon: Cog8ToothIcon,
  },
]

export default function Home() {
  const reasonsForSpredoRef = useRef<HTMLDivElement>(null)

  const handleLearnMoreClick = (e: { preventDefault: () => void }) => {
    e.preventDefault() // Prevent default anchor behavior
    reasonsForSpredoRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <section className="lg:pb-0 section-1">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row h-screen w-full md:flex-row">
            {/* Left Div */}
            <div className="landing-page-headers md:order-1 order-2 font-sans flex-grow flex-shrink-0 flex justify-center items-start flex-col p-4 space-y-6 mb-6 lg:w-1/3 md:w-1/3 lg:ml-32 sm:mt-3">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl mb-6">
                  Discover the new{' '}
                  <span style={{ color: '#640223' }}>
                    Office Kitchen Essential
                  </span>
                </h1>
                <p
                  className="max-w-[600px] text-gray-900 dark:text-gray-400"
                  style={{ fontSize: '18px' }}
                >
                  Elevate Your Office Kitchen with Gourmet Delights, Effortless
                  Management, Boost Employee Satisfaction at a Smart Cost
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-darkJelly px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="/contact"
                  style={{ color: 'white' }}
                >
                  Inquire Now
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="/#reasonsForSpredo"
                  onClick={handleLearnMoreClick}
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Div */}
            <div
              className="spredo-machine-container-parent flex-grow lg:w-2/3 lg:mr-2 order-1 md:order-2"
              // style={{ position: "relative" }}
            >
              {/* Content for the left div if any */}
              <div className="h-1/5 pt-10 sm:pt-2 pb-10 spredo-machine-container">
                <Image
                  src={SpredoDeviceRed}
                  alt=""
                  className="mt-12 spredo-machine"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <WhyUs />
      </section>

      <section className="bg-nutty">
        <div className="mx-auto">
          <div className="flex flex-col sm:flex-row w-screen">
            {/* <div className="bg-midnightGreen w-full sm:w-1/2 h-[380px] flex items-center justify-center order-1 sm:order-none">
              <h1
                className="lg:text-3xl sm-text-2xl mb-4 ml-0 sm:ml-24 font-extrabold tracking-wide"
                style={{ color: "#dba76c" }}
              >
                New spreads delivered to your door monthly!
              </h1>
            </div> */}
            <div className="bg-bread w-full sm:w-1/2 flex items-center justify-center order-1 sm:order-none">
              <h1
                className="lg:text-3xl sm:text-xl mb-4 ml-6 font-extrabold tracking-wide monthlySpreads"
                style={{ color: 'black' }}
              >
                Delivered Monthly to Your Office
              </h1>
            </div>
            <div className="w-1/2 h-full flex w-1/2 relative h-[450px] overflow-hidden  w-full sm:w-1/2 order-2 sm:order-none">
              <Image
                alt="Sandwich making machine Spredo"
                src={SpredoCartridge}
                style={{ objectFit: 'contain', height: '100%', width: '100%' }}
                quality={100}
              ></Image>
            </div>
          </div>

          <div
            className="flex w-full font-bold h-[180px]"
            style={{ color: 'white' }}
            ref={reasonsForSpredoRef}
            id="reasonsForSpredo"
          >
            <div className="w-1/3 p-4 border-t-2 border-b-2 border-r-2 border-black bg-nutty">
              <div className="aspect-w-1 aspect-h-1">
                <h1 className="text-lg sm:text-xl">01</h1>
                <div className="mt-4 sm:mt-9 text-lg sm:text-xl">
                  <span>Increased Employee Happiness</span>
                </div>
              </div>
            </div>
            <div className="w-1/3 p-4 bg-midnightGreen border-r-2 border-b-2 border-t-2 border-black">
              <div className="aspect-w-1 aspect-h-1">
                <h1 className="text-lg sm:text-xl">02</h1>
                <div className="mt-4 sm:mt-9 text-lg sm:text-xl">
                  <span>Cool New Food Tech in Your Kitchen</span>
                </div>
              </div>
            </div>
            <div className="w-1/3 p-4 border-t-2 border-r-2 border-b-2 bg-darkJelly border-black">
              <div className="aspect-w-1 aspect-h-1">
                <h1 className="text-lg sm:text-xl">03</h1>
                <div className="mt-4 sm:mt-9 text-lg sm:text-xl">
                  <span>Great Company Perk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ProductListComponent></ProductListComponent>
      </section>
      <section>
        <div
          className="bg-midnightGreen py-24 sm:py-32"
          style={{ color: 'white' }}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
                style={{ color: '#dba76c' }}
              >
                Benefits of Spredo
              </h2>
              <p className="mt-6 text-lg leading-8">
                Experience the ease of crafting delicious spreads with{' '}
                {`Spredo's `}
                diverse flavors - a simple way to elevate your sandwiches!
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-24 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div
                        style={{ border: '1px solid #dba76c' }}
                        className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg"
                      >
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>

                      <h1
                        className="text-2xl font-semibold mb-2"
                        style={{ color: '#dba76c' }}
                      >
                        <strong>{feature.name}</strong>
                      </h1>
                    </dt>
                    <dd
                      className="mt-2 text-base leading-7"
                      style={{ color: 'white' }}
                    >
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-nutty">
        <TrustedBy></TrustedBy>
      </section>
      <section id="about" className="bg-bread">
        <div className="bg-midnightGreen aboutUs relative mx-auto">
          <div className="h-screen w-full flex">
            {/* Left-hand side */}
            <div className="w-full sm:w-4/4 p-4 mx-4 sm:mx-0">
              <div className="lg:w-1/2 sm:w-full lg:ml-32 sm:ml-4 mt-8">
                <h1
                  className="text-4xl mb-4 font-extrabold tracking-wide"
                  style={{ color: '#dba76c' }}
                >
                  The Story of Two Guys Who were too Lazy to Make a Sandwich
                </h1>
                <p style={{ color: 'white' }} className="mt-6 text-md">
                  It all began in a small apartment kitchen. Zach and Elvin, two
                  friends with a shared passion for culinary adventures, found
                  themselves struggling time and again with the simple act of
                  making a spread sandwich. Whether it was peanut butter
                  clumping unevenly or jam spilling over the sides, their
                  sandwich-making sessions were always a messy affair.
                </p>
                <p style={{ color: 'white' }} className="mt-6 text-md">
                  After countless hours of brainstorming and prototyping, Spredo
                  was born. A solution that not only ensured a perfect spread
                  sandwich every time but also introduced users to a world of
                  diverse flavors through its subscription model. Through
                  Spredo, the duo transformed their sandwich struggles into a
                  culinary revolution, making sandwich-making a joy for many.
                </p>
              </div>
            </div>

            {/* Right-hand side */}
            <div className="hidden sm:block w-1/2 relative">
              <Image
                alt="founders"
                src={Founders}
                className="absolute top-0 bottom-0 w-auto h-full object-cover"
              ></Image>
            </div>
            <svg
              className="absolute bottom-0 w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#fff7e1"
                fillOpacity="1"
                d="M0,160L80,176C160,192,320,224,480,208C640,192,800,128,960,128C1120,128,1280,192,1360,224L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      <section className="bg-bread">
        <div className="container mx-auto px-4">
          <div className="h-[550px]">
            <div className="w-full text-center">
              <h1
                className="text-4xl mb-4 font-extrabold tracking-wide"
                style={{ color: '#05393c' }}
              >
                Customer Testimonials
              </h1>
              <div className="rounded-tl-3xl rounded-br-3xl carouselParentContainer">
                <Carousel style={{ color: 'white' }}>
                  {data.map((customer, idx) => (
                    <div key={idx} className="p-4 rounded shadow-lg">
                      <div className="text-center">
                        <h2 className="text-2xl font-semibold">
                          {customer.name}
                        </h2>
                        <p className="text-gray-500">{customer.position}</p>
                      </div>
                      <div className="mt-24 mb-12 text-xl">
                        <p className="text-gray-800">
                          &quot;{customer.review}&quot;
                        </p>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <NewsletterSubscription /> */}
      <FAQComponent />
    </>
  )
}
