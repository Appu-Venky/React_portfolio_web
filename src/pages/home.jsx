import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as echarts from 'echarts';
import emailjs from 'emailjs-com';
import { useEffect, useRef, useState } from 'react';
import profileImage from '../assets/profile.jpg';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    const skillsChartRef = useRef()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };


    useEffect(() => {
        if (skillsChartRef.current) {
            const chart = echarts.init(skillsChartRef.current);
            const option = {
                animation: false,
                radar: {
                    indicator: [
                        { name: 'React Native', max: 100 },
                        { name: 'Flutter', max: 100 },
                        { name: 'JavaScript', max: 100 },
                        { name: 'Android', max: 100 },
                        { name: 'UI/UX', max: 100 },
                        { name: 'Clean Architecture', max: 100 }
                    ],
                    radius: 130,
                    splitNumber: 4,
                    axisName: {
                        color: isDarkMode ? '#ddd' : '#333',
                        fontSize: 12
                    },
                    splitArea: {
                        areaStyle: {
                            color: isDarkMode ?
                                ['rgba(255, 255, 255, 0.03)', 'rgba(255, 255, 255, 0.05)', 'rgba(255, 255, 255, 0.07)', 'rgba(255, 255, 255, 0.09)'] :
                                ['rgba(0, 0, 0, 0.01)', 'rgba(0, 0, 0, 0.02)', 'rgba(0, 0, 0, 0.04)', 'rgba(0, 0, 0, 0.06)']
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'
                        }
                    }
                },
                series: [{
                    name: 'Skills',
                    type: 'radar',
                    data: [
                        {
                            value: [95, 90, 85, 90, 75, 80],
                            name: 'Skill Level',
                            areaStyle: {
                                color: isDarkMode ? 'rgba(96, 165, 250, 0.3)' : 'rgba(59, 130, 246, 0.2)'
                            },
                            lineStyle: {
                                color: isDarkMode ? 'rgba(96, 165, 250, 0.9)' : 'rgba(59, 130, 246, 0.8)'
                            },
                            itemStyle: {
                                color: isDarkMode ? 'rgba(96, 165, 250, 1)' : 'rgba(59, 130, 246, 1)'
                            }
                        }
                    ]
                }]
            };
            chart.setOption(option);
            const handleResize = () => {
                chart.resize();
            };
            window.addEventListener('resize', handleResize);
            return () => {
                chart.dispose();
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [isDarkMode]);



    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // Send form via EmailJS
        emailjs.sendForm(
            'service_24kpt3q',
            'template_sx9b17u',
            e.target,
            'p7srGrPXXuQzfRPYw'
        ).then(
            (result) => {
                console.log('SUCCESS!', result.text);
                // Success message
                const successMessage = document.createElement('div');
                successMessage.className = 'mt-4 p-3 bg-green-100 text-green-800 rounded-lg';
                successMessage.textContent = 'Your message has been sent successfully!';
                e.target.appendChild(successMessage);
                // Reset form
                e.target.reset();
                // Remove success message after 5 seconds
                setTimeout(() => {
                    e.target.removeChild(successMessage);
                }, 5000);
            },
            (error) => {
                console.error('FAILED...', error.text);
                alert('Something went wrong. Please try again later.');
            }
        );
    };


    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'} relative`}>
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className={`fixed bottom-8 right-8 w-12 h-12 rounded-full ${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'} text-white flex items-center justify-center shadow-lg hover:${isDarkMode ? 'bg-blue-700' : 'bg-blue-600'} transition-all duration-300 z-50 !rounded-button`}
                    aria-label="Scroll to top"
                >
                    <FontAwesomeIcon icon={faArrowUp} className="text-lg" />
                </button>
            )}


            {/* Navigation */}
            <nav className={` top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-gray-800 shadow-md' : 'bg-white shadow-sm'}`}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0 flex items-center">
                            <span className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Venkatesulu.dev</span>
                        </div>
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a
                                href="#home"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 text-base font-semibold font-sans hover:text-gray-900'} cursor-pointer transition-colors duration-300`}
                            >Home</a>
                            <a
                                href="#about"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 text-base font-semibold font-sans hover:text-gray-900'} cursor-pointer transition-colors duration-300`}
                            >About</a>
                            <a
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 text-base font-semibold font-sans hover:text-gray-900'} cursor-pointer transition-colors duration-300`}
                            >Projects</a>
                            <a
                                href="#skills"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 text-base font-semibold font-sans hover:text-gray-900'} cursor-pointer transition-colors duration-300`}
                            >Skills</a>
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 text-base font-semibold font-sans hover:text-gray-900'} cursor-pointer transition-colors duration-300`}
                            >Contact</a>
                            <button
                                onClick={toggleDarkMode}
                                className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} cursor-pointer !rounded-button transition-colors duration-300`}
                            >
                                <i className={`fas ${isDarkMode ? 'fa-moon text-gray-600' : 'fa-sun text-yellow-400'}`}></i>
                            </button>
                        </div>
                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className={`inline-flex items-center justify-center p-2 rounded-md ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} cursor-pointer !rounded-button`}
                            >
                                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                            </button>
                        </div>
                    </div>
                </div>


            </nav>








            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <a
                            href="#home"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                                setIsMenuOpen(false);
                            }}
                            className={`block px-3 py-2 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} cursor-pointer`}
                        >Home</a>
                        <a
                            href="#about"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                                setIsMenuOpen(false);
                            }}
                            className={`block px-3 py-2 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} cursor-pointer`}
                        >About</a>
                        <a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                                setIsMenuOpen(false);
                            }}
                            className={`block px-3 py-2 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} cursor-pointer`}
                        >Projects</a>
                        <a
                            href="#skills"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                                setIsMenuOpen(false);
                            }}
                            className={`block px-3 py-2 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} cursor-pointer`}
                        >Skills</a>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                setIsMenuOpen(false);
                            }}
                            className={`block px-3 py-2 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} cursor-pointer`}
                        >Contact</a>
                    </div>
                </div>
            )}


            {/* Hero Section */}
            <HeroSection isDarkMode={isDarkMode} />

            {/* About Section */}
            <AboutSection isDarkMode={isDarkMode} profileImage={profileImage} />

            {/* Projects Section */}
            <ProjectsSection isDarkMode={isDarkMode} />

            {/* Skills Section */}
            <SkillsSection isDarkMode={isDarkMode} skillsChartRef={skillsChartRef} />

            {/* Contact Section */}
            <ContactSection isDarkMode={isDarkMode} handleSubmit={handleSubmit} />


            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Venkatesulu.dev</h3>
                            <p className="text-gray-400 mb-4">
                                Building mobile experiences with React Native, Flutter and clean architecture.
                            </p>
                            <p className="text-gray-400">
                                © {new Date().getFullYear()} Venkatesulu Pujari. All rights reserved.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                                <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
                                <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
                                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium mb-4">Services</h4>
                            <ul className="space-y-2">
                                <li><p className="text-gray-400 hover:text-white transition-colors">React Native Development</p></li>
                                <li><p className="text-gray-400 hover:text-white transition-colors">Flutter Development</p></li>
                                <li><p className="text-gray-400 hover:text-white transition-colors">Mobile UI/UX</p></li>
                                <li><p className="text-gray-400 hover:text-white transition-colors">App Architecture</p></li>
                                <li><p className="text-gray-400 hover:text-white transition-colors">Code Review</p></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium mb-4">Newsletter</h4>
                            <p className="text-gray-400 mb-4">Subscribe to receive updates and tech articles.</p>
                            <form className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className={`px-4 py-2 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-800'} text-white border-none rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full`}
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 !rounded-button whitespace-nowrap"
                                >
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                            </form>
                            <div className="mt-4 flex space-x-3">
                                <a href="https://www.linkedin.com/in/venkatesulu-p-9a3251335/" className="text-gray-400 hover:text-white transition-colors">
                                    <i className="fab fa-linkedin-in text-lg"></i>
                                </a>

                                <a href="https://github.com/Appu-Venky" className="text-gray-400 hover:text-white transition-colors">
                                    <i className="fab fa-github text-lg"></i>
                                </a>
                                <p className="text-gray-400 hover:text-white transition-colors">
                                    <i className="fab fa-twitter text-lg"></i>
                                </p>
                                <p className="text-gray-400 hover:text-white transition-colors">
                                    <i className="fab fa-youtube text-lg"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            Designed and developed with <i className="fas fa-heart text-red-500"></i> by Venkatesulu Pujari
                        </p>
                        <div className="flex space-x-6">
                            <p className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</p>
                            <p className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</p>
                            <p className="text-gray-400 hover:text-white text-sm transition-colors">Cookies Policy</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default Home
