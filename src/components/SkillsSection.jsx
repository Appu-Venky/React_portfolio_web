
const SkillsSection = ({ isDarkMode, skillsChartRef }) => {
    return (




        <section id="skills" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
            <div className="max-w-7xl mx-auto px-4">
                <h2 className={`text-3xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'} relative`}>
                    Technical Skills
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 rounded"></div>
                </h2>
                <div className="grid lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: 'fas fa-mobile-alt',
                            category: 'Mobile Development',
                            skills: [
                                { name: 'React Native', level: 90 },
                                { name: 'Flutter', level: 85 },
                                { name: 'Android Studio', level: 80 },
                                { name: 'iOS Development', level: 75 }
                            ]
                        },
                        {
                            icon: 'fas fa-code',
                            category: 'Frontend Development',
                            skills: [
                                { name: 'JavaScript', level: 95 },
                                { name: 'TypeScript', level: 88 },
                                { name: 'React.js', level: 92 },
                                { name: 'HTML/CSS', level: 90 }
                            ]
                        },
                        {
                            icon: 'fas fa-server',
                            category: 'Backend Development',
                            skills: [
                                { name: 'Node.js', level: 85 },
                                { name: 'Express.js', level: 82 },
                                { name: 'MongoDB', level: 88 },
                                { name: 'REST APIs', level: 90 }
                            ]
                        }
                    ].map((category, index) => (
                        <div
                            key={index}
                            className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up border-2 ${index === 0 ? 'border-blue-500/20' :
                                index === 1 ? 'border-purple-500/20' :
                                    'border-pink-500/20'
                                }`}
                        >
                            <div className="flex items-center mb-6">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${index === 0 ? 'bg-blue-500/10 text-blue-500' :
                                    index === 1 ? 'bg-purple-500/10 text-purple-500' :
                                        'bg-pink-500/10 text-pink-500'
                                    }`}>
                                    <i className={`${category.icon} text-2xl`}></i>
                                </div>
                                <h3 className={`text-xl font-bold ml-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {category.category}
                                </h3>
                            </div>
                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div className="flex justify-between mb-2">
                                            <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                {skill.name}
                                            </span>
                                            <span className={`text-sm font-medium ${index === 0 ? 'text-blue-500' :
                                                index === 1 ? 'text-purple-500' :
                                                    'text-pink-500'
                                                }`}>
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className={`h-2 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} overflow-hidden`}>
                                            <div
                                                className={`h-full rounded-full ${index === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-400' :
                                                    index === 1 ? 'bg-gradient-to-r from-purple-500 to-purple-400' :
                                                        'bg-gradient-to-r from-pink-500 to-pink-400'
                                                    }`}
                                                style={{ width: `${skill.level}%`, transition: 'width 1.5s ease-in-out' }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className={`lg:col-span-3 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-2xl p-8 shadow-lg mt-8 animate-fade-in-up`}>
                        <h3 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Additional Skills & Tools
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { name: 'Git', icon: 'fab fa-git-alt', color: 'text-orange-500' },
                                { name: 'VS Code', icon: 'fas fa-code', color: 'text-blue-500' },
                                { name: 'Firebase', icon: 'fas fa-fire', color: 'text-yellow-500' },
                                { name: 'Redux', icon: 'fas fa-box', color: 'text-purple-500' },
                                { name: 'AWS', icon: 'fab fa-aws', color: 'text-yellow-600' },
                                { name: 'Docker', icon: 'fab fa-docker', color: 'text-blue-600' },
                                { name: 'GraphQL', icon: 'fas fa-project-diagram', color: 'text-pink-500' },
                                { name: 'Agile', icon: 'fas fa-sync', color: 'text-green-500' }
                            ].map((tool, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center p-4 rounded-xl ${isDarkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-50 hover:bg-gray-100'} transition-all duration-300 cursor-pointer group`}
                                >
                                    <i className={`${tool.icon} ${tool.color} text-xl group-hover:scale-110 transition-transform duration-300`}></i>
                                    <span className={`ml-3 font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;



// first type  modal
{/* Skills Chart */ }
{/* <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}mb-1`}>Skills in mind</h3> */ }
{/* <BrainViewer isDarkMode={isDarkMode} /> */ }
{/* Skills Categories */ }

{/* <section id="skills" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
    <div className="max-w-7xl mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-12">

            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-8 rounded-xl shadow-sm`} style={{
                width: '100%',
                height: '400px',

            }} ref={skillsChartRef}>


            </div>


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
</section > */}


// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
// import React, { useState, useEffect, useRef } from 'react';
// import * as echarts from 'echarts';
// const App: React.FC = () => {
//     const [isDarkMode, setIsDarkMode] = useState(false);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [showScrollTop, setShowScrollTop] = useState(false);
//     const [activeSection, setActiveSection] = useState('');
//     const skillsChartRef = useRef < HTMLDivElement > (null);
//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 300) {
//                 setShowScrollTop(true);
//             } else {
//                 setShowScrollTop(false);
//             }
//             const sections = ['home', 'about', 'projects', 'skills', 'contact'];
//             const currentSection = sections.find(section => {
//                 const element = document.getElementById(section);
//                 if (element) {
//                     const rect = element.getBoundingClientRect();
//                     return rect.top <= 100 && rect.bottom >= 100;
//                 }
//                 return false;
//             });
//             if (currentSection) {
//                 setActiveSection(currentSection);
//                 window.history.replaceState(null, '', `#${currentSection}`);
//             } else if (window.scrollY < 300) {
//                 setActiveSection('home');
//                 window.history.replaceState(null, '', `#home`);
//             }
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);
//     const scrollToTop = () => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };
//     useEffect(() => {
//         if (skillsChartRef.current) {
//             const chart = echarts.init(skillsChartRef.current);
//             const option = {
//                 animation: false,
//                 radar: {
//                     indicator: [
//                         { name: 'React Native', max: 100 },
//                         { name: 'Flutter', max: 100 },
//                         { name: 'JavaScript', max: 100 },
//                         { name: 'TypeScript', max: 100 },
//                         { name: 'Node.js', max: 100 },
//                         { name: 'MongoDB', max: 100 }
//                     ],
//                     radius: 130,
//                     splitNumber: 4,
//                     axisName: {
//                         color: isDarkMode ? '#ddd' : '#333',
//                         fontSize: 12
//                     },
//                     splitArea: {
//                         areaStyle: {
//                             color: isDarkMode ?
//                                 ['rgba(255, 255, 255, 0.03)', 'rgba(255, 255, 255, 0.05)', 'rgba(255, 255, 255, 0.07)', 'rgba(255, 255, 255, 0.09)'] :
//                                 ['rgba(0, 0, 0, 0.01)', 'rgba(0, 0, 0, 0.02)', 'rgba(0, 0, 0, 0.04)', 'rgba(0, 0, 0, 0.06)']
//                         }
//                     },
//                     axisLine: {
//                         lineStyle: {
//                             color: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'
//                         }
//                     },
//                     splitLine: {
//                         lineStyle: {
//                             color: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'
//                         }
//                     }
//                 },
//                 series: [{
//                     name: 'Skills',
//                     type: 'radar',
//                     data: [
//                         {
//                             value: [95, 90, 92, 88, 85, 87],
//                             name: 'Skill Level',
//                             areaStyle: {
//                                 color: isDarkMode ? 'rgba(96, 165, 250, 0.3)' : 'rgba(59, 130, 246, 0.2)'
//                             },
//                             lineStyle: {
//                                 color: isDarkMode ? 'rgba(96, 165, 250, 0.9)' : 'rgba(59, 130, 246, 0.8)'
//                             },
//                             itemStyle: {
//                                 color: isDarkMode ? 'rgba(96, 165, 250, 1)' : 'rgba(59, 130, 246, 1)'
//                             }
//                         }
//                     ]
//                 }]
//             };
//             chart.setOption(option);
//             const handleResize = () => {
//                 chart.resize();
//             };
//             window.addEventListener('resize', handleResize);
//             return () => {
//                 chart.dispose();
//                 window.removeEventListener('resize', handleResize);
//             };
//         }
//     }, [isDarkMode]);
//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };
//     const toggleDarkMode = () => {
//         setIsDarkMode(!isDarkMode);
//     };
//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         const form = e.target as HTMLFormElement;
//         const formData = new FormData(form);
//         const name = formData.get('name') as string;
//         const email = formData.get('email') as string;
//         const subject = formData.get('subject') as string;
//         const message = formData.get('message') as string;
//         if (name && email && subject && message) {
//             const successMessage = document.createElement('div');
//             successMessage.className = 'mt-4 p-3 bg-green-100 text-green-800 rounded-lg';
//             successMessage.textContent = 'Your message has been sent successfully!';
//             form.appendChild(successMessage);
//             form.reset();
//             setTimeout(() => {
//                 form.removeChild(successMessage);
//             }, 5000);
//         }
//     };
//     return (
//         <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'} relative`}>
//             {/* Scroll to Top Button */}
//             {showScrollTop && (
//                 <button
//                     onClick={scrollToTop}
//                     className={`fixed bottom-8 right-8 w-12 h-12 rounded-full ${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'} text-white flex items-center justify-center shadow-lg hover:${isDarkMode ? 'bg-blue-700' : 'bg-blue-600'} transition-all duration-300 z-50 !rounded-button animate-bounce`}
//                     aria-label="Scroll to top"
//                 >
//                     <i className="fas fa-arrow-up"></i>
//                 </button>
//             )}
//             {/* Navigation */}
//             <nav className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-gray-800/95 backdrop-blur-sm' : 'bg-white/95 backdrop-blur-sm'} transition-all duration-300`}>
//                 <div className="max-w-7xl mx-auto px-4">
//                     <div className="flex justify-between items-center h-16">
//                         <div className="flex-shrink-0 flex items-center">
//                             <span className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} transition-colors duration-300`}>
//                                 Venkatesulu.dev
//                             </span>
//                         </div>
//                         {/* Desktop Navigation */}
//                         <div className="hidden md:flex items-center space-x-8">
//                             {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
//                                 <a
//                                     key={section}
//                                     href={`#${section}`}
//                                     onClick={(e) => {
//                                         e.preventDefault();
//                                         document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
//                                     }}
//                                     className={`
// ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}
// cursor-pointer transition-all duration-300 relative pb-2
// ${activeSection === section ? 'after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300' : ''}
// `}
//                                 >
//                                     {section.charAt(0).toUpperCase() + section.slice(1)}
//                                 </a>
//                             ))}
//                             <button
//                                 onClick={toggleDarkMode}
//                                 className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} cursor-pointer !rounded-button transition-all duration-300`}
//                             >
//                                 <i className={`fas ${isDarkMode ? 'fa-sun text-yellow-400' : 'fa-moon text-gray-600'}`}></i>
//                             </button>
//                         </div>
//                         {/* Mobile Menu Button */}
//                         <div className="md:hidden">
//                             <button
//                                 onClick={toggleMenu}
//                                 className={`inline-flex items-center justify-center p-2 rounded-md ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} cursor-pointer !rounded-button transition-colors duration-300`}
//                             >
//                                 <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Mobile Navigation */}
//                 {isMenuOpen && (
//                     <div className="md:hidden">
//                         <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
//                             {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
//                                 <a
//                                     key={section}
//                                     href={`#${section}`}
//                                     onClick={(e) => {
//                                         e.preventDefault();
//                                         document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
//                                         setIsMenuOpen(false);
//                                     }}
//                                     className={`
// block px-3 py-2
// ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}
// cursor-pointer relative
// ${activeSection === section ? 'border-l-4 border-blue-500 pl-2' : ''}
// transition-all duration-300
// `}
//                                 >
//                                     {section.charAt(0).toUpperCase() + section.slice(1)}
//                                 </a>
//                             ))}
//                         </div>
//                     </div>
//                 )}
//             </nav>
//             {/* Hero Section */}
//             <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
//                 <div className="absolute inset-0">
//                     <div className={`absolute inset-0 bg-gradient-to-r ${isDarkMode ? 'from-gray-900 via-gray-900/90' : 'from-white via-white/90'} to-transparent z-10`}></div>
//                     <img
//                         src="https://public.readdy.ai/ai/img_res/6e88153ea4732ff17fbe952b37ddc324.jpg"
//                         alt="Hero Background"
//                         className="w-full h-full object-cover object-top"
//                     />
//                 </div>
//                 <div className="max-w-7xl mx-auto px-4 w-full relative z-20">
//                     <div className="grid md:grid-cols-2 gap-12 items-center">
//                         <div className="animate-fade-in-up">
//                             <h1 className={`text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                                 Hi, I'm Venkatesulu Pujari
//                                 <span className={`block ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mt-2`}>
//                                     React Native Developer
//                                 </span>
//                             </h1>
//                             <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
//                                 Over 2 years of experience in Android Development using React Native and Flutter with deep knowledge of data structures and algorithms.
//                             </p>
//                             <div className="flex gap-4">
//                                 <button
//                                     onClick={(e) => {
//                                         e.preventDefault();
//                                         document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
//                                     }}
//                                     className="px-8 py-3 bg-blue-600 text-white font-medium !rounded-button hover:bg-blue-700 cursor-pointer whitespace-nowrap transition-all duration-300 hover:transform hover:scale-105"
//                                 >
//                                     View Projects
//                                 </button>
//                                 <button className={`px-8 py-3 border ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} font-medium !rounded-button cursor-pointer whitespace-nowrap transition-all duration-300 hover:transform hover:scale-105`}>
//                                     Download Resume
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* About Section */}
//             <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
//                 <div className="max-w-7xl mx-auto px-4">
//                     <h2 className={`text-3xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                         About Me
//                     </h2>
//                     <div className="grid md:grid-cols-2 gap-12 items-center">
//                         <div className="relative aspect-square overflow-hidden rounded-full border-4 border-blue-500 shadow-lg transform hover:scale-105 transition-transform duration-300">
//                             <img
//                                 src="https://public.readdy.ai/ai/img_res/1de7c9d126bc32d5525c4c0eabbe8f9b.jpg"
//                                 alt="Professional Portrait"
//                                 className="w-full h-full object-cover object-top"
//                             />
//                         </div>
//                         <div className="animate-fade-in-right">
//                             <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
//                                 With over 2 years of experience in Android Development using React Native and Flutter, I specialize in building mobile applications with clean architecture. My passion lies in creating efficient, maintainable code and delivering exceptional user experiences.
//                             </p>
//                             <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
//                                 I have strong knowledge of data structures and algorithms, with an appetite for solving complex software engineering problems. I'm experienced in using IDEs like Android Studio and Visual Studio Code, and have knowledge of Flutter web development.
//                             </p>
//                             <div className="flex flex-wrap gap-4">
//                                 {[
//                                     { icon: 'fab fa-react', text: 'React Native', color: 'text-blue-500' },
//                                     { icon: 'fab fa-android', text: 'Android', color: 'text-green-500' },
//                                     { icon: 'fas fa-mobile-alt', text: 'Flutter', color: 'text-blue-600' },
//                                     { icon: 'fab fa-js', text: 'JavaScript', color: 'text-yellow-500' }
//                                 ].map((skill, index) => (
//                                     <div
//                                         key={index}
//                                         className={`flex items-center gap-2 px-4 py-2 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-full shadow-sm transform hover:scale-105 transition-all duration-300`}
//                                     >
//                                         <i className={`${skill.icon} ${skill.color}`}></i>
//                                         <span className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{skill.text}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                     {/* Experience Section */}
//                     <div className="mt-16">
//                         <h3 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                             Professional Experience
//                         </h3>
//                         <div className="relative">
//                             <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-500"></div>
//                             <div className="space-y-8">
//                                 {/* Experience Items */}
//                                 <div className="relative animate-fade-in-left">
//                                     <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center z-10">
//                                         <i className="fas fa-briefcase text-white"></i>
//                                     </div>
//                                     <div className={`ml-12 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-xl shadow-sm border-l-4 border-blue-500 transform hover:scale-102 transition-all duration-300`}>
//                                         <div className="flex flex-col md:flex-row justify-between mb-4">
//                                             <div>
//                                                 <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                                                     Software Engineer
//                                                 </h4>
//                                                 <p className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`}>
//                                                     Hiyaak Systems
//                                                 </p>
//                                             </div>
//                                             <div className="mt-2 md:mt-0">
//                                                 <div className="flex items-center">
//                                                     <i className="far fa-calendar-alt mr-2 text-blue-500"></i>
//                                                     <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} font-medium`}>
//                                                         Dec '22 — Present
//                                                     </p>
//                                                 </div>
//                                                 <div className="flex items-center mt-1">
//                                                     <i className="fas fa-map-marker-alt mr-2 text-blue-500"></i>
//                                                     <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//                                                         Bengaluru, India
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="mb-4">
//                                             <h5 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} flex items-center`}>
//                                                 <i className="fas fa-laptop-code mr-2 text-blue-500"></i>
//                                                 Frontend Development
//                                             </h5>
//                                             <ul className="space-y-2">
//                                                 <li className="flex items-start">
//                                                     <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
//                                                     <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//                                                         Developed and deployed cross-platform mobile applications using Flutter & React Native.
//                                                     </span>
//                                                 </li>
//                                                 <li className="flex items-start">
//                                                     <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
//                                                     <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//                                                         Designed and implemented intuitive user interfaces using HTML, CSS and React.js for responsive web applications.
//                                                     </span>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                         <div>
//                                             <h5 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} flex items-center`}>
//                                                 <i className="fas fa-server mr-2 text-blue-500"></i>
//                                                 Backend Development
//                                             </h5>
//                                             <ul className="space-y-2">
//                                                 <li className="flex items-start">
//                                                     <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
//                                                     <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//                                                         Built robust REST APIs using Node.js and Express to support mobile and web applications.
//                                                     </span>
//                                                 </li>
//                                                 <li className="flex items-start">
//                                                     <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
//                                                     <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//                                                         Designed and maintained MongoDB schemas for scalable data management.
//                                                     </span>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 {/* Education Items */}
//                                 <div className="relative animate-fade-in-right">
//                                     <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center z-10">
//                                         <i className="fas fa-graduation-cap text-white"></i>
//                                     </div>
//                                     <div className={`ml-12 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-xl shadow-sm border-l-4 border-blue-500 transform hover:scale-102 transition-all duration-300`}>
//                                         <div className="flex flex-col md:flex-row justify-between mb-4">
//                                             <div>
//                                                 <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                                                     B.Tech. in Civil Engineering
//                                                 </h4>
//                                                 <p className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`}>
//                                                     Tadipatri Engineering College
//                                                 </p>
//                                             </div>
//                                             <div className="mt-2 md:mt-0">
//                                                 <div className="flex items-center">
//                                                     <i className="far fa-calendar-alt mr-2 text-blue-500"></i>
//                                                     <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} font-medium`}>
//                                                         Jan '19 — Jan '22
//                                                     </p>
//                                                 </div>
//                                                 <div className="flex items-center mt-1">
//                                                     <i className="fas fa-award mr-2 text-blue-500"></i>
//                                                     <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//                                                         GPA: 72%
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="relative animate-fade-in-left">
//                                     <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center z-10">
//                                         <i className="fas fa-graduation-cap text-white"></i>
//                                     </div>
//                                     <div className={`ml-12 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-xl shadow-sm border-l-4 border-blue-500 transform hover:scale-102 transition-all duration-300`}>
//                                         <div className="flex flex-col md:flex-row justify-between mb-4">
//                                             <div>
//                                                 <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                                                     Diploma in Civil Engineering
//                                                 </h4>
//                                                 <p className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`}>
//                                                     Govt. Polytechnic Rayadurg
//                                                 </p>
//                                             </div>
//                                             <div className="mt-2 md:mt-0">
//                                                 <div className="flex items-center">
//                                                     <i className="far fa-calendar-alt mr-2 text-blue-500"></i>
//                                                     <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} font-medium`}>
//                                                         Jan '16 — Jan '19
//                                                     </p>
//                                                 </div>
//                                                 <div className="flex items-center mt-1">
//                                                     <i className="fas fa-award mr-2 text-blue-500"></i>
//                                                     <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//                                                         GPA: 70%
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* Projects Section */}
//             <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
//                 <div className="max-w-7xl mx-auto px-4">
//                     <h2 className={`text-3xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                         Projects Showcase
//                     </h2>
//                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {[
//                             {
//                                 title: 'Hindely',
//                                 description: 'A feature-rich chat-based application with real-time messaging, media sharing, and group conversation capabilities.',
//                                 image: 'https://public.readdy.ai/ai/img_res/61933f0d8634dd13f324127ab4bb1423.jpg',
//                                 tags: ['React Native', 'Socket.io', 'MongoDB'],
//                                 tagColors: ['bg-blue-100 text-blue-800', 'bg-yellow-100 text-yellow-800', 'bg-red-100 text-red-800']
//                             },
//                             {
//                                 title: 'QuickSend',
//                                 description: 'A delivery service application for transporting products from one location to another with real-time tracking and notifications.',
//                                 image: 'https://public.readdy.ai/ai/img_res/ee61f01aa0bafc87b150d9ad0cbe3ea2.jpg',
//                                 tags: ['React Native', 'Google Maps API', 'Node.js'],
//                                 tagColors: ['bg-blue-100 text-blue-800', 'bg-green-100 text-green-800', 'bg-gray-100 text-gray-800']
//                             },
//                             {
//                                 title: 'ShePower',
//                                 description: 'A women empowerment application providing resources, community support, and educational content for personal and professional growth.',
//                                 image: 'https://public.readdy.ai/ai/img_res/02099c0055835bff25eb8304dee841bd.jpg',
//                                 tags: ['Flutter', 'Firebase', 'Bloc'],
//                                 tagColors: ['bg-blue-100 text-blue-800', 'bg-purple-100 text-purple-800', 'bg-pink-100 text-pink-800']
//                             },
//                             {
//                                 title: 'Cozmo',
//                                 description: 'A comprehensive e-commerce application with product catalog, shopping cart, payment integration, and order tracking features.',
//                                 image: 'https://public.readdy.ai/ai/img_res/764df524d86c7d746f8b2032a46f58da.jpg',
//                                 tags: ['Flutter', 'GetX', 'Stripe'],
//                                 tagColors: ['bg-blue-100 text-blue-800', 'bg-green-100 text-green-800', 'bg-yellow-100 text-yellow-800']
//                             },
//                             {
//                                 title: 'Bankitr',
//                                 description: 'A travel application for planning trips, booking accommodations, exploring destinations, and managing travel itineraries.',
//                                 image: 'https://public.readdy.ai/ai/img_res/4ddd2e72f630be55874a633e1ad79069.jpg',
//                                 tags: ['Flutter', 'Provider', 'REST API'],
//                                 tagColors: ['bg-blue-100 text-blue-800', 'bg-indigo-100 text-indigo-800', 'bg-red-100 text-red-800']
//                             }
//                         ].map((project, index) => (
//                             <div
//                                 key={index}
//                                 className={`${isDarkMode ? 'bg-gray-800/90 backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm'} rounded-[2rem] overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:scale-105 animate-fade-in-up border-2 border-gradient-to-r ${index % 2 === 0 ? 'from-blue-500/20 to-purple-500/20' : 'from-pink-500/20 to-orange-500/20'}`}
//                                 style={{
//                                     background: isDarkMode
//                                         ? 'linear-gradient(135deg, rgba(31, 41, 55, 0.9), rgba(17, 24, 39, 0.9))'
//                                         : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(249, 250, 251, 0.9))'
//                                 }}
//                             >
//                                 <div className="h-56 overflow-hidden">
//                                     <img
//                                         src={project.image}
//                                         alt={`${project.title} App`}
//                                         className="w-full h-full object-cover object-top transform hover:scale-110 transition-transform duration-300"
//                                     />
//                                 </div>
//                                 <div className="p-6">
//                                     <h3 className={`text-xl font
// t-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                                         {project.title}
//                                     </h3>
//                                     <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//                                         {project.description}
//                                     </p>
//                                     <div className="flex flex-wrap gap-2">
//                                         {project.tags.map((tag, tagIndex) => (
//                                             <span
//                                                 key={tagIndex}
//                                                 className={`px-3 py-1 rounded-full text-sm font-medium ${project.tagColors[tagIndex]}`}
//                                             >
//                                                 {tag}
//                                             </span>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//             {/* Skills Section */}
//             <section id="skills" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
//                 <div className="max-w-7xl mx-auto px-4">
//                     <h2 className={`text-3xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'} relative`}>
//                         Technical Skills
//                         <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 rounded"></div>
//                     </h2>
//                     <div className="grid lg:grid-cols-3 gap-8">
//                         {[
//                             {
//                                 icon: 'fas fa-mobile-alt',
//                                 category: 'Mobile Development',
//                                 skills: [
//                                     { name: 'React Native', level: 90 },
//                                     { name: 'Flutter', level: 85 },
//                                     { name: 'Android Studio', level: 80 },
//                                     { name: 'iOS Development', level: 75 }
//                                 ]
//                             },
//                             {
//                                 icon: 'fas fa-code',
//                                 category: 'Frontend Development',
//                                 skills: [
//                                     { name: 'JavaScript', level: 95 },
//                                     { name: 'TypeScript', level: 88 },
//                                     { name: 'React.js', level: 92 },
//                                     { name: 'HTML/CSS', level: 90 }
//                                 ]
//                             },
//                             {
//                                 icon: 'fas fa-server',
//                                 category: 'Backend Development',
//                                 skills: [
//                                     { name: 'Node.js', level: 85 },
//                                     { name: 'Express.js', level: 82 },
//                                     { name: 'MongoDB', level: 88 },
//                                     { name: 'REST APIs', level: 90 }
//                                 ]
//                             }
//                         ].map((category, index) => (
//                             <div
//                                 key={index}
//                                 className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up border-2 ${index === 0 ? 'border-blue-500/20' :
//                                         index === 1 ? 'border-purple-500/20' :
//                                             'border-pink-500/20'
//                                     }`}
//                             >
//                                 <div className="flex items-center mb-6">
//                                     <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${index === 0 ? 'bg-blue-500/10 text-blue-500' :
//                                             index === 1 ? 'bg-purple-500/10 text-purple-500' :
//                                                 'bg-pink-500/10 text-pink-500'
//                                         }`}>
//                                         <i className={`${category.icon} text-2xl`}></i>
//                                     </div>
//                                     <h3 className={`text-xl font-bold ml-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                                         {category.category}
//                                     </h3>
//                                 </div>
//                                 <div className="space-y-6">
//                                     {category.skills.map((skill, skillIndex) => (
//                                         <div key={skillIndex}>
//                                             <div className="flex justify-between mb-2">
//                                                 <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                                                     {skill.name}
//                                                 </span>
//                                                 <span className={`text-sm font-medium ${index === 0 ? 'text-blue-500' :
//                                                         index === 1 ? 'text-purple-500' :
//                                                             'text-pink-500'
//                                                     }`}>
//                                                     {skill.level}%
//                                                 </span>
//                                             </div>
//                                             <div className={`h-2 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} overflow-hidden`}>
//                                                 <div
//                                                     className={`h-full rounded-full ${index === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-400' :
//                                                             index === 1 ? 'bg-gradient-to-r from-purple-500 to-purple-400' :
//                                                                 'bg-gradient-to-r from-pink-500 to-pink-400'
//                                                         }`}
//                                                     style={{ width: `${skill.level}%`, transition: 'width 1.5s ease-in-out' }}
//                                                 ></div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         ))}
//                         <div className={`lg:col-span-3 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-2xl p-8 shadow-lg mt-8 animate-fade-in-up`}>
//                             <h3 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                                 Additional Skills & Tools
//                             </h3>
//                             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                                 {[
//                                     { name: 'Git', icon: 'fab fa-git-alt', color: 'text-orange-500' },
//                                     { name: 'VS Code', icon: 'fas fa-code', color: 'text-blue-500' },
//                                     { name: 'Firebase', icon: 'fas fa-fire', color: 'text-yellow-500' },
//                                     { name: 'Redux', icon: 'fas fa-box', color: 'text-purple-500' },
//                                     { name: 'AWS', icon: 'fab fa-aws', color: 'text-yellow-600' },
//                                     { name: 'Docker', icon: 'fab fa-docker', color: 'text-blue-600' },
//                                     { name: 'GraphQL', icon: 'fas fa-project-diagram', color: 'text-pink-500' },
//                                     { name: 'Agile', icon: 'fas fa-sync', color: 'text-green-500' }
//                                 ].map((tool, index) => (
//                                     <div
//                                         key={index}
//                                         className={`flex items-center p-4 rounded-xl ${isDarkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-50 hover:bg-gray-100'} transition-all duration-300 cursor-pointer group`}
//                                     >
//                                         <i className={`${tool.icon} ${tool.color} text-xl group-hover:scale-110 transition-transform duration-300`}></i>
//                                         <span className={`ml-3 font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{tool.name}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* Contact Section */}
//             <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
//                 <div className="max-w-7xl mx-auto px-4">
//                     <h2 className={`text-3xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                         Get in Touch
//                     </h2>
//                     <div className="grid md:grid-cols-2 gap-12">
//                         <div className="space-y-8">
//                             <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} animate-fade-in-left`}>
//                                 <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                                     Contact Information
//                                 </h3>
//                                 <div className="space-y-4">
//                                     {[
//                                         { icon: 'fas fa-envelope', text: 'venkatesulupujari@gmail.com' },
//                                         { icon: 'fas fa-phone', text: '+91 9876543210' },
//                                         { icon: 'fas fa-map-marker-alt', text: 'Bengaluru, Karnataka, India' }
//                                     ].map((item, index) => (
//                                         <div key={index} className="flex items-center space-x-4">
//                                             <div className={`w-10 h-10 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-white'} flex items-center justify-center`}>
//                                                 <i className={`${item.icon} text-blue-500`}></i>
//                                             </div>
//                                             <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
//                                                 {item.text}
//                                             </span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                             <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} animate-fade-in-left`}>
//                                 <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                                     Social Links
//                                 </h3>
//                                 <div className="flex space-x-4">
//                                     {[
//                                         { icon: 'fab fa-github', link: 'https://github.com/yourusername' },
//                                         { icon: 'fab fa-linkedin', link: 'https://linkedin.com/in/yourusername' },
//                                         { icon: 'fab fa-twitter', link: 'https://twitter.com/yourusername' }
//                                     ].map((social, index) => (
//                                         <a
//                                             key={index}
//                                             href={social.link}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className={`w-12 h-12 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110`}
//                                         >
//                                             <i className={`${social.icon} text-blue-500 text-xl`}></i>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                         <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-right">
//                             <div>
//                                 <label htmlFor="name" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
//                                     Name
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     name="name"
//                                     required
//                                     className={`w-full px-4 py-3 rounded-xl ${isDarkMode
//                                             ? 'bg-gray-800 text-white border-gray-700 focus:border-blue-500'
//                                             : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-blue-500'
//                                         } border focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
//                                     Email
//                                 </label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     name="email"
//                                     required
//                                     className={`w-full px-4 py-3 rounded-xl ${isDarkMode
//                                             ? 'bg-gray-800 text-white border-gray-700 focus:border-blue-500'
//                                             : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-blue-500'
//                                         } border focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="subject" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
//                                     Subject
//                                 </label>
//                                 <input
//                                     type="text"
//                                     id="subject"
//                                     name="subject"
//                                     required
//                                     className={`w-full px-4 py-3 rounded-xl ${isDarkMode
//                                             ? 'bg-gray-800 text-white border-gray-700 focus:border-blue-500'
//                                             : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-blue-500'
//                                         } border focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="message" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
//                                     Message
//                                 </label>
//                                 <textarea
//                                     id="message"
//                                     name="message"
//                                     rows={4}
//                                     required
//                                     className={`w-full px-4 py-3 rounded-xl ${isDarkMode
//                                             ? 'bg-gray-800 text-white border-gray-700 focus:border-blue-500'
//                                             : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-blue-500'
//                                         } border focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
//                                 ></textarea>
//                             </div>
//                             <button
//                                 type="submit"
//                                 className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
//                             >
//                                 Send Message
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </section>
//             {/* Footer */}
//             <footer className={`py-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
//                 <div className="max-w-7xl mx-auto px-4 text-center">
//                     <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
//                         © 2024 Venkatesulu Pujari. All rights reserved.
//                     </p>
//                 </div>
//             </footer>
//         </div>
//     );
// };
// export default App
