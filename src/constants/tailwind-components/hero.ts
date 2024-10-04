const Hero1 = `
<div
  class="flex flex-col md:flex-row justify-between items-center p-8 h-full bg-white dark:bg-gray-900"
>
  <div class="w-full md:w-1/2 text-center md:text-left">
    <h1 class="text-5xl font-black font-redhat text-gray-900 dark:text-white">
      Transform your business with <span class="text-blue-600 dark:text-blue-400">AI in minutes</span>
    </h1>
    <p class="text-lg mt-4 text-gray-700 dark:text-gray-300">
      Leverage the power of AI to automate, optimize, and scale your operations. Our platform makes AI accessible and easy to implement, so you can innovate faster and stay ahead of the competition.
    </p>
    <button class="mt-6 px-8 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-3xl hover:bg-blue-700 dark:hover:bg-blue-400">
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
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-4">
  <div class="container mx-auto px-4 flex flex-col md:flex-row items-center">
    <div class="md:w-1/2">
      <h1 class="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">100% Free Components</h1>
      <p class="text-lg mb-6 text-gray-700 dark:text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Sed viverra interdum est, sed pulvinar justo tempus nec.
      </p>
      <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
        <a href="#" class="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center hover:bg-blue-700 dark:hover:bg-blue-400">
          Enjoy it Now <span class="ml-2">→</span>
        </a>
        <a href="#" class="text-blue-600 dark:text-blue-400 px-6 py-3 rounded-full font-semibold flex items-center justify-center border border-blue-600 dark:border-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white">
          See Live
        </a>
      </div>
      <div class="flex items-center mb-4">
        <span class="bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-md mr-2">$100 off for the first 50 customers</span>
      </div>
      <div class="flex items-center space-x-4">
        <div class="flex -space-x-2">
          <img src="/avatars/avatar1.png" alt="Customer 1" class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" />
          <img src="/avatars/avatar2.png" alt="Customer 2" class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" />
          <img src="/avatars/avatar3.png" alt="Customer 3" class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" />
          <img src="/avatars/avatar4.png" alt="Customer 4" class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" />
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

const Hero3 = `
<div class="bg-white dark:bg-gray-900 text-center py-16">
  <div class="container mx-auto px-4">
    <h1 class="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
      Enjoy our <span class="text-blue-500 dark:text-blue-400">COMPONENTS</span>
    </h1>
    <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
      Enhance your design skills with our expert-led workshops, suitable for all skill levels.
    </p>
    <div class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
      <a href="#" class="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-6 py-3 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600">
        Watch Preview <span class="ml-2">▶</span>
      </a>
      <a href="#" class="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-full flex items-center justify-center hover:bg-blue-700 dark:hover:bg-blue-400">
        Enroll Now <span class="ml-2 cursor-pointer">👉</span>
      </a>
    </div>
    <div class="relative">
      <img src="/mocks/banner.webp" alt="Workshop preview" class="mx-auto mb-8 rounded-lg shadow-lg dark:shadow-gray-700" />
      <button class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 dark:bg-opacity-50 rounded-lg hover:bg-opacity-30 dark:hover:bg-opacity-60">
        <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>
  </div>
</div>`;

const Hero4 = `
<div class="text-center py-16 font-raleway bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  <div class="container mx-auto px-4">
    <div class="text-sm text-blue-800 dark:text-blue-400 mb-4 hidden lg:flex justify-center items-center gap-2">
      <span>Start learning today or select a future start date</span>
      <button class="bg-blue-200 dark:bg-blue-600 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full flex justify-center items-center gap-2 mt-2 lg:mt-0 hover:bg-blue-300 dark:hover:bg-blue-500">
        Enroll Now
        <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#000">
          <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
        </svg>
      </button>
    </div>
    <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">Online Graphic Design Workshops</h1>
    <h2 class="text-xl text-blue-700 dark:text-blue-400 mb-4 font-semibold">Access a new career in Design</h2>
    <p class="text-lg text-gray-700 dark:text-gray-300 mb-8">
      We offer graphic design skills for busy individuals.
    </p>
    <div class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
      <a href="#" class="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-full transition duration-300 ease-in-out hover:bg-blue-700 dark:hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 shadow-lg">
        Learn Design Today
      </a>
      <a href="#" class="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-full transition duration-300 ease-in-out hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
        Join our FREE Class
      </a>
    </div>
    <div class="text-lg text-gray-700 dark:text-gray-300 mb-8">
      <span class="text-yellow-500">4.9/5</span>
      <span class="text-gray-700 dark:text-gray-400"> Highly recommended by </span>
      <a href="#" class="text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400">123,456 students</a>
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
