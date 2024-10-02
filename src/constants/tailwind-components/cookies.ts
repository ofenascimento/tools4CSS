const cookies1 = `
<div class="fixed bottom-4 right-4 bg-white border border-gray-200 shadow-lg rounded-lg p-6 max-w-sm z-50">
            <div class="flex items-center mb-4">
                <h2 class="text-lg font-semibold mr-2">Cookies</h2>
                <span role="img" aria-label="cookie" class="text-lg">🍪</span>
            </div>
            <p class="text-gray-700 mb-4">We use third-party cookies to give the best experience across our site. Learn more in our Privacy Policy.</p>
            <div class="flex justify-end space-x-4">
                <button class="bg-gray-100 text-gray-700 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300">No thanks</button>
                <button class="bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300">Accept all</button>
            </div>
        </div>
`

const cookies2 = `
<div class="bg-white shadow-lg rounded-lg p-6 max-w-xs mx-auto text-center">
  <div class="mb-4">
    <!-- Ícone de cookie (SVG fornecido) centralizado e com cor azul -->
    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#3B82F6" class="mx-auto">
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-75 29-147t81-128.5q52-56.5 125-91T475-881q21 0 43 2t45 7q-9 45 6 85t45 66.5q30 26.5 71.5 36.5t85.5-5q-26 59 7.5 113t99.5 56q1 11 1.5 20.5t.5 20.5q0 82-31.5 154.5t-85.5 127q-54 54.5-127 86T480-80Zm-60-480q25 0 42.5-17.5T480-620q0-25-17.5-42.5T420-680q-25 0-42.5 17.5T360-620q0 25 17.5 42.5T420-560Zm-80 200q25 0 42.5-17.5T400-420q0-25-17.5-42.5T340-480q-25 0-42.5 17.5T280-420q0 25 17.5 42.5T340-360Zm260 40q17 0 28.5-11.5T640-360q0-17-11.5-28.5T600-400q-17 0-28.5 11.5T560-360q0 17 11.5 28.5T600-320ZM480-160q122 0 216.5-84T800-458q-50-22-78.5-60T683-603q-77-11-132-66t-68-132q-80-2-140.5 29t-101 79.5Q201-644 180.5-587T160-480q0 133 93.5 226.5T480-160Zm0-324Z"/>
    </svg>
  </div>
  <!-- Texto principal -->
  <h2 class="text-2xl font-bold text-gray-900 mb-2">We use cookies</h2>
  <p class="text-gray-600 mb-6">
    Please, accept these sweeties to continue enjoying our site!
  </p>
  <!-- Botões -->
  <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4">
    Mmm... Sweet!
  </button>
  <p class="text-gray-500">
    <a href="#" class="hover:underline text-blue-500">Nope... I am on a diet <span>🍪</span></a>
  </p>
</div>

`

const CookiesTailwindComponents = [
    { name: 'Cookies 1', content: cookies1 },
    { name: 'Cookies 2', content: cookies2 }
];

export default CookiesTailwindComponents;