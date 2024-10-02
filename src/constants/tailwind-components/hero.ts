const Hero1 = `
<div
  class="flex flex-col md:flex-row justify-between items-center p-8 h-full"
>
  <div class="w-full md:w-1/2 text-center md:text-left">
    <h1 class="text-5xl font-black font-redhat">
      Transform your business with <span class="text-blue-600">AI in minutes</span>
    </h1>
    <p class="text-lg mt-4">
      Leverage the power of AI to automate, optimize, and scale your operations. Our platform makes AI accessible and easy to implement, so you can innovate faster and stay ahead of the competition.
    </p>
    <button class="mt-6 px-8 py-2 bg-blue-600 text-white rounded-3xl">
      Start your AI journey
    </button>
  </div>
  <div class="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
    <img
      src="/mocks/iphone.png"
      alt="Mock Iphone"
      class="w-64 h-auto md:w-96 md:h-96 object-contain"
    />
  </div>
</div>
`;


const Hero2 = ` 
<div class="bg-white text-gray-900 py-4">
  <div class="container mx-auto px-4 flex flex-col md:flex-row items-center">
    <div class="md:w-1/2">
      <h1 class="text-4xl font-extrabold mb-4">100% Free Components</h1>
      <p class="text-lg mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Sed viverra interdum est, sed pulvinar justo tempus nec.
      </p>
      <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
        <a href="#" class="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center">
          Enjoy it Now <span class="ml-2">→</span>
        </a>
        <a href="#" class="text-blue-600 px-6 py-3 rounded-full font-semibold flex items-center justify-center border border-blue-600">
          See Live
        </a>
      </div>
      <div class="flex items-center mb-4">
        <span class="bg-blue-200 text-blue-800 px-2 py-1 rounded-md mr-2">$100 off for the first 50 customers</span>
      </div>
      <div class="flex items-center space-x-4">
        <div class="flex -space-x-2">
          <img src="/avatars/avatar1.png" alt="Customer 1" class="w-10 h-10 rounded-full border-2 border-white" />
          <img src="/avatars/avatar2.png" alt="Customer 2" class="w-10 h-10 rounded-full border-2 border-white" />
          <img src="/avatars/avatar3.png" alt="Customer 3" class="w-10 h-10 rounded-full border-2 border-white" />
          <img src="/avatars/avatar4.png" alt="Customer 4" class="w-10 h-10 rounded-full border-2 border-white" />
        </div>    
          <span class="text-yellow-500 text-lg">★★★★★</span>
      </div>
    </div>
   <div class="md:w-1/2 mt-8 md:mt-0 md:pl-16">
  <img
    src="/mocks/iphone.png"
    alt="Mock Iphone"
    class="w-80 h-auto md:w-[500px] md:h-[500px] object-contain"
  />
</div>

  </div>
</div>`;




const Hero3 =
  ` <div class="bg-white text-center py-16 font-raleway">
            <div class="container mx-auto px-4">
                <h1 class="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">Enjoy our <span class="text-blue-500">COMPONENTS</span></h1>
                <p class="text-lg text-gray-700 mb-6">Enhance your design skills with our expert-led workshops, suitable for all skill levels.</p>
                <div class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
                    <a href="#" class="bg-gray-200 text-gray-900 px-6 py-3 rounded-full flex items-center justify-center">
                        Watch Preview <span class="ml-2">▶</span>
                    </a>
                    <a href="#" class="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center justify-center">
                        Enroll Now <span class="ml-2 cursor-pointer">👉</span>
                    </a>
                </div>
                <div class="relative">
                    <img src="/mocks/banner.webp" alt="Workshop preview" class="mx-auto mb-8 rounded-lg shadow-lg" />
                    <button class="absolute inset-0 flex items-center justify-center">
                        <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>`;


const Hero4 = `
        <div class=" text-center py-16 font-raleway">
            <div class="container mx-auto px-4">
                <div class="text-sm text-blue-800 mb-4 hidden lg:flex justify-center items-center gap-2">
                    <span>Start learning today or select a future start date</span>
                    <button class="bg-blue-200 text-blue-800 px-4 py-2 rounded-full flex justify-center items-center gap-2 mt-2 lg:mt-0">
                        Enroll Now
                        <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#000">
                            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                        </svg>
                    </button>
                </div>
                <h1 class="text-4xl font-extrabold text-gray-900 mb-2">Online Graphic Design Workshops</h1>
                <h2 class="text-xl text-blue-700 mb-4 font-semibold">Access a new career in Design</h2>
                <p class="text-lg text-gray-700 mb-8">We offer graphic design skills for busy individuals.</p>
                <div class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
                    <a href="#" class="bg-blue-600 text-white px-6 py-3 rounded-full transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 shadow-lg">Learn Design Today</a>
                    <a href="#" class="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Join our FREE Class</a>
                </div>
                <div class="text-lg text-gray-700 mb-8">
                    <span class="text-yellow-500">4.9/5</span>
                    <span class="text-gray-700"> Highly recommended by </span>
                    <a href="#" class="text-blue-600 border-b-2 border-blue-600">123,456 students</a>
                </div>
            </div>
        </div>
`;




const HeroTailwindComponents = [
  { name: 'Hero 1', content: Hero1 },
  { name: 'Hero 2', content: Hero2 },
  { name: 'Hero 3', content: Hero3 },
  { name: 'Hero 4', content: Hero4 },
];

export default HeroTailwindComponents;