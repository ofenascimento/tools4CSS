const Login1 = `
<main class="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
  <div class="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
    <!-- Title -->
    <h2 class="text-3xl font-bold text-center text-blue-600 dark:text-blue-400">Login</h2>
    <p class="text-center text-gray-600 dark:text-gray-300">Enter your email and password to access your account</p>

    <!-- Login Form -->
    <form class="space-y-4" action="#" method="POST">
      <!-- Email Field -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          class="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          required
        />
      </div>

      <!-- Password Field -->
      <div class="relative">
        <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          class="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          required
        />
        <!-- Password Toggle Icon (Non-Functional) -->
        <span class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
          <i class="fas fa-eye-slash text-gray-500 dark:text-gray-400"></i>
        </span>
      </div>

      <!-- Forgot Password Link -->
      <div class="flex justify-end">
        <a href="#" class="text-sm text-blue-500 hover:underline dark:text-blue-400">Forgot your password?</a>
      </div>

      <!-- Login Button -->
      <button
        type="submit"
        class="w-full px-4 py-2 text-white bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
      >
        Login
      </button>
    </form>

    <!-- Sign Up Link -->
    <div class="text-center text-gray-600 dark:text-gray-300">
      Don't have an account?
      <a href="#" class="text-blue-500 hover:underline dark:text-blue-400">Sign up</a>
    </div>
  </div>
</main>
`;



const LoginWithSocialButtons = `
<div class="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
  <div class="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
    <!-- Title -->
    <h2 class="text-3xl font-bold text-center text-blue-600 dark:text-blue-400">Login</h2>
    <p class="text-center text-gray-600 dark:text-gray-300">Enter your email and password to access your account</p>

    <!-- Login Form -->
    <form class="space-y-4">
      <!-- Email Field -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          class="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          required
        />
      </div>

      <!-- Password Field -->
      <div class="relative">
        <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          class="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          required
        />
        <span class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
          <i class="fas fa-eye-slash text-gray-500 dark:text-gray-400"></i>
        </span>
      </div>

      <div class="flex justify-end">
        <a href="#" class="text-sm text-blue-500 hover:underline dark:text-blue-400">Forgot your password?</a>
      </div>

      <button
        type="submit"
        class="w-full px-4 py-2 text-white bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
      >
        Login
      </button>
    </form>

    <div class="flex items-center justify-center">
      <span class="text-gray-400 dark:text-gray-500">OR</span>
    </div>

    <!-- Social Login Buttons -->
    <div class="space-y-3">
      <button
        type="button"
        class="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
      >
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
        <span class="dark:text-white">Continue with Google</span>
      </button>

      <button
        type="button"
        class="flex items-center justify-center w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
      >
        <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6c.85.004 1.705.115 2.5.337 1.9-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.012 2.42-.012 2.75 0 .27.18.58.69.48A10.013 10.013 0 0022 12c0-5.52-4.48-10-10-10z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="dark:text-white">Continue with Github</span>
      </button>
    </div>

    <p class="text-center text-gray-600 dark:text-gray-300">
      Don't have an account?
      <a href="#" class="text-blue-500 hover:underline dark:text-blue-400">Sign up</a>
    </p>
  </div>
</div>
`;



const LoginEmailAndGoogle = `
<div class="max-w-md mx-auto p-6 mt-4 bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-lg shadow-md">
  <h2 class="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Hello!</h2>
  <p class="text-center text-gray-600 dark:text-gray-300 mb-6">
    Enter your email and password to access your account
  </p>

  <div class="flex flex-col space-y-4">
    <button class="flex items-center justify-center gap-2 p-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
      </svg>
      Continue with Google
    </button>

    <button class="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 ">
      Continue with email
    </button>
  </div>

  <p class="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
    By continuing, you agree to our <a href="#" class="underline">Terms of Service</a>. Read our <a href="#" class="underline">Privacy Policy</a>.
  </p>
</div>
`


const LoginTailwindComponents = [
    { name: "Simple Login", content: Login1 },
    { name: "Login with Social Buttons", content: LoginWithSocialButtons },
    { name: 'Login Email and Google', content: LoginEmailAndGoogle },
];

export default LoginTailwindComponents;
