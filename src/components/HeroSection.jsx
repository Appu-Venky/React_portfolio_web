
import heroImg from '../assets/lightFocusHero.png';


const HeroSection = ({ isDarkMode }) => {
    return (
        <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
            <div className="absolute inset-0">
                <div className={`absolute inset-0 bg-gradient-to-r ${isDarkMode ? 'from-gray-900 via-gray-900/90' : 'from-white via-black/0'} to-transparent z-10`}></div>
                <img
                    src={heroImg}
                    alt="Hero Background"
                    className="w-full h-full object-cover object-top"
                />
            </div>
            <div className="max-w-7xl mx-auto px-4 w-full relative z-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className={`text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Hi, I'm Venkatesulu Pujari
                            <span className={`block ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mt-2`}>Frontend Developer</span>
                        </h1>
                        <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-black'} mb-8`}>
                            Crafting seamless mobile and web experiences with
                            modern frameworks and a passion for clean,
                            user-friendly interfaces.</p>
                        <div className="flex gap-3">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('projects')?.scrollIntoView({
                                        behavior: 'smooth',
                                    });
                                }}
                                className="px-4 py-2 text-sm !rounded-button rounded-bl-3xl rounded-tr-3xl bg-blue-600 text-white font-medium hover:bg-blue-700 cursor-pointer whitespace-nowrap transition-colors duration-300"
                            >
                                View Projects
                            </button>

                            <a
                                href="https://drive.google.com/file/d/1_Ge03h3Zvg8fFoc1ZU15KhZ_SXeVm9Ga/view"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button
                                    className={`border px-4 py-2 text-sm rounded-bl-3xl rounded-tr-3xl font-medium whitespace-nowrap transition-colors duration-300 ${isDarkMode
                                            ? 'border-white text-gray-300 hover:bg-gray-800'
                                            : 'border-white text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    Download Resume
                                </button>
                            </a>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
