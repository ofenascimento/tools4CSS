import React from 'react'

const Hero1 = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-extrabold mb-4">100% Free Components</h1>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Sed viverra interdum est, sed pulvinar justo tempus nec.
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <a href="#" className="bg-purple-800 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center">
              Enjoy it Now <span className="ml-2">→</span>
            </a>
            <a href="#" className="text-purple-300 px-6 py-3 rounded-full font-semibold flex items-center justify-center">
              See Live
            </a>
          </div>
          <div className="flex items-center mb-4">
            <span className="bg-purple-300 text-purple-600 px-2 py-1 rounded-md mr-2">$100 off for the first 50 customers</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-2">
              <img src="/avatars/avatar1.png" alt="Customer 1" className="w-10 h-10 rounded-full border-2 border-gray-900" />
              <img src="/avatars/avatar2.png" alt="Customer 2" className="w-10 h-10 rounded-full border-2 border-gray-900" />
              <img src="/avatars/avatar3.png" alt="Customer 3" className="w-10 h-10 rounded-full border-2 border-gray-900" />
              <img src="/avatars/avatar4.png" alt="Customer 4" className="w-10 h-10 rounded-full border-2 border-gray-900" />
            </div>
            <div className="flex items-center">
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <span className="ml-2">14 videos launched</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-16">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Hero1