import { Bot, Cake, CircuitBoard, Cpu, ExternalLink, Flame, HelpCircle, PenTool, Star, Zap } from 'lucide-react';
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
                        <h2 className="h2 mb-4">Help us building POP</h2>
                        <p className="text-xl text-gray-300">Proof of Passport lets users scan the NFC chip in their government-issued passport and prove the correctness of the signature in a zk-SNARK.</p>
                    </div>

                    {/* Items */}
                    <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-4xl">


                        {/* 1st item */}
                        <div className="relative flex flex-col items-center bg-[#1c1c1c] border-[#3e3e3e] border rounded-2xl h-70">

                            <div className='flex flex-row items-center gap-x-3 w-full p-3 max-h-fit'>
                                <div className='bg-[#232323] rounded-lg p-2 border border-[#3e3e3e] '>
                                    <Zap className=' h-8  w-8' />
                                </div>
                                <div className='flex flex-col px-2 '>
                                    <h4 className="text-xl text-gray-200 font-bold leading-snug tracking-tight mb-1">Passport generator</h4>
                                    <h4 className="text-md text-gray-300 leading-snug tracking-tight mb-1">Improve our passport generator</h4>
                                </div>

                            </div>

                            <div className='flex flex-col items-center gap-x-3 w-full border-t border-b border-[#3e3e3e] p-3 max-h-fit bg-[#232323]'>

                                <h4 className="text-md text-gray-200  leading-snug tracking-tight mb-1">Help us to enhance the passport generator, by adding support for more countries.</h4>
                                <h4 className="text-md text-gray-200  leading-snug tracking-tight mb-1">Help us to enhance the passport generator, by adding support for more countries.</h4>
                            </div>
                            <div className='flex flex-row items-center gap-x-1.5 w-full p-2 md:p-3'>
                                <div className='bg-[#11233e] text-[#0090ff] rounded-full px-2 py-0.5 text-xs font-bold md:text-sm  md:px-3'>JavaScript</div>
                                <div className='bg-[#10291e] text-[#30a46b] rounded-full px-2 py-0.5 text-xs font-bold md:text-sm  md:px-3'>Easy</div>
                                <div className='bg-[#2d2200] text-[#f5d90a] rounded-full px-2 py-0.5 text-xs font-bold md:text-sm  md:px-3'>Bounties</div>

                                <div className='flex-grow'></div>
                                <div className=' flex flex-row  items-center gap-x-1.5 bg-[#232323] rounded-lg p-2 border border-[#3e3e3e] hover:bg-gray-300 cursor-pointer place-self-end'>
                                    <div className='text-sm md:text-md '>Contribute</div>
                                    <ExternalLink className='  h-4  w-4 md:h-5 md:w-5' />
                                </div>

                            </div>
                        </div>


                        {/* 2nd item */}
                        <div className="relative flex flex-col items-center bg-[#1c1c1c] border-[#3e3e3e] border rounded-2xl min-h-full">

                            <div className='flex flex-row items-center gap-x-3 w-full p-3 max-h-fit'>
                                <div className='bg-[#232323] rounded-lg p-2 border border-[#3e3e3e] '>
                                    <CircuitBoard className=' h-8  w-8' />
                                </div>
                                <div className='flex flex-col px-2 '>
                                    <h4 className="text-xl text-gray-200 font-bold leading-snug tracking-tight mb-1">ZK primitives</h4>
                                    <h4 className="text-md text-gray-300 leading-snug tracking-tight mb-1">Add more sig and hash primitives</h4>
                                </div>

                            </div>

                            <div className='flex flex-col flex-grow items-center gap-x-3 w-full border-t border-b border-[#3e3e3e] p-3 max-h-fit bg-[#232323]'>
                                <h4 className="text-md text-gray-200  leading-snug tracking-tight mb-1">Create more primitives hash and sig algorythms and implement them into our circuits </h4>
                            </div>
                            <div className='flex flex-row items-center gap-x-1.5 w-full p-2 md:p-3 '>
                                <div className=' bg-[#381b02] text-[#f7670a] px-2 py-0.5 text-xs rounded-full font-bold md:text-sm  md:px-3'>Circom</div>
                                <div className='bg-[#2d2200] text-[#f5d90a] px-2 py-0.5 text-xs rounded-full font-bold md:text-sm  md:px-3'>Bounties</div>
                                <div className='flex-grow'></div>
                                <div className=' flex flex-row  items-center gap-x-1.5 bg-[#232323] rounded-lg p-2 border border-[#3e3e3e] hover:bg-gray-300 cursor-pointer place-self-end'>
                                    <div className='text-sm md:text-md '>Contribute</div>
                                    <ExternalLink className=' h-4  w-4 md:h-5 md:w-5' />
                                </div>

                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </section>
    )
}