export default function GraphicDesignWorkshopBanner() {
    return (
        <div className="bg-white text-center py-16 font-raleway">
            <div className="container mx-auto px-4">
                <h1 className=" text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">Enjoy our <span className="text-red-500">COMPONENTS</span></h1>
                <p className="text-lg text-gray-700 mb-6">Enhance your design skills with our expert-led workshops, suitable for all skill levels.</p>
                <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
                    <a href="#" className="bg-gray-200 text-gray-900 px-6 py-3 rounded-full flex items-center justify-center">
                        Watch Preview <span className="ml-2">▶</span>
                    </a>
                    <a href="#" className="bg-purple-600 text-white px-6 py-3 rounded-full flex items-center justify-center">
                        Enroll Now <span className="ml-2 cursor-pointer">👉</span>
                    </a>
                </div>
                <div className=" relative">
                    <img src="https://via.placeholder.com/800x450" alt="Workshop preview" className="mx-auto mb-8 rounded-lg shadow-lg" />
                    <button className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
