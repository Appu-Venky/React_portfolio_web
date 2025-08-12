
import ciniinvest from "../assets/ciniInvest.jpg";
import cozmo from "../assets/cozmoImg.jpg";
import headlr from "../assets/headlr.jpg";
import hiddenly from "../assets/hiddenlyImg.jpg";
import quicksenda from "../assets/quickSendaImg.jpg";
import recess from "../assets/recessImg.jpg";
import shepower from "../assets/shePowerImg.jpg";
import soulipie from "../assets/soulipieImg.jpg";
import steamhub from "../assets/stremHub.jpg";


const ProjectsSection = ({ isDarkMode }) => {
    const projectList = [
        {
            title: 'Soulipie',
            description: 'A modern dating application with advanced matching algorithms, real-time chat, and profile customization features.',
            image: soulipie,
            tags: ['React Native', 'Firebase', 'Redux', 'maps'],
            tagColors: ['bg-blue-100 text-blue-800', 'bg-yellow-100 text-yellow-800', 'bg-purple-100 text-purple-800', 'bg-blue-100 text-blue-800',]
        },
        {
            title: 'Hiddenly',
            description: 'A secure messaging platform with end-to-end encryption, video calling capabilities, and disappearing messages for enhanced privacy.',
            image: hiddenly,
            tags: ['React Native', 'WebRTC', 'Socket.io'],
            tagColors: ['bg-blue-100 text-blue-800', 'bg-green-100 text-green-800', 'bg-yellow-100 text-yellow-800']
        },
        {
            title: 'ShePower',
            description: 'A women empowerment application providing resources, community support, safety features, and educational content for personal growth.',
            image: shepower,
            tags: ['Flutter', 'Firebase', 'Getx', 'Maps'],
            tagColors: ['bg-blue-100 text-blue-800', 'bg-purple-100 text-purple-800', 'bg-pink-100 text-pink-800', 'bg-blue-100 text-blue-800',]
        },
        {
            title: 'QuickSend',
            description: 'A delivery service application for transporting packages with real-time tracking, secure payment processing, and delivery notifications.',
            image: quicksenda,
            tags: ['React Native', 'Google Maps API', 'Node.js'],
            tagColors: ['bg-blue-100 text-blue-800', 'bg-green-100 text-green-800', 'bg-gray-100 text-gray-800']
        },
        {
            title: 'Cozmo',
            description: 'A comprehensive e-commerce platform with event ticketing, product catalog, shopping cart, payment integration, and order management.',
            image: cozmo,
            tags: ['Flutter', 'GetX', 'Stripe'],
            tagColors: ['bg-blue-100 text-blue-800', 'bg-green-100 text-green-800', 'bg-yellow-100 text-yellow-800']
        },
        {
            title: 'Recess',
            description: 'An educational platform connecting students with tutors, featuring scheduling tools, video lessons, and progress tracking for personalized learning.',
            image: recess,
            tags: ['React js (web)', 'Flutter (android)', 'Firebase', 'Context API'],
            tagColors: ['bg-blue-100 text-blue-800', 'bg-yellow-100 text-yellow-800', 'bg-indigo-100 text-indigo-800', 'bg-blue-100 text-blue-800',]
        },
        {
            title: 'StreamHub',
            description: 'A Netflix-inspired streaming platform with personalized recommendations, content categories, and seamless video playback experience.',
            image: steamhub,
            tags: ['React js', 'ExoPlayer', 'IMDB', 'Firebase', 'Firestore'],
            tagColors: ['bg-blue-100 text-blue-800', 'bg-purple-100 text-purple-800', 'bg-red-100 text-red-800', 'bg-blue-100 text-blue-800', 'bg-purple-100 text-purple-800'],
            link: 'https://streamhub-clone.netlify.app/',
            gitlink: 'https://github.com/Appu-Venky/Netflix-Clone'
        },
        {
            title: 'Headlr',
            description: 'A comprehensive news application with personalized feeds, breaking news alerts, and category-based content organization.',
            image: headlr,
            tags: ['Flutter', 'Bloc', 'REST API', 'News API'],
            tagColors: ['bg-blue-100 text-blue-800', 'bg-indigo-100 text-indigo-800', 'bg-green-100 text-green-800', 'bg-blue-100 text-blue-800',],
            gitlink: 'https://github.com/Appu-Venky/headlinr'
        },
        {
            title: 'CiniInvest',
            description: 'An innovative platform for movie investment opportunities, featuring project analytics, investment tracking, and return projections.',
            image: ciniinvest,
            tags: ['Flutter', 'Bloc', 'Firebase', 'Chart.js', 'Node.js'],
            tagColors: ['bg-blue-100 text-blue-800', 'bg-yellow-100 text-yellow-800', 'bg-gray-100 text-gray-800', 'bg-blue-100 text-blue-800', 'bg-yellow-100 text-yellow-800',],
            gitlink: 'https://github.com/Appu-Venky/CineInvest'
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

                                <div className="flex justify-between">

                                    <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {project.title}
                                    </h3>


                                    <div className="flex gap-2">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-2 py-1 text-sm font-medium rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300 flex items-center gap-2"
                                            >
                                                <i className="fa-solid fa-globe"></i>

                                            </a>
                                        )}

                                        {project.gitlink && (
                                            <a
                                                href={project.gitlink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-2 py-1 text-sm font-medium rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300 flex items-center gap-2"
                                            >
                                                <i className="fa-brands fa-github"></i>

                                            </a>
                                        )}
                                    </div>


                                </div>

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





