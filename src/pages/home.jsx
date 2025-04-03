// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as echarts from 'echarts';
import React, { useEffect, useRef, useState } from 'react';
import profileImage from '../assets/profile.jpg';

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
            behavior: 'smooth'
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


    const handleSubmit = () => {
        // e.preventDefault();
        // // Form submission logic would go here
        // const form = e.target as HTMLFormElement;
        // const formData = new FormData(form);
        // // Example of form validation and submission
        // const name = formData.get('name') as string;
        // const email = formData.get('email') as string;
        // const subject = formData.get('subject') as string;
        // const message = formData.get('message') as string;
        // if (name && email && subject && message) {
        //     // Show success message
        //     const successMessage = document.createElement('div');
        //     successMessage.className = 'mt-4 p-3 bg-green-100 text-green-800 rounded-lg';
        //     successMessage.textContent = 'Your message has been sent successfully!';
        //     form.appendChild(successMessage);
        //     // Reset form
        //     form.reset();
        //     // Remove success message after 5 seconds
        //     setTimeout(() => {
        //         form.removeChild(successMessage);
        //     }, 5000);
        // }
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
            <nav className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-gray-800 shadow-md' : 'bg-white shadow-sm'}`}>
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
                                className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} cursor-pointer transition-colors duration-300`}
                            >Home</a>
                            <a
                                href="#about"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} cursor-pointer transition-colors duration-300`}
                            >About</a>
                            <a
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} cursor-pointer transition-colors duration-300`}
                            >Projects</a>
                            <a
                                href="#skills"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} cursor-pointer transition-colors duration-300`}
                            >Skills</a>
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} cursor-pointer transition-colors duration-300`}
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
            </nav>
            {/* Hero Section */}
            <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className={`absolute inset-0 bg-gradient-to-r ${isDarkMode ? 'from-gray-900 via-gray-900/90' : 'from-white via-white/90'} to-transparent z-10`}></div>
                    <img
                        src="https://public.readdy.ai/ai/img_res/6e88153ea4732ff17fbe952b37ddc324.jpg"
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
                            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
                                Over 2 years of experience in Android Development using React Native and Flutter with deep knowledge of data structures and algorithms.
                            </p>
                            <div className="flex gap-4">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="px-8 py-3 bg-blue-600 text-white font-medium !rounded-button hover:bg-blue-700 cursor-pointer whitespace-nowrap transition-colors duration-300"
                                >
                                    View Projects
                                </button>
                                <a href='https://drive.google.com/file/d/1p0NqRnc5GGuxUUJ3i78CJGIdO8nhztGH/view?usp=sharing'>  <button className={`px-8 py-3 border ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} font-medium !rounded-button cursor-pointer whitespace-nowrap transition-colors duration-300`}>
                                    Download Resume
                                </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Section */}
            <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className={`text-3xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative aspect-square overflow-hidden rounded-full bg-green-500 h-100 w-100 shadow-lg h-96 w-100 justify-center justify-self-center ">
                            <img
                                src={profileImage}
                                alt="Professional Portrait"
                                className="w-full h-full object-cover object-top 
               transition-transform duration-300 hover:scale-105"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                        <div>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                                With over 2 years of experience in Android Development using React Native and Flutter, I specialize in building mobile applications with clean architecture. My passion lies in creating efficient, maintainable code and delivering exceptional user experiences.
                            </p>
                            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                                I have strong knowledge of data structures and algorithms, with an appetite for solving complex software engineering problems. I'm experienced in using IDEs like Android Studio and Visual Studio Code, and have knowledge of Flutter web development.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className={`flex items-center gap-2 px-4 py-2 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-full shadow-sm`}>
                                    <i className="fab fa-react text-blue-500"></i>
                                    <span className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>React Native</span>
                                </div>
                                <div className={`flex items-center gap-2 px-4 py-2 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-full shadow-sm`}>
                                    <i className="fab fa-android text-green-500"></i>
                                    <span className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Android</span>
                                </div>
                                <div className={`flex items-center gap-2 px-4 py-2 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-full shadow-sm`}>
                                    <i className="fas fa-mobile-alt text-blue-600"></i>
                                    <span className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Flutter</span>
                                </div>
                                <div className={`flex items-center gap-2 px-4 py-2 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-full shadow-sm`}>
                                    <i className="fab fa-js text-yellow-500"></i>
                                    <span className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>JavaScript</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Experience Section */}
                    <div className="mt-16">
                        <h3 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Professional Experience & Education</h3>
                        <div className="relative">
                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-500"></div>
                            <div className="space-y-8">
                                <div className="relative">
                                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center z-10">
                                        <i className="fas fa-briefcase text-white"></i>
                                    </div>
                                    <div className={`ml-12 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-xl shadow-sm border-l-4 border-blue-500`}>
                                        <div className="flex flex-col md:flex-row justify-between mb-4">
                                            <div>
                                                <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Software Engineer</h4>
                                                <p className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`}>Hiyaak Systems</p>
                                            </div>
                                            <div className="mt-2 md:mt-0">
                                                <div className="flex items-center">
                                                    <i className="far fa-calendar-alt mr-2 text-blue-500"></i>
                                                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} font-medium`}>Dec '22 — Present</p>
                                                </div>
                                                <div className="flex items-center mt-1">
                                                    <i className="fas fa-map-marker-alt mr-2 text-blue-500"></i>
                                                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Bengaluru, India</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <h5 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} flex items-center`}>
                                                <i className="fas fa-laptop-code mr-2 text-blue-500"></i>
                                                Frontend Development
                                            </h5>
                                            <ul className="space-y-2">
                                                <li className="flex items-start">
                                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Developed and deployed cross-platform mobile applications using Flutter & React Native.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Designed and implemented intuitive user interfaces using HTML, CSS and React.js for responsive web applications.</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} flex items-center`}>
                                                <i className="fas fa-server mr-2 text-blue-500"></i>
                                                Backend Development
                                            </h5>
                                            <ul className="space-y-2">
                                                <li className="flex items-start">
                                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Built robust REST APIs using Node.js and Express to support mobile and web applications.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Designed and maintained MongoDB schemas for scalable data management.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center z-10">
                                        <i className="fas fa-graduation-cap text-white"></i>
                                    </div>
                                    <div className={`ml-12 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-xl shadow-sm border-l-4 border-blue-500`}>
                                        <div className="flex flex-col md:flex-row justify-between mb-4">
                                            <div>
                                                <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>B.Tech. in Civil Engineering</h4>
                                                <p className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`}>Tadipatri Engineering College</p>
                                            </div>
                                            <div className="mt-2 md:mt-0">
                                                <div className="flex items-center">
                                                    <i className="far fa-calendar-alt mr-2 text-blue-500"></i>
                                                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} font-medium`}>Jan '19 — Jan '22</p>
                                                </div>
                                                <div className="flex items-center mt-1">
                                                    <i className="fas fa-award mr-2 text-blue-500"></i>
                                                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>GPA: 72%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative mt-8">
                                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center z-10">
                                        <i className="fas fa-graduation-cap text-white"></i>
                                    </div>
                                    <div className={`ml-12 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-xl shadow-sm border-l-4 border-blue-500`}>
                                        <div className="flex flex-col md:flex-row justify-between mb-4">
                                            <div>
                                                <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Diploma in Civil Engineering</h4>
                                                <p className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`}>Govt. Polytechnic Rayadurg</p>
                                            </div>
                                            <div className="mt-2 md:mt-0">
                                                <div className="flex items-center">
                                                    <i className="far fa-calendar-alt mr-2 text-blue-500"></i>
                                                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} font-medium`}>Jan '16 — Jan '19</p>
                                                </div>
                                                <div className="flex items-center mt-1">
                                                    <i className="fas fa-award mr-2 text-blue-500"></i>
                                                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>GPA: 70%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Projects Section */}
            <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className={`text-3xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Projects Showcase</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project 1 - Soulipie */}
                        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105`}>
                            <div className="h-56 overflow-hidden">
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
                                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Hindely</h3>
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
            {/* Skills Section */}
            <section id="skills" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className={`text-3xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Skills & Expertise</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Skills Chart */}
                        <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-8 rounded-xl shadow-sm`} ref={skillsChartRef} style={{ height: '400px' }}></div>
                        {/* Skills Categories */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-xl shadow-sm`}>
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                        <i className="fab fa-react text-blue-600 text-xl"></i>
                                    </div>
                                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>React Native</h3>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                        <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Component Development</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                        <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Redux & Context API</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                        <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Navigation</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                        <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Native Modules</span>
                                    </li>
                                </ul>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-xl shadow-sm`}>
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                        <i className="fas fa-mobile-alt text-green-600 text-xl"></i>
                                    </div>
                                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Flutter</h3>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                        <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Widget Development</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                        <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>State Management</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                        <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Flutter Web</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                        <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>UI/UX Implementation</span>
                                    </li>
                                </ul>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-xl shadow-sm`}>
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                                        <i className="fab fa-android text-purple-600 text-xl"></i>
                                    </div>
                                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Android</h3>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                        <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Clean Architecture</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                        <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Android Studio</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                        <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Performance Optimization</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                        <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Native Integration</span>
                                    </li>
                                </ul>
                            </div>
                            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-xl shadow-sm`}>
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                                        <i className="fas fa-code text-orange-600 text-xl"></i>
                                    </div>
                                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Development</h3>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                        <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>JavaScript/TypeScript</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                        <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>RESTful APIs</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                        <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Data Structures</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-check text-green-500 mr-2"></i>
                                        <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Git & GitHub</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Section */}
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
