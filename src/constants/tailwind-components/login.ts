const Login1 = `
<main class="flex items-center justify-center min-h-screen bg-gray-100 p-4">
  <div class="w-full max-w-md bg-white rounded-lg shadow-lg p-8 space-y-6">
    <!-- Title -->
    <h2 class="text-3xl font-bold text-center text-blue-600">Login</h2>
    <p class="text-center text-gray-600">Enter your email and password to access your account</p>

    <!-- Login Form -->
    <form class="space-y-4" action="#" method="POST">
      <!-- Email Field -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <!-- Password Field -->
      <div class="relative">
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
        <!-- Password Toggle Icon (Non-Functional) -->
        <span class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
          <i class="fas fa-eye-slash text-gray-500"></i>
        </span>
      </div>

      <!-- Forgot Password Link -->
      <div class="flex justify-end">
        <a href="#" class="text-sm text-blue-500 hover:underline">Forgot your password?</a>
      </div>

      <!-- Login Button -->
      <button
        type="submit"
        class="w-full px-4 py-2 text-white bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-700 transition-colors"
      >
        Login
      </button>
    </form>

    <!-- Sign Up Link -->
    <div class="text-center text-gray-600">
      Don't have an account?
      <a href="#" class="text-blue-500 hover:underline">Sign up</a>
    </div>
  </div>
</main>
`;


const LoginWithSocialButtons = `
<!-- Login Component -->
<div class="flex items-center justify-center min-h-screen bg-gray-50 p-4">
  <div class="w-full max-w-md bg-white rounded-lg shadow-lg p-8 space-y-6">
    <!-- Title -->
    <h2 class="text-3xl font-bold text-center text-blue-600">Login</h2>
    <p class="text-center text-gray-600">Enter your email and password to access your account</p>

    <!-- Login Form -->
    <form class="space-y-4">
      <!-- Email Field -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <!-- Password Field -->
      <div class="relative">
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
        <!-- Password Toggle Icon (Non-Functional) -->
        <span class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
          <i class="fas fa-eye-slash text-gray-500"></i>
        </span>
      </div>

      <!-- Forgot Password Link -->
      <div class="flex justify-end">
        <a href="#" class="text-sm text-blue-500 hover:underline">Forgot your password?</a>
      </div>

      <!-- Login Button -->
      <button
        type="submit"
        class="w-full px-4 py-2 text-white bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Login
      </button>
    </form>

    <!-- Divider -->
    <div class="flex items-center justify-center">
      <span class="text-gray-400">OR</span>
    </div>

    <!-- Social Login Buttons -->
    <div class="space-y-3">
      <!-- Google Login -->
      <button
        type="button"
        class="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
      >
        <svg class="w-5 h-5 mr-2" viewBox="0 0 48 48">
          <path
            fill="#FFC107"
            d="M43.6 20.5H42V20H24v8h11.3c-1.7 4.7-6.4 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8.1 3.2l6-6C34.7 6.1 29.9 4 24 4 12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20c0-1.3-.1-2.5-.4-3.6z"
          />
        </svg>
        <span>Continue with Google</span>
      </button>

      <!-- Apple Login -->
      <button
        type="button"
        class="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
      >
        <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6c.85.004 1.705.115 2.5.337 1.9-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.012 2.42-.012 2.75 0 .27.18.58.69.48A10.013 10.013 0 0022 12c0-5.52-4.48-10-10-10z"
            clip-rule="evenodd"
          />
        </svg>
        <span>Continue with Apple</span>
      </button>
    </div>

    <!-- Sign Up Link -->
    <p class="text-center text-gray-600">
      Don't have an account?
      <a href="#" class="text-blue-500 hover:underline">Sign up</a>
    </p>
  </div>
</div>

`;

const LoginEmailAndGoogle = `

<div class="max-w-md mx-auto p-6 mt-4 bg-white border border-slate-200 rounded-lg shadow-md">
  <h2 class="text-3xl font-bold text-center mb-4">Hello!</h2>
  <p class="text-center text-gray-600 mb-6">
    Enter your email and password to access your account
  </p>

  <div class="flex flex-col space-y-4">
    <button class="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-100">
      <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <path fill="#4285F4" d="M45.12 24.58c0-1.32-.12-2.58-.34-3.82H24v7.28h12.06c-.52 2.6-2.04 4.79-4.34 6.26v5.19h6.98c4.08-3.76 6.42-9.31 6.42-15.91z" />
        <path fill="#34A853" d="M24 48c5.82 0 10.69-1.93 14.26-5.26l-6.98-5.19c-1.94 1.32-4.41 2.12-7.28 2.12-5.59 0-10.31-3.76-12-8.79H5.66v5.48C9.2 43.5 16.02 48 24 48z" />
        <path fill="#FBBC05" d="M12 29.88c-1.32-3.76-1.32-7.8 0-11.56V12.82H5.66c-3.26 6.5-3.26 13.96 0 20.46L12 29.88z" />
        <path fill="#EA4335" d="M24 9.32c2.47 0 4.71.85 6.48 2.5l4.79-4.79C31.88 3.32 27 1.34 24 1.34 16.02 1.34 9.2 5.84 5.66 12.32l6.34 5.48c1.69-5.03 6.41-8.48 12-8.48z" />
      </svg>
      Continue with Google
    </button>

    <button class="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
      Continue with email
    </button>
  </div>

  <p class="text-xs text-center text-gray-500 mt-4">
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
