
const SkillsSection = ({ isDarkMode, skillsChartRef }) => {

    const techSkills = [
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
                { name: 'dart', level: 80 },
                { name: 'React.js', level: 92 },
                { name: 'HTML/CSS', level: 90 }
            ]
        },
        {
            icon: 'fas fa-server',
            category: 'Backend Development',
            skills: [
                { name: 'Node.js', level: 50 },
                { name: 'MongoDB', level: 50 },
                { name: 'REST APIs', level: 90 },

            ]
        }
    ];

    const addSkills = [
        { name: 'Firebase, Firestore', icon: 'fas fa-fire', color: 'text-yellow-500' },
        { name: 'bloc, Getx, Redux', icon: 'fas fa-box', color: 'text-purple-500' },
        { name: 'Google, Here Maps', icon: 'fas fa-map-marker-alt', color: 'text-yellow-600' },
        { name: 'Android Studio', icon: 'fas fa-project-diagram', color: 'text-pink-500' },
        { name: 'Postman', icon: 'fas fa-sync', color: 'text-green-500' },
        { name: 'Git', icon: 'fab fa-git-alt', color: 'text-orange-500' },
        { name: 'VS Code', icon: 'fas fa-code', color: 'text-blue-500' },
        { name: 'Socket IO', icon: 'fas fa-network-wired', color: 'text-blue-600' },
        { name: 'Agora SDK', icon: 'fas fa-video', color: 'text-indigo-500' },
        { name: 'Jira', icon: 'fas fa-tasks', color: 'text-blue-400' },
    ];



    return (
        <section id="skills" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
            <div className="max-w-7xl mx-auto px-4">
                <h2 className={`text-3xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'} relative`}>
                    Technical Skills
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 rounded"></div>
                </h2>
                <div className="grid lg:grid-cols-3 gap-8">
                    {techSkills.map((category, index) => (
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
                            {addSkills.map((tool, index) => (
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




