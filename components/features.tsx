'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesElement from '@/public/images/features-element.png'
import { Camera, Cpu, LayoutGrid, Nfc, PenTool } from 'lucide-react'
import SCAN_SCREEN from '@/public/images/scanscreen.png'
import APP_SCREEN from '@/public/images/appscreen.png'
import PROVE_SCREEN from '@/public/images/provescreen.png'

export default function Features() {

  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section className="relative ">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0  pointer-events-none mb-16" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-0 md:pt-0">

          {/* Section header */}
          <div id="1" className="scroll-mt-20"></div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <p className="text-xl text-gray-200">Proof of Passport lets users scan the NFC chip in their government-issued passport and prove the correctness of the signature in a zk-SNARK.</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3 text-gray-200">Simple flow</h3>
                {/* <p className="text-xl text-gray-300">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p> */}
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded-xl  border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-[#1c1c1c]  border-[#343434] ' : 'bg-[#232323] border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Scan your passport</div>
                    <div className="text-gray-600 text-sm">Scan your passport using your camera and NFC reader of your phone</div>
                  </div>
                  <div className='flex flex-grow'></div>
                  <div className="flex justify-center items-center  bg-[#1c1c1c] rounded-lg border border-[#343434] p-2 shadow flex-shrink-0 ml-3">
                    <Nfc className='h-6 w-auto' />
                  </div>
                </a>

                <a
                  className={`flex items-center text-lg p-5 rounded-xl border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-[#1c1c1c]  border-[#343434] ' : 'bg-[#232323] border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Select an app</div>
                    <div className="text-gray-600 text-sm">Select an app you want to use Proof of Passport with, or mint the Proof of Passport SBT</div>
                  </div>
                  <div className='flex flex-grow'></div>

                  <div className="flex justify-center items-center  bg-[#1c1c1c] rounded-lg border border-[#343434] p-2 shadow flex-shrink-0 ml-3">
                    <LayoutGrid className='h-6 w-auto' />
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded-xl  border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-[#1c1c1c]  border-[#343434] ' : 'bg-[#232323] border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Generate the ZK proof</div>
                    <div className="text-gray-600 text-sm">You can also disclose optional informations and use the proof</div>
                  </div>
                  <div className='flex flex-grow'></div>

                  <div className="flex justify-center items-center  bg-[#1c1c1c] rounded-lg border border-[#343434] p-2 shadow flex-shrink-0 ml-3">
                    <Cpu className='h-6 w-auto' />
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={SCAN_SCREEN} width={350} height="462" alt="Features bg" />
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={APP_SCREEN} width={350} height="462" alt="Features bg" />
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={PROVE_SCREEN} width={350} height="462" alt="Features bg" />
                    </div>
                  </Transition>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}