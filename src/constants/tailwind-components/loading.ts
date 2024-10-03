const SpinnerSolidBorder = `
<div class="flex items-center justify-center mt-4">
  <div class="w-8 h-8 border-4 border-blue-500 border-solid rounded-full border-t-transparent animate-spin"></div>
</div>
`

const PulseCircle = `
<div class="flex items-center justify-center mt-4">
  <div class="w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
</div>
`

const SpinnerDashedBorder = `
<div class="flex items-center justify-center mt-4">
  <div class="w-8 h-8 border-4 border-dashed border-blue-500 rounded-full animate-spin"></div>
</div>
`

const BouncingGradientCircle = `
<div class="flex items-center justify-center mt-6">
  <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full animate-bounce"></div>
</div>
`

const PingEffectCircle = `
<div class="flex items-center justify-center mt-4">
  <div class="relative">
    <div class="w-8 h-8 bg-blue-500 opacity-75 rounded-full animate-ping"></div>
    <div class="absolute inset-0 w-8 h-8 bg-blue-500 rounded-full"></div>
  </div>
</div>
`

const BouncingDots = `
<div class="flex items-center justify-center mt-6">
  <div class="flex space-x-2">
    <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
    <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
    <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 0.4s;"></div>
  </div>
</div>
`

const LoadingTailwindComponents = [
    { name: 'Spinner Solid Border', content: SpinnerSolidBorder },
    { name: 'Pulse Circle', content: PulseCircle },
    { name: 'Spinner Dashed Border', content: SpinnerDashedBorder },
    { name: 'Bouncing Gradient Circle', content: BouncingGradientCircle },
    { name: 'Ping Effect Circle', content: PingEffectCircle },
    { name: 'Bouncing Dots', content: BouncingDots },
];

export default LoadingTailwindComponents;
