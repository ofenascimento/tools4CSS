const Footer1 = `
<footer class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 py-12">
  <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    
    <!-- About Us -->
    <div>
      <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">About Us</h3>
      <p class="text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
      </p>
    </div>
    
    <!-- Useful Links -->
    <div>
      <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">Useful Links</h3>
      <ul class="space-y-2">
        <li><a href="/about" class="hover:underline text-blue-600 dark:text-blue-400">About Us</a></li>
        <li><a href="/help" class="hover:underline text-blue-600 dark:text-blue-400">Help Center</a></li>
        <li><a href="/terms" class="hover:underline text-blue-600 dark:text-blue-400">Terms of Service</a></li>
        <li><a href="/privacy" class="hover:underline text-blue-600 dark:text-blue-400">Privacy Policy</a></li>
      </ul>
    </div>

    <!-- Contact -->
    <div>
      <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">Contact</h3>
      <p class="text-gray-500 dark:text-gray-400">Email: support@example.com</p>
      <p class="text-gray-500 dark:text-gray-400">Phone: (123) 456-7890</p>
      <p class="text-gray-500 dark:text-gray-400">Address: 123 Main Street, Anytown, USA</p>
    </div>
    
    <!-- Social Media -->
    <div>
      <h3 class="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">Follow Us</h3>
      <div class="flex space-x-4">
        <a href="#" aria-label="Facebook" class="hover:text-blue-600 dark:hover:text-blue-400">
          <svg class="w-6 h-6 fill-current text-blue-600 dark:text-blue-400" viewBox="0 0 24 24">
            <!-- Facebook Icon -->
            <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"/>
          </svg>
        </a>
        <a href="#" aria-label="Twitter" class="hover:text-blue-400 dark:hover:text-blue-300">
          <svg class="w-6 h-6 fill-current text-blue-400 dark:text-blue-300" viewBox="0 0 24 24">
            <!-- Twitter Icon -->
            <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184a4.916 4.916 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.229-.616v.061a4.918 4.918 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.01-7.496 14.01-13.986 0-.21-.005-.423-.014-.634A10.012 10.012 0 0 0 24 4.557z"/>
          </svg>
        </a>
      </div>
    </div>
    
  </div>
  
  <div class="border-t border-gray-200 dark:border-gray-700 mt-8 pt-4 text-center">
    <p>&copy; 2024 All rights reserved.</p>
  </div>
</footer>
`;



const Footer2 = `
<footer class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-16">
  <div class="container mx-auto px-6">
    <div class="flex flex-col md:flex-row justify-between items-center">
      
      <!-- Company Logo -->
      <div class="mb-8 md:mb-0">
        <h2 class="text-3xl font-bold dark:text-white">YourCompany</h2>
      </div>
      
      <!-- Navigation Links -->
      <div class="flex space-x-6 mb-8 md:mb-0">
        <a href="/home" class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">Home</a>
        <a href="/services" class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">Services</a>
        <a href="/about" class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">About</a>
        <a href="/contact" class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">Contact</a>
      </div>
      
      <!-- Social Media Icons -->
      <div class="flex space-x-4">
        <a href="#" aria-label="LinkedIn" class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <!-- LinkedIn Icon -->
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.066-1.867-3.066-1.867 0-2.153 1.459-2.153 2.967v5.703h-3v-10h2.88v1.366h.041c.401-.761 1.38-1.562 2.841-1.562 3.04 0 3.6 2.0 3.6 4.605v5.604z"/>
          </svg>
        </a>
       
        <a href="#" aria-label="GitHub" class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <!-- GitHub Icon -->
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        </a>
      </div>
    </div>
    
    <div class="border-t border-gray-300 dark:border-gray-700 mt-8 pt-4 text-center">
      <p>&copy; 2024 All rights reserved.</p>
    </div>
  </div>
</footer>
`;





const FooterTailwindComponents = [{ name: "Footer 1", content: Footer1 }, { name: "Footer 2", content: Footer2 }];

export default FooterTailwindComponents;
