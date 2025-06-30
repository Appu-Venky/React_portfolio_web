
export default function ContactSection({isDarkMode,handleSubmit}) {
    return (
        <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4">
                <h2 className={`text-3xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Contact Me</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Get In Touch</h3>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
                            I'm currently available for freelance work and full-time positions. If you have a project that needs some creative coding or if you're looking for a developer to join your team, feel free to reach out.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                                    <i className="fas fa-envelope text-blue-600 text-xl"></i>
                                </div>
                                <div>
                                    <h4 className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Email</h4>
                                    <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'} font-medium`}>venkatesh74.udg123@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                                    <i className="fas fa-phone text-blue-600 text-xl"></i>
                                </div>
                                <div>
                                    <h4 className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Phone</h4>
                                    <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'} font-medium`}>+91 9666050825</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                                    <i className="fas fa-map-marker-alt text-blue-600 text-xl"></i>
                                </div>
                                <div>
                                    <h4 className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Location</h4>
                                    <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'} font-medium`}>Bangalore</p>
                                </div>
                            </div>
                            <div className="flex items-center mt-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                                    <i className="fas fa-birthday-cake text-blue-600 text-xl"></i>
                                </div>
                                <div>
                                    <h4 className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Date of Birth</h4>
                                    <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'} font-medium`}>Jun 06, 1997</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex space-x-4">
                            <a href="https://www.linkedin.com/in/venkatesulu-p-9a3251335/" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors">
                                <i className="fab fa-linkedin-in text-xl"></i>
                            </a>
                            <a href="https://github.com/Appu-Venky" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-800 hover:text-white transition-colors">
                                <i className="fab fa-github text-xl"></i>
                            </a>

                            <p className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-400 hover:text-white transition-colors">
                                <i className="fab fa-twitter text-xl"></i>
                            </p>
                            <p className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-colors">
                                <i className="fab fa-youtube text-xl"></i>
                            </p>
                        </div>
                    </div>
                    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm p-8`}>
                        <form onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className={`w-full px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' : 'border-gray-300 text-gray-900'} rounded-lg focus:ring-blue-500 focus:border-blue-500`}
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className={`w-full px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' : 'border-gray-300 text-gray-900'} rounded-lg focus:ring-blue-500 focus:border-blue-500`}
                                        placeholder="Your email"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="subject" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className={`w-full px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' : 'border-gray-300 text-gray-900'} rounded-lg focus:ring-blue-500 focus:border-blue-500`}
                                    placeholder="Subject"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className={`w-full px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' : 'border-gray-300 text-gray-900'} rounded-lg focus:ring-blue-500 focus:border-blue-500`}
                                    placeholder="Your message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-8 py-3 bg-blue-600 text-white font-medium !rounded-button hover:bg-blue-700 cursor-pointer whitespace-nowrap"
                            >
                                Send Message <i className="fas fa-paper-plane ml-2"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
