const Card1 = `
<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white m-2">
            <img
                class="w-full"
                src="https://via.placeholder.com/300x200"
                alt="Course thumbnail"
            />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Card Example</div>
                <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <a href="#" class="text-blue-500 hover:text-blue-700 font-semibold inline-flex items-center">
                    Learn more
                    <svg
                        class="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
            </div>
        </div>
`;

const CardTailwindComponents = [{ name: "Card 1", content: Card1 }];

export default CardTailwindComponents;
