const Pricing1 = `
<div class="flex flex-col items-center bg-gray-50 dark:bg-gray-900 justify-center min-h-screen  p-6">
  
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Choose the best plan for your needs</h2>
  <p class="text-gray-500 dark:text-gray-300 mb-6">Get started with a 7-day free trial. No credit card required.</p>
  
  <div class="flex items-center justify-center space-x-4 mb-8">
    <span class="text-gray-600 dark:text-gray-300">Monthly Billing</span>
    <div class="relative">
      <input type="checkbox" id="billing-toggle" class="sr-only">
      <label for="billing-toggle" class="block bg-gray-300 dark:bg-gray-600 w-12 h-6 rounded-full cursor-pointer">
        <span class="absolute left-1 top-1 bg-white dark:bg-gray-900 w-4 h-4 rounded-full transition-transform transform duration-300"></span>
      </label>
    </div>
    <span class="text-gray-600 dark:text-gray-300">Yearly Billing</span>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
   
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Starter</h3>
      <p class="text-gray-500 dark:text-gray-300 mb-4">Per Month</p>
      <p class="text-4xl font-bold text-blue-600">$50</p>
      <ul class="text-left space-y-2 mt-4 mb-8">
        <li class="text-gray-700 dark:text-gray-300"><span class="font-semibold text-blue-600">✔</span> Access to basic features</li>
        <li class="text-gray-700 dark:text-gray-300"><span class="font-semibold text-blue-600">✔</span> Standard support</li>
        <li class="text-gray-700 dark:text-gray-300"><span class="font-semibold text-blue-600">✔</span> Email notifications</li>
        <li class="text-gray-400 dark:text-gray-500"><span class="font-semibold">✖</span> Premium analytics</li>
        <li class="text-gray-400 dark:text-gray-500"><span class="font-semibold">✖</span> Priority customer support</li>
      </ul>
      <button class="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition">Choose Plan</button>
    </div>

    <div class="bg-blue-600 dark:bg-blue-700 rounded-lg shadow-lg p-6 text-center text-white transform scale-105">
      <h3 class="text-lg font-semibold">Professional</h3>
      <p class="text-blue-200 dark:text-blue-100 mb-4">Per Month</p>
      <p class="text-4xl font-bold">$100</p>
      <ul class="text-left space-y-2 mt-4 mb-8">
        <li><span class="font-semibold">✔</span> Access to all features</li>
        <li><span class="font-semibold">✔</span> Priority customer support</li>
        <li><span class="font-semibold">✔</span> Advanced analytics</li>
        <li><span class="font-semibold">✔</span> Custom integrations</li>
        <li><span class="font-semibold">✔</span> Unlimited data storage</li>
      </ul>
      <button class="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition">Choose Plan</button>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Enterprise</h3>
      <p class="text-gray-500 dark:text-gray-300 mb-4">Per Month</p>
      <p class="text-4xl font-bold text-blue-600">$200</p>
      <ul class="text-left space-y-2 mt-4 mb-8">
        <li class="text-gray-700 dark:text-gray-300"><span class="font-semibold text-blue-600">✔</span> Access to all features</li>
        <li class="text-gray-700 dark:text-gray-300"><span class="font-semibold text-blue-600">✔</span> 24/7 customer support</li>
        <li class="text-gray-700 dark:text-gray-300"><span class="font-semibold text-blue-600">✔</span> Custom integrations</li>
        <li class="text-gray-700 dark:text-gray-300"><span class="font-semibold text-blue-600">✔</span> Advanced security features</li>
        <li class="text-gray-700 dark:text-gray-300"><span class="font-semibold text-blue-600">✔</span> Unlimited data storage</li>
      </ul>
      <button class="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition">Choose Plan</button>
    </div>
  </div>
</div>
`;

const Pricing2 = `
<div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Affordable and Flexible Pricing</h2>
  <p class="text-gray-500 dark:text-gray-300 mb-6">Choose a plan that fits your needs. No hidden fees.</p>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <div class="flex justify-center mb-6">
        <button class="bg-blue-600 text-white font-semibold py-2 px-4 rounded-l-lg">Monthly</button>
        <button class="bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 font-semibold py-2 px-4 rounded-r-lg">Yearly</button>
      </div>
      <ul class="space-y-6">
        <li class="flex justify-between text-gray-700 dark:text-gray-300">
          <span>Basic features</span>
          <span class="text-blue-600">●</span>
        </li>
        <li class="flex justify-between text-gray-700 dark:text-gray-300">
          <span>Analytics dashboard</span>
          <span class="text-blue-600">●</span>
        </li>
        <li class="flex justify-between text-gray-700 dark:text-gray-300">
          <span>Email support</span>
          <span class="text-blue-600">●</span>
        </li>
        <li class="flex justify-between text-gray-400 dark:text-gray-500">
          <span>Custom branding</span>
          <span class="text-gray-400">●</span>
        </li>
        <li class="flex justify-between text-gray-400 dark:text-gray-500">
          <span>Unlimited projects</span>
          <span class="text-gray-400">●</span>
        </li>
      </ul>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <div class="space-y-6">
        <div class="bg-blue-600 dark:bg-blue-700 text-white rounded-lg p-6 flex justify-between items-center">
          <div class="flex items-center space-x-4">
            <span class="bg-white dark:bg-gray-900 w-5 h-5 rounded-full flex justify-center items-center">
              <span class="bg-blue-600 dark:bg-blue-500 w-3 h-3 rounded-full"></span>
            </span>
            <div>
              <h3 class="font-semibold">Starter</h3>
              <p class="text-xs">Save $10</p>
            </div>
          </div>
          <p class="text-2xl font-bold ml-2">$19 <span class="text-sm font-normal">/ Month</span></p>
        </div>

        <div class="border dark:border-gray-600 rounded-lg p-6 flex justify-between items-center">
          <div class="flex items-center space-x-4">
            <span class="border border-gray-400 dark:border-gray-500 w-5 h-5 rounded-full flex justify-center items-center">
              <span class="bg-white dark:bg-gray-900 w-3 h-3 rounded-full"></span>
            </span>
            <div>
              <h3 class="font-semibold dark:text-white">Basic</h3>
              <p class="text-xs text-gray-500 dark:text-gray-400">Save $20</p>
            </div>
          </div>
          <p class="text-2xl font-bold ml-2 dark:text-white">$39 <span class="text-sm font-normal">/ Month</span></p>
        </div>

        <div class="border dark:border-gray-600 rounded-lg p-6 flex justify-between items-center">
          <div class="flex items-center space-x-4">
            <span class="border border-gray-400 dark:border-gray-500 w-5 h-5 rounded-full flex justify-center items-center">
              <span class="bg-white dark:bg-gray-900 w-3 h-3 rounded-full"></span>
            </span>
            <div>
              <h3 class="font-semibold dark:text-white">Pro</h3>
              <p class="text-xs text-gray-500 dark:text-gray-400">Save $30</p>
            </div>
          </div>
          <p class="text-2xl font-bold ml-2 dark:text-white">$99 <span class="text-sm font-normal">/ Month</span></p>
        </div>
      </div>
    </div>
  </div>

  <div class="flex items-center justify-center mt-8">
    <label class="flex items-center space-x-3">
      <input type="checkbox" class="form-checkbox h-6 w-6 text-green-500">
      <span class="text-gray-700 dark:text-gray-300">Unlock extra features.</span>
      <span class="text-xs text-gray-500 dark:text-gray-400">(Save $20)</span>
    </label>
  </div>

  <div class="mt-8">
    <button class="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">Get Started</button>
  </div>
</div>

`;

const Pricing3 = `
<div class="py-12 bg-gray-50 dark:bg-gray-900">
  <div class="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Choose your perfect plan</h2>
    <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
      Find the plan that suits your business needs.
    </p>
  </div>

  <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div class="flex flex-col bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
      <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">$15/mth</h3>
      <p class="mt-2 text-gray-500 dark:text-gray-300">Starter plan</p>
      <p class="text-sm text-gray-400 dark:text-gray-500">Billed monthly</p>

      <ul class="mt-6 space-y-4 text-gray-700 dark:text-gray-300 flex-grow">
        <li class="flex items-center"><span class="mr-2">✔</span> Essential tools and analytics</li>
        <li class="flex items-center"><span class="mr-2">✔</span> Up to 5 team members</li>
        <li class="flex items-center"><span class="mr-2">✔</span> 10GB data storage per user</li>
        <li class="flex items-center"><span class="mr-2">✔</span> Email support</li>
      </ul>

      <button class="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Get started
      </button>
    </div>

    <div class="flex flex-col bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
      <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">$30/mth</h3>
      <p class="mt-2 text-gray-500 dark:text-gray-300">Pro plan</p>
      <p class="text-sm text-gray-400 dark:text-gray-500">Billed monthly</p>

      <ul class="mt-6 space-y-4 text-gray-700 dark:text-gray-300 flex-grow">
        <li class="flex items-center"><span class="mr-2">✔</span> All features from Starter plan</li>
        <li class="flex items-center"><span class="mr-2">✔</span> Up to 20 team members</li>
        <li class="flex items-center"><span class="mr-2">✔</span> 50GB data storage per user</li>
        <li class="flex items-center"><span class="mr-2">✔</span> Priority email support</li>
      </ul>

      <button class="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Get started
      </button>
    </div>

  </div>
</div>
`

const Pricing4 = `
<div class="py-12 bg-white dark:bg-gray-900">
  <div class="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Choose your perfect plan</h2>
    <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
      Select the plan that fits your business growth. Start today and scale with us.
    </p>
  </div>

  <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Left side options -->
    <div class="bg-blue-100 dark:bg-gray-800 p-6 rounded-lg">
      <div class="flex justify-between items-center mb-6">
        <button class="bg-blue-600 text-white py-1 px-4 rounded-full focus:outline-none">Monthly</button>
        <button class="text-blue-600 dark:text-blue-400 py-1 px-4 focus:outline-none">Yearly</button>
      </div>
      
      <ul class="space-y-4">
        <li class="flex justify-between items-center text-gray-700 dark:text-gray-300">
          <span>Custom Options</span>
          <span class="text-blue-600 dark:text-blue-400">✔</span>
        </li>
        <li class="flex justify-between items-center text-gray-700 dark:text-gray-300">
          <span>No Expiration</span>
          <span class="text-blue-600 dark:text-blue-400">✔</span>
        </li>
        <li class="flex justify-between items-center text-gray-700 dark:text-gray-300">
          <span>All Features Included</span>
          <span class="text-blue-600 dark:text-blue-400">✔</span>
        </li>
        <li class="flex justify-between items-center text-gray-700 dark:text-gray-300">
          <span>API Integrations</span>
          <span class="text-blue-600 dark:text-blue-400">✔</span>
        </li>
        <li class="flex justify-between items-center text-gray-700 dark:text-gray-300">
          <span>Unlimited Recipients</span>
          <span class="text-blue-600 dark:text-blue-400">✔</span>
        </li>
        <li class="flex justify-between items-center text-gray-400 dark:text-gray-500">
          <span>Premium Support</span>
          <span class="text-gray-400 dark:text-gray-500">✖</span>
        </li>
      </ul>
    </div>

    <!-- Right side plan options -->
    <div class="space-y-6">
      <div class="p-6 border border-blue-600 dark:border-blue-400 rounded-lg flex justify-between items-center">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Starter (1 User)</h3>
          <p class="text-blue-600 dark:text-blue-400">5% Savings</p>
        </div>
        <div class="text-right">
          <p class="text-gray-600 dark:text-gray-300">Total: <span class="text-black dark:text-white">$120.00</span></p>
          <p class="text-gray-400 dark:text-gray-500">Sub-Total: $115.00</p>
        </div>
        <input type="radio" name="plan" checked class="ml-4">
      </div>

      <div class="p-6 border border-blue-600 dark:border-blue-400 rounded-lg flex justify-between items-center">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Team (10 Users)</h3>
          <p class="text-blue-600 dark:text-blue-400">10% Savings</p>
        </div>
        <div class="text-right">
          <p class="text-gray-600 dark:text-gray-300">Total: <span class="text-black dark:text-white">$320.00</span></p>
          <p class="text-gray-400 dark:text-gray-500">Sub-Total: $300.00</p>
        </div>
        <input type="radio" name="plan" class="ml-4">
      </div>

      <div class="p-6 border border-blue-600 dark:border-blue-400 rounded-lg flex justify-between items-center">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Business (20 Users)</h3>
          <p class="text-blue-600 dark:text-blue-400">20% Savings</p>
        </div>
        <div class="text-right">
          <p class="text-gray-600 dark:text-gray-300">Total: <span class="text-black dark:text-white">$640.00</span></p>
          <p class="text-gray-400 dark:text-gray-500">Sub-Total: $620.00</p>
        </div>
        <input type="radio" name="plan" class="ml-4">
      </div>
    </div>

  </div>
</div>
`;

const Pricing5 = `
<div class="flex flex-col md:flex-row justify-center gap-6 p-6 bg-gray-50 dark:bg-gray-900">
  <div class="border rounded-lg shadow-lg p-6 text-center bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 flex-1 max-w-xs md:max-w-sm">
    <h2 class="text-xl font-semibold">Basic Plan</h2>
    <p class="text-4xl font-bold text-gray-900 dark:text-gray-100 mt-2">$0 <span class="text-lg font-normal text-gray-600 dark:text-gray-400">/ month</span></p>
    <ul class="mt-4 space-y-2 text-gray-600 dark:text-gray-400 flex justify-start items-start flex-col text-start">
      <li class="flex items-center justify-center">
        <span class="text-blue-500 dark:text-blue-400 mr-2">✔</span>
        Access to basic features
      </li>
      <li class="flex items-center justify-center">
        <span class="text-blue-500 dark:text-blue-400 mr-2">✔</span>
        Limited customer support
      </li>
      <li class="flex items-center justify-center">
        <span class="text-blue-500 dark:text-blue-400 mr-2">✔</span>
        User-friendly interface
      </li>
    </ul>
    <button class="mt-6 px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200">Get Started</button>
  </div>

  <div class="border rounded-lg shadow-lg p-6 text-center bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 flex-1 max-w-xs md:max-w-sm">
    <h2 class="text-xl font-semibold">Standard Plan</h2>
    <p class="text-4xl font-bold text-gray-900 dark:text-gray-100 mt-2">$14.99 <span class="text-lg font-normal text-gray-600 dark:text-gray-400">/ month</span></p>
    <ul class="mt-4 space-y-2 text-gray-600 dark:text-gray-400 flex justify-start items-start flex-col text-start">
      <li class="flex items-center justify-center">
        <span class="text-blue-500 dark:text-blue-400 mr-2">✔</span>
        All basic features included
      </li>
      <li class="flex items-center justify-center">
        <span class="text-blue-500 dark:text-blue-400 mr-2">✔</span>
        Priority support
      </li>
      <li class="flex items-center justify-center">
        <span class="text-blue-500 dark:text-blue-400 mr-2">✔</span>
        Advanced analytics
      </li>
    </ul>
    <button class="mt-6 px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200">Get Started</button>
  </div>

  <div class="border rounded-lg shadow-lg p-6 text-center bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 flex-1 max-w-xs md:max-w-sm">
    <h2 class="text-xl font-semibold">Premium Plan</h2>
    <p class="text-4xl font-bold text-gray-900 dark:text-gray-100 mt-2">$7 <span class="text-lg font-normal text-gray-600 dark:text-gray-400">/ month</span></p>
    <ul class="mt-4 space-y-2 text-gray-600 dark:text-gray-400 flex justify-start items-start flex-col text-start">
      <li class="flex items-center justify-center">
        <span class="text-blue-500 dark:text-blue-400 mr-2">✔</span>
        All standard features included
      </li>
      <li class="flex items-center justify-center">
        <span class="text-blue-500 dark:text-blue-400 mr-2">✔</span>
        Dedicated account manager
      </li>
      <li class="flex items-center justify-center">
        <span class="text-blue-500 dark:text-blue-400 mr-2">✔</span>
        Customizable settings
      </li>
    </ul>
    <button class="mt-6 px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200">Get Started</button>
  </div>
</div>



`

const Pricing6 = `
<div class="flex flex-col md:flex-row items-center justify-center gap-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-10 px-4 md:px-8 transition-colors duration-300 font-lexend">
  <div class="w-full max-w-sm bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transition-colors duration-300">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-2xl font-semibold">Basic</h2>
      <span class="text-sm bg-blue-600 text-white px-4 py-1 rounded-full">Most Popular</span>
    </div>
    <p class="text-gray-500 dark:text-gray-400 mb-6">Ideal for individuals</p>
    <div class="text-4xl font-bold">
      $20<span class="text-lg font-normal">/month</span>
    </div>
    <p class="text-gray-500 dark:text-gray-400 text-sm">billed annually</p>
    <button class="w-full mt-6 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition">
      Start now
    </button>
    <ul class="mt-6 space-y-3 text-gray-500 dark:text-gray-400 text-sm">
      <li>Access all features</li>
      <li>Customizable layouts</li>
      <li>Analytics tools</li>
      <li>Email support</li>
      <li class="text-blue-600">...and more</li>
    </ul>
  </div>

  <div class="w-full max-w-sm bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transition-colors duration-300">
    <h2 class="text-2xl font-semibold mb-4">Premium</h2>
    <p class="text-gray-500 dark:text-gray-400 mb-6">Perfect for teams</p>
    <div class="text-4xl font-bold">
      $40<span class="text-lg font-normal">/user/month</span>
    </div>
    <p class="text-gray-500 dark:text-gray-400 text-sm">billed annually</p>
    <button class="w-full mt-6 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition">
      Start now
    </button>
    <ul class="mt-6 space-y-3 text-gray-500 dark:text-gray-400 text-sm">
      <li>All Basic features</li>
      <li>Team collaboration</li>
      <li>Advanced analytics</li>
      <li>Priority support</li>
      <li>Custom billing</li>
    </ul>
  </div>
</div>
`


const PricingTailwindComponents = [
  { name: "Pricing 1", content: Pricing1 },
  { name: "Pricing 2", content: Pricing2 },
  { name: "Pricing 3", content: Pricing3 },
  { name: "Pricing 4", content: Pricing4 },
  { name: "Pricing 5", content: Pricing5 },
  { name: "Pricing 6", content: Pricing6 },
];

export default PricingTailwindComponents;
