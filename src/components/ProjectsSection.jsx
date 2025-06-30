
const ProjectsSection = ({ isDarkMode }) => {


    const projectList = [
        {
            title: 'Soulipie',
            description: 'A modern dating application with advanced matching algorithms, real-time chat, and profile customization features.',
            image: 'https://readdy.ai/api/search-image?query=dating%20app%20interface%20with%20elegant%20design%2C%20profile%20matching%20system%2C%20modern%20mobile%20dating%20platform%20with%20clean%20UI%2C%20relationship%20focused%20application%20with%20minimalist%20aesthetic%2C%20romantic%20connection%20app%20on%20smartphone&width=600&height=400&seq=10&orientation=landscape',
            tags: ['React Native', 'Firebase', 'Redux', 'maps'],
            tagColors: ['bg-blue-100 text-blue-800', 'bg-yellow-100 text-yellow-800', 'bg-purple-100 text-purple-800', 'bg-blue-100 text-blue-800',]
        },
        {
            title: 'Hiddenly',
            description: 'A secure messaging platform with end-to-end encryption, video calling capabilities, and disappearing messages for enhanced privacy.',
            image: 'https://readdy.ai/api/search-image?query=secure%20messaging%20app%20interface%20with%20video%20call%20features%2C%20encrypted%20chat%20application%20with%20modern%20design%2C%20private%20communication%20platform%20with%20clean%20UI%2C%20video%20conferencing%20mobile%20app%20with%20minimalist%20aesthetic%2C%20secure%20digital%20conversation%20app&width=600&height=400&seq=11&orientation=landscape',
            tags: ['React Native', 'WebRTC', 'Socket.io'],
            tagColors: ['bg-blue-100 text-blue-800', 'bg-green-100 text-green-800', 'bg-yellow-100 text-yellow-800']
        },
        {
            title: 'ShePower',
            description: 'A women empowerment application providing resources, community support, safety features, and educational content for personal growth.',
            image: 'https://readdy.ai/api/search-image?query=women%20empowerment%20app%20interface%20with%20safety%20features%2C%20female-focused%20mobile%20application%20with%20resources%20and%20networking%2C%20professional%20platform%20for%20women%20with%20elegant%20design%2C%20empowerment%20and%20protection%20tools%20with%20clean%20UI%2C%20supportive%20community%20app&width=600&height=400&seq=12&orientation=landscape',
            tags: ['Flutter', 'Firebase', 'Getx', 'Maps'],
            tagColors: ['bg-blue-100 text-blue-800', 'bg-purple-100 text-purple-800', 'bg-pink-100 text-pink-800', 'bg-blue-100 text-blue-800',]
        },
        {
            title: 'QuickSend',
            description: 'A delivery service application for transporting packages with real-time tracking, secure payment processing, and delivery notifications.',
            image: 'https://readdy.ai/api/search-image?query=delivery%20service%20app%20interface%20showing%20package%20tracking%2C%20logistics%20mobile%20application%20with%20map%20and%20route%20planning%2C%20product%20delivery%20management%20system%20with%20clean%20UI%2C%20modern%20courier%20service%20platform%20with%20minimalist%20design%2C%20parcel%20tracking%20app&width=600&height=400&seq=13&orientation=landscape',
            tags: ['React Native', 'Google Maps API', 'Node.js'],
            tagColors: ['bg-blue-100 text-blue-800', 'bg-green-100 text-green-800', 'bg-gray-100 text-gray-800']
        },
        {
            title: 'Conzmo',
            description: 'A comprehensive e-commerce platform with event ticketing, product catalog, shopping cart, payment integration, and order management.',
            image: 'https://readdy.ai/api/search-image?query=e-commerce%20and%20event%20ticketing%20app%20interface%2C%20shopping%20platform%20with%20event%20booking%20features%2C%20modern%20retail%20and%20entertainment%20application%20with%20clean%20UI%2C%20product%20catalog%20and%20event%20listings%20with%20elegant%20design%2C%20digital%20marketplace%20with%20minimalist%20aesthetic&width=600&height=400&seq=14&orientation=landscape',
            tags: ['Flutter', 'GetX', 'Stripe'],
            tagColors: ['bg-blue-100 text-blue-800', 'bg-green-100 text-green-800', 'bg-yellow-100 text-yellow-800']
        },
        {
            title: 'Recess',
            description: 'An educational platform connecting students with tutors, featuring scheduling tools, video lessons, and progress tracking for personalized learning.',
            image: 'https://readdy.ai/api/search-image?query=education%20app%20interface%20with%20tutor%20profiles%2C%20learning%20platform%20with%20scheduling%20features%2C%20modern%20tutoring%20application%20with%20clean%20UI%2C%20educational%20service%20with%20video%20lesson%20capabilities%2C%20professional%20teaching%20marketplace%20with%20elegant%20design&width=600&height=400&seq=15&orientation=landscape',
            tags: ['React js (web)', 'Flutter (android)', 'Firebase', 'Context API'],
            tagColors: ['bg-blue-100 text-blue-800', 'bg-yellow-100 text-yellow-800', 'bg-indigo-100 text-indigo-800', 'bg-blue-100 text-blue-800',]
        },
        {
            title: 'StreamHub',
            description: 'A Netflix-inspired streaming platform with personalized recommendations, content categories, and seamless video playback experience.',
            image: 'https://readdy.ai/api/search-image?query=streaming%20service%20app%20interface%20with%20content%20thumbnails%2C%20video%20platform%20with%20category%20browsing%2C%20modern%20entertainment%20application%20with%20dark%20UI%2C%20movie%20and%20series%20streaming%20service%20with%20elegant%20grid%20layout%2C%20digital%20media%20player%20with%20minimalist%20design&width=600&height=400&seq=16&orientation=landscape',
            tags: ['React js', 'ExoPlayer', 'IMDB', 'Firebase', 'Firestore'],
            tagColors: ['bg-blue-100 text-blue-800', 'bg-purple-100 text-purple-800', 'bg-red-100 text-red-800', 'bg-blue-100 text-blue-800', 'bg-purple-100 text-purple-800']
        },
        {
            title: 'Headlr',
            description: 'A comprehensive news application with personalized feeds, breaking news alerts, and category-based content organization.',
            image: 'https://readdy.ai/api/search-image?query=news%20app%20interface%20with%20article%20cards%2C%20information%20platform%20with%20category%20tabs%2C%20modern%20journalism%20application%20with%20clean%20UI%2C%20current%20events%20reader%20with%20elegant%20typography%2C%20digital%20newspaper%20with%20minimalist%20layout&width=600&height=400&seq=17&orientation=landscape',
            tags: ['Flutter', 'Bloc', 'REST API', 'News API'],
            tagColors: ['bg-blue-100 text-blue-800', 'bg-indigo-100 text-indigo-800', 'bg-green-100 text-green-800', 'bg-blue-100 text-blue-800',]
        },
        {
            title: 'CiniInvest',
            description: 'An innovative platform for movie investment opportunities, featuring project analytics, investment tracking, and return projections.',
            image: 'https://readdy.ai/api/search-image?query=investment%20app%20interface%20focused%20on%20film%20projects%2C%20movie%20funding%20platform%20with%20analytics%20charts%2C%20modern%20financial%20application%20for%20entertainment%20industry%20with%20clean%20UI%2C%20cinema%20investment%20marketplace%20with%20elegant%20design%2C%20film%20production%20funding%20with%20professional%20layout&width=600&height=400&seq=18&orientation=landscape',
            tags: ['Flutter', 'Bloc', 'Firebase', 'Chart.js', 'Node.js'],
            tagColors: ['bg-blue-100 text-blue-800', 'bg-yellow-100 text-yellow-800', 'bg-gray-100 text-gray-800', 'bg-blue-100 text-blue-800', 'bg-yellow-100 text-yellow-800',]
        }
    ];
    return (

        <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
            <div className="max-w-7xl mx-auto px-4">
                <h2 className={`text-3xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Projects Showcase
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectList.map((project, index) => (
                        <div
                            key={index}
                            className={`${isDarkMode ? 'bg-gray-800/90 backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm'} rounded-[2rem] overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:scale-105 animate-fade-in-up border-2 border-gradient-to-r ${index % 2 === 0 ? 'from-blue-500/20 to-purple-500/20' : 'from-pink-500/20 to-orange-500/20'}`}
                            style={{
                                background: isDarkMode
                                    ? 'linear-gradient(135deg, rgba(31, 41, 55, 0.9), rgba(17, 24, 39, 0.9))'
                                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(249, 250, 251, 0.9))'
                            }}
                        >
                            <div className="h-56 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={`${project.title} App`}
                                    className="w-full h-full object-cover object-top transform hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {project.title}
                                </h3>
                                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className={`px-3 py-1 rounded-full text-sm font-medium ${project.tagColors[tagIndex]}`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;





