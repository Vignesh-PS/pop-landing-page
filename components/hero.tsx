import VideoThumb from '@/public/images/hero-image.png'
import APP_ICON2 from '@/public/images/appicon2.png'

export default function Hero() {
  return (
    <section className="relative ">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        {/* <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg> */}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <div className="mb-8">
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tighter tracking-tighter text-[#2d2ef4] mb-4" data-aos="zoom-y-out">Proof of Passport </h1>
            {/* <h1 className="text-3xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4 text-[#2d2ef4]" data-aos="zoom-y-out"> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2d2ef4] to-white">Proof of Passport</span></h1> */}
            <div className="max-w-3xl mx-auto">
              <p className=" md:text-3xl text-2xl text-gray-200 mb-4 font-bold " data-aos="zoom-y-out" data-aos-delay="150">Generate ZK proofs using your passport, disclose only what you want to share.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-[#2d2ef4] hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 rounded-md" href="https://testflight.apple.com/join/WfZnZWfn" target="_blank" rel="noopener noreferrer">Try it on the App Store</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4 rounded-md" href="https://github.com/zk-passport/proof-of-passport" target="_blank" rel="noopener noreferrer">Learn more</a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} /> */}

        </div>

      </div>
    </section>
  )
}