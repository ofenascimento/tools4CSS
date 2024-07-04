export default function CookieConsent() {
    return (
        <div className="fixed bottom-4 right-4 bg-white border border-gray-200 shadow-lg rounded-lg p-6 max-w-sm z-50">
            <div className="flex items-center mb-4">
                <h2 className="text-lg font-semibold mr-2">Cookies</h2>
                <span role="img" aria-label="cookie" className="text-lg">🍪</span>
            </div>
            <p className="text-gray-700 mb-4">We use third-party cookies to give the best experience across our site. Learn more in our Privacy Policy.</p>
            <div className="flex justify-end space-x-4">
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300">No thanks</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300">Accept all</button>
            </div>
        </div>
    );
}
