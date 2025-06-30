import React from 'react';

const ProjectsSection = ({isDarkMode}) => {
    return (
        <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4">
                <h2 className={`text-3xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Projects Showcase</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project 1 - Soulipie */}
                    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105`}>
                        <div className="h-56">
                            <img
                                src="https://public.readdy.ai/ai/img_res/5929745c01c237a61838813632bde903.jpg"
                                alt="Soulipie Dating App"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Soulipie</h3>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>A modern dating application with advanced matching algorithms, real-time chat, and profile customization features.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">React Native</span>
                                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Firebase</span>
                                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Redux</span>
                            </div>
                            {/* <div className="flex justify-between">
                                    <p  className={`${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} font-medium flex items-center`}>
                                        <span>Live Demo</span>
                                        <i className="fas fa-external-link-alt ml-1"></i>
                                    </p>
                                    <p  className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} font-medium flex items-center`}>
                                        <span>Source Code</span>
                                        <i className="fab fa-github ml-1"></i>
                                    </p>
                                </div> */}
                        </div>
                    </div>
                    {/* Project 2 - Hindely */}
                    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105`}>
                        <div className="h-56 overflow-hidden">
                            <img
                                src="https://public.readdy.ai/ai/img_res/61933f0d8634dd13f324127ab4bb1423.jpg"
                                alt="Hindely Chat App"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Hiddely</h3>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>A feature-rich chat-based application with real-time messaging, media sharing, and group conversation capabilities.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">React Native</span>
                                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Socket.io</span>
                                <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full">MongoDB</span>
                            </div>
                            {/* <div className="flex justify-between">
                                    <a href="#" className={`${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} font-medium flex items-center`}>
                                        <span>Live Demo</span>
                                        <i className="fas fa-external-link-alt ml-1"></i>
                                    </a>
                                    <a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} font-medium flex items-center`}>
                                        <span>Source Code</span>
                                        <i className="fab fa-github ml-1"></i>
                                    </a>
                                </div> */}
                        </div>
                    </div>
                    {/* Project 3 - QuickSend */}
                    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105`}>
                        <div className="h-56 overflow-hidden">
                            <img
                                src="https://public.readdy.ai/ai/img_res/ee61f01aa0bafc87b150d9ad0cbe3ea2.jpg"
                                alt="QuickSend Delivery App"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>QuickSend</h3>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>A delivery service application for transporting products from one location to another with real-time tracking and notifications.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">React Native</span>
                                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Google Maps API</span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Node.js</span>
                            </div>
                            {/* <div className="flex justify-between">
                                    <a href="#" className={`${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} font-medium flex items-center`}>
                                        <span>Live Demo</span>
                                        <i className="fas fa-external-link-alt ml-1"></i>
                                    </a>
                                    <a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} font-medium flex items-center`}>
                                        <span>Source Code</span>
                                        <i className="fab fa-github ml-1"></i>
                                    </a>
                                </div> */}
                        </div>
                    </div>
                    {/* Project 4 - ShePower */}
                    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105`}>
                        <div className="h-56 overflow-hidden">
                            <img
                                src="https://public.readdy.ai/ai/img_res/02099c0055835bff25eb8304dee841bd.jpg"
                                alt="ShePower Women Empowerment App"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>ShePower</h3>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>A women empowerment application providing resources, community support, and educational content for personal and professional growth.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Flutter</span>
                                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Firebase</span>
                                <span className="px-3 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">Bloc</span>
                            </div>
                            {/* <div className="flex justify-between">
                                    <a href="#" className={`${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} font-medium flex items-center`}>
                                        <span>Live Demo</span>
                                        <i className="fas fa-external-link-alt ml-1"></i>
                                    </a>
                                    <a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} font-medium flex items-center`}>
                                        <span>Source Code</span>
                                        <i className="fab fa-github ml-1"></i>
                                    </a>
                                </div> */}
                        </div>
                    </div>
                    {/* Project 5 - Cozmo */}
                    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105`}>
                        <div className="h-56 overflow-hidden">
                            <img
                                src="https://public.readdy.ai/ai/img_res/764df524d86c7d746f8b2032a46f58da.jpg"
                                alt="Cozmo E-commerce App"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Cozmo</h3>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>A comprehensive e-commerce application with product catalog, shopping cart, payment integration, and order tracking features.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Flutter</span>
                                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">GetX</span>
                                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Stripe</span>
                            </div>
                            {/* <div className="flex justify-between">
                                    <a href="#" className={`${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} font-medium flex items-center`}>
                                        <span>Live Demo</span>
                                        <i className="fas fa-external-link-alt ml-1"></i>
                                    </a>
                                    <a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} font-medium flex items-center`}>
                                        <span>Source Code</span>
                                        <i className="fab fa-github ml-1"></i>
                                    </a>
                                </div> */}
                        </div>
                    </div>
                    {/* Project 6 - Bankitr */}
                    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105`}>
                        <div className="h-56 overflow-hidden">
                            <img
                                src="https://public.readdy.ai/ai/img_res/4ddd2e72f630be55874a633e1ad79069.jpg"
                                alt="Bankitr Travel App"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Bankitr</h3>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>A travel application for planning trips, booking accommodations, exploring destinations, and managing travel itineraries.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Flutter</span>
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">Provider</span>
                                <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full">REST API</span>
                            </div>
                            {/* <div className="flex justify-between">
                                    <a href="#" className={`${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} font-medium flex items-center`}>
                                        <span>Live Demo</span>
                                        <i className="fas fa-external-link-alt ml-1"></i>
                                    </a>
                                    <a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} font-medium flex items-center`}>
                                        <span>Source Code</span>
                                        <i className="fab fa-github ml-1"></i>
                                    </a>
                                </div> */}
                        </div>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <button
                        onClick={() => {
                            // This would typically link to a projects page
                            // For now, we'll just scroll back to the top of the projects section
                            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-8 py-3 bg-blue-600 text-white font-medium !rounded-button hover:bg-blue-700 cursor-pointer whitespace-nowrap transition-transform hover:scale-105"
                    >
                        View All Projects <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;
