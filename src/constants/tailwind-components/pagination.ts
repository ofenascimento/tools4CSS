const Pagination1 = `
<div class="flex items-center justify-center space-x-2 p-4 bg-white rounded-lg">
  <button class="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-l-md focus:outline-none">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  </button>
 
  <button class="px-4 py-2 bg-gray-100 text-gray-900 font-semibold rounded-md border border-gray-300 focus:outline-none">1</button>
  <button class="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-md border border-gray-300 focus:outline-none">2</button>
  <span class="px-4 py-2 text-gray-500">...</span>
  <button class="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-md border border-gray-300 focus:outline-none">9</button>
  <button class="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-md border border-gray-300 focus:outline-none">10</button>

  <button class="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-r-md focus:outline-none">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  </button>
</div>

`

const Pagination2 = `
<div class="flex items-center justify-center space-x-6 p-4 bg-white rounded-lg">
  <!-- Botão anterior -->
  <button class="flex items-center px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-md border border-gray-300 focus:outline-none">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  </button>

  <!-- Informação da página -->
  <div class="text-gray-500">
    Page <span class="font-bold text-gray-900">1</span> of <span class="font-bold text-gray-900">10</span>
  </div>

  <!-- Botão próximo -->
  <button class="flex items-center px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-md border border-gray-300 focus:outline-none">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  </button>
</div>


`

const PaginationTailwindComponents = [
    { name: 'Pagination 1', content: Pagination1 },
    { name: 'Pagination 2', content: Pagination2 }
];

export default PaginationTailwindComponents;