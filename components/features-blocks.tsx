import { Bot, Cake, Flame, PenTool } from 'lucide-react';
export default function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0  pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 transform translate-y-1/2 "></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 ">
            <h2 className="h2 mb-4">Explore use cases</h2>
            <p className="text-xl text-gray-300">Proof of humanity and authentication, easier than ever. Maintaining privacy from start to finish.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col md:h-52 items-center p-4 bg-[#1c1c1c] border-[#3e3e3e] border rounded-2xl shadow-xl">
              <div className='bg-[#232323] rounded-lg p-2 border border-[#3e3e3e] mb-2'>
                <Bot className=' h-8  w-8' />
              </div>
              <h4 className="text-xl text-gray-200 font-bold leading-snug tracking-tight my-2">Sybil resistance</h4>
              <p className="text-gray-300 text-center">Check the uniqueness of your users for airdrops, voting and quadratic funding.</p>
            </div>

            {/* 2nd item */}

            <div className="relative flex flex-col md:h-52 items-center p-4 bg-[#1c1c1c] border-[#3e3e3e] border rounded-2xl shadow-xl">
              <div className='bg-[#232323] rounded-lg p-2 border border-[#3e3e3e] my-2'>
                <PenTool className=' h-8  w-8' />
              </div>
              <h4 className="text-xl text-gray-200 font-bold leading-snug tracking-tight mb-1">Selective disclosure</h4>
              <p className="text-gray-300 text-center">Enable users to verify their nationality or age, keeping all other details private.</p>
            </div>

            <div className="relative flex flex-col md:h-52 items-center p-4 bg-[#1c1c1c] border-[#3e3e3e] border rounded-2xl shadow-xl">
              <div className='bg-[#232323] rounded-lg p-2 border border-[#3e3e3e] my-2'>
                <Flame className=' h-8  w-8' />
              </div>
              <h4 className="text-xl text-gray-200 font-bold leading-snug tracking-tight mb-1">Wallet recovery</h4>
              <p className="text-gray-300 text-center">Safeguard your assets with your passport as one of your recovery sources.</p>
            </div>


            {/* 6th item
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2" strokeLinecap="square">
                    <path className="stroke-current text-white" d="M29.714 40.358l-4.777 2.51 1.349-7.865-5.715-5.57 7.898-1.147L32 21.13l3.531 7.155 7.898 1.147L40 32.775" />
                    <path className="stroke-current text-blue-300" d="M44.571 43.429H34.286M44.571 37.714H34.286" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Headless CMS</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div> */}

          </div>

        </div>
      </div>
    </section>
  )
}