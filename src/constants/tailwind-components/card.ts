const Card1 = `
<div class="max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg bg-white m-2">
            <img
                class="w-full"
                src="/mocks/banner2.webp"
                alt="Course thumbnail"
            />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Card Example</div>
                <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis
                </p>
            </div>
            <div class="px-2 pb-2">
                <a href="#" class="bg-blue-500 hover:bg-blue-600 justify-center text-white p-2 w-full text-center rounded-lg font-semibold inline-flex items-center">
                    Learn more

                </a>
            </div>
        </div>
`;

const Card2 = `
<div class="bg-white p-4 rounded-lg shadow-md max-w-sm mx-auto m-4">
  <div class="flex items-start space-x-4">
    <!-- Imagem de avatar -->
    <img class="w-16 h-16 rounded-lg" src="https://tools4css.com/avatars/avatar5.png" alt="Avatar">
    
    <div>
      <!-- Nome e usuário -->
      <h3 class="text-lg font-bold text-gray-800">The Avatar</h3>
      <p class="text-sm text-gray-500">By <span class="font-medium text-gray-600">@felipematheus.dev</span></p>
      
      <!-- Descrição -->
      <p class="text-sm text-gray-600 mt-2">
        Cool Avatar Description 
      </p>
    </div>
  </div>

  <!-- Seção de interações -->
  <div class="flex items-center mt-4 text-gray-500">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <path fill="#666666" d="M16 1C11 6 8 12 8 16c0 4 4 7 8 7s8-3 8-7c0-4-3-10-8-15z"/>
  <path fill="#999999" d="M16 3C12.5 7 10 12 10 16c0 3 3 5 6 5s6-2 6-5c0-4-2.5-9-6-13z"/>
  <path fill="#CCCCCC" d="M16 5C14 7 12 11 12 14c0 2 2 3 4 3s4-1 4-3c0-3-2-6-4-9z"/>
</svg>


    <p class="text-sm">54.7m</p>
  </div>
</div>
`;



const Card3 = `
<div class="bg-green-200 rounded-xl shadow-lg max-w-xs mx-auto p-4 m-4">
  <!-- Imagem de exemplo -->
  <div class="bg-white rounded-lg h-36 flex items-center justify-center mb-4 overflow-hidden">
    <!-- Placeholder para a imagem -->
    <img src="https://tools4css.com/mocks/banner.webp" alt="Placeholder Image" class="h-full w-full object-cover">
  </div>

  <!-- Seção de título e descrição -->
  <div class="mb-4">
    <span class="text-xs font-semibold text-green-900 bg-green-300 px-2 py-1 rounded">USE CASE</span>
    <h2 class="text-xl font-semibold text-green-900 mt-2">Story Runs</h2>
    <p class="text-sm text-green-800 mt-2">See exactly what a specific Action did and when, both individually and within the context of the overall Story.</p>
  </div>

  <!-- Botão Learn more -->
  <div>
    <button class="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-50">
      Learn more
    </button>
  </div>
</div>


`

const Card4 = `

<div class="bg-white p-4 rounded-lg shadow-lg max-w-xs mx-auto m-4">
 
  <div class="rounded-lg overflow-hidden mb-4">
    <img class=" h-auto w-full" src="/mocks/300.png" alt="Avatar Image">
  </div>

 
  <div class="mb-4">
    <p class="text-gray-700 font-medium">@felipematheus.dev <span class="text-yellow-400">★</span></p>
    <h2 class="text-xl font-semibold text-gray-900 mt-1">The Card</h2>
  </div>

  
  <div class="flex justify-between items-center bg-gray-100 p-3 rounded-md">
    <div class="flex items-center">
      <span class="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
      <p class="text-sm text-gray-600">Minting</p>
    </div>
    <div>
      <p class="text-sm text-gray-800">Price</p>
      <p class="font-bold text-gray-900">0.0433 ETH</p>
    </div>
  </div>
</div>
`

const Card5 = `
<div class="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
  <div class="flex justify-between items-start">
    <div class="flex items-center space-x-3">
      <img src="https://tools4css.com/avatars/avatar1.png" alt="Company Logo" class="h-10 w-10 rounded-full">
      <div>
        <h3 class="text-sm font-medium text-gray-900">Tools4CSS</h3>
        <p class="text-xs text-gray-500">5 days ago</p>
      </div>
    </div>
    <button class="flex items-center space-x-1 text-gray-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.682l1.318-1.364a4.5 4.5 0 116.364 6.364L12 21.682 4.318 12.682a4.5 4.5 0 010-6.364z" />
</svg>

    </button>
  </div>
  
  <h2 class="text-2xl font-semibold text-gray-900 mt-4">Full Stack Developer</h2>
  
  <div class="flex space-x-2 mt-3">
    <span class="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-lg">Freelance</span>
    <span class="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-lg">Remote</span>
  </div>

  <div class="flex justify-between items-center mt-6 border-t pt-4">
    <div>
      <p class="text-lg font-semibold text-gray-900">$100/hr</p>
      <p class="text-sm text-gray-500">New York, NY</p>
    </div>
    <button class="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800">
      Apply now
    </button>
  </div>
</div>

`

const CardTailwindComponents = [
    { name: "Card 1", content: Card1 },
    { name: "Card 2", content: Card2 },
    { name: "Card 3", content: Card3 },
    { name: "Card 4", content: Card4 },
    { name: "Card 5", content: Card5 },
];

export default CardTailwindComponents;
