const Breadcrumb1 = `
<div class="bg-blue-50 p-3 rounded-2xl space-x-2 items-center max-w-sm mx-auto mt-2">
  <a href="#" class="text-blue-600 hover:underline">Home</a>
  <span class="text-blue-500">></span>
  <a href="#" class="text-blue-600 hover:underline">Settings</a>
  <span class="text-blue-500">></span>
  <a href="#" class="text-blue-600 hover:underline">Customization</a>
  <span class="text-blue-500">></span>
  <span class="text-blue-700 font-semibold">Blue</span>
</div>

`;

const Breadcrumb2 = `
<div class="p-4 w-full max-w-md mx-auto mt-2">
  <nav class="flex items-center text-gray-700 space-x-4">
    <a href="#" class="flex items-center text-blue-500 hover:underline">
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500 mr-1" viewBox="0 -960 960 960" fill="currentColor">
  <path d="M264-216h96v-240h240v240h96v-348L480-726 264-564v348Zm-72 72v-456l288-216 288 216v456H528v-240h-96v240H192Zm288-327Z"/>
</svg>
      Home
    </a>
    <span class="text-gray-400">/</span>
    <a href="#" class="text-gray-500 hover:text-blue-500 hover:underline">Categories</a>
    <span class="text-gray-400">/</span>
    <a href="#" class="text-gray-500 hover:text-blue-500 hover:underline">Electronics</a>
    <span class="text-gray-400">/</span>
    <span class="text-gray-700 font-semibold">Smartphones</span>
  </nav>
</div>

`;

const Breadcrumb3 = `
<div class="bg-white p-4 w-full max-w-md mx-auto">
  <nav class="flex items-center text-blue-700 space-x-2">
    <a href="#" class="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2a1 1 0 00-.707.293l-7 7a1 1 0 001.414 1.414L4 9.414V17a1 1 0 001 1h10a1 1 0 001-1V9.414l1.293 1.293a1 1 0 001.414-1.414l-7-7A1 1 0 0010 2z"/>
      </svg>
      Dashboard
    </a>
    <span class="text-blue-500">/</span>
    <a href="#" class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
      Analytics
    </a>
    <span class="text-blue-500">/</span>
    <span class="bg-blue-500 text-white px-3 py-1 rounded-full">
      Reports
    </span>
  </nav>
</div>



`;

const BreadcrumbTailwindComponents = [
  { name: "Breadcrumb 1", content: Breadcrumb1 },
  { name: "Breadcrumb 2", content: Breadcrumb2 },
  { name: "Breadcrumb 3", content: Breadcrumb3 },
];

export default BreadcrumbTailwindComponents;
