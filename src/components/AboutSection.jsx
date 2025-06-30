
const AboutSection = ({ isDarkMode, profileImage }) => {
  return (
    <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} inline-block relative`}>
            About Me
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Left Column - Profile Image */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-full">
                <img
                  src={profileImage}
                  alt="Professional Portrait"
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Social Media Icons */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {[
                  { icon: 'fab fa-github', bg: 'bg-gray-800', hover: 'hover:bg-gray-900' },
                  { icon: 'fab fa-linkedin', bg: 'bg-blue-600', hover: 'hover:bg-blue-700' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-10 h-10 ${social.bg} ${social.hover} rounded-full flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer`}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Profile Info */}
          <div className="md:col-span-7">
            <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} rounded-3xl p-8 shadow-xl transform hover:scale-102 transition-all duration-300`}>
              {/* Profile Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Venkatesulu Pujari
                  </h3>
                  <p className={`text-lg ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    React Native Developer
                  </p>
                </div>
                <div className="mt-3 md:mt-0">
                  <span className={`inline-flex items-center px-4 py-1 rounded-full text-sm font-medium ${isDarkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-800'}`}>
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Available for hire
                  </span>
                </div>
              </div>

              {/* Key Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: 'fas fa-briefcase', label: 'Experience', value: '2+ Years' },
                  { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Bengaluru, India' },
                  { icon: 'fas fa-graduation-cap', label: 'Degree', value: 'B.Tech. Civil' },
                  { icon: 'fas fa-language', label: 'Languages', value: 'English, Hindi, Telugu' }
                ].map((item, index) => (
                  <div key={index} className={`flex items-center p-3 rounded-xl ${isDarkMode ? 'bg-gray-600/50' : 'bg-gray-50'}`}>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-sm`}>
                      <i className={`${item.icon} text-blue-500`}></i>
                    </div>
                    <div className="ml-3">
                      <p className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{item.label}</p>
                      <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* About Text */}
              <div className="mb-6">
                <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'} flex items-center`}>
                  <i className="fas fa-user-circle mr-2 text-blue-500"></i>
                  Professional Summary
                </h4>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-3 leading-relaxed`}>
                  With over 2.5 years of experience in Android Development using React Native and Flutter, I specialize in building mobile applications with clean architecture. My passion lies in creating efficient, maintainable code and delivering exceptional user experiences.
                </p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  I have strong knowledge of data structures and algorithms, with an appetite for solving complex software engineering problems. I'm experienced in using IDEs like Android Studio and Visual Studio Code, and have knowledge of Flutter web development.
                </p>
              </div>

              {/* Skills Tags */}
              <div>
                <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'} flex items-center`}>
                  <i className="fas fa-code mr-2 text-blue-500"></i>
                  Core Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    { text: 'React js/Native', color: 'from-blue-500 to-blue-600' },
                    { text: 'Flutter', color: 'from-blue-400 to-cyan-500' },
                    { text: 'JavaScript', color: 'from-yellow-400 to-yellow-500' },
                    { text: 'firebase', color: 'from-blue-600 to-indigo-600' },
                    { text: 'Node.js', color: 'from-green-500 to-green-600' },
                    { text: 'MongoDB / FireStore', color: 'from-green-600 to-teal-600' },
                    { text: 'Redux', color: 'from-purple-500 to-purple-600' },
                    { text: 'Bloc / Getx', color: 'from-green-500 to-green-600' },
                    { text: 'REST APIs', color: 'from-gray-600 to-gray-700' }
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${skill.color} text-white shadow-sm transform hover:scale-105 transition-all duration-300`}
                    >
                      {skill.text}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interview Highlights */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                <h4 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'} flex items-center`}>
                  <i className="fas fa-star mr-2 text-yellow-500"></i>
                  Interview Highlights
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <strong>Problem Solver:</strong> Implemented complex UI animations improving user engagement by 40%
                    </span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <strong>Performance Optimizer:</strong> Reduced app load time by 30% through code optimization
                    </span>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} inline-block relative`}>
              Professional Journey
              <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
            </h3>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
            <div className="space-y-12">
              {/* Experience Items */}
              <div className="relative animate-fade-in-left">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center z-10 shadow-lg">
                  <i className="fas fa-briefcase text-white"></i>
                </div>
                <div className={`ml-16 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-2xl shadow-xl border-l-4 border-blue-500 transform hover:scale-102 transition-all duration-300`}>
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Software Engineer
                      </h4>
                      <p className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`}>
                        Hiyaak Systems
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <div className="flex items-center">
                        <i className="far fa-calendar-alt mr-2 text-blue-500"></i>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} font-medium`}>
                          Dec '22 — Present
                        </p>
                      </div>
                      <div className="flex items-center mt-1">
                        <i className="fas fa-map-marker-alt mr-2 text-blue-500"></i>
                        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          Bengaluru, India
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="mb-4">
                      <h5 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} flex items-center`}>
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center mr-2">
                          <i className="fas fa-laptop-code text-blue-500"></i>
                        </div>
                        Frontend Development
                      </h5>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                          <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Developed and deployed cross-platform mobile applications using Flutter & React Native.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                          <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Designed and implemented intuitive user interfaces using HTML, CSS and React.js for responsive web applications.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} flex items-center`}>
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center mr-2">
                          <i className="fas fa-server text-blue-500"></i>
                        </div>
                        Backend Development
                      </h5>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                          <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Built robust REST APIs using Node.js and Express to support mobile and web applications.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                          <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Designed and maintained MongoDB schemas for scalable data management.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="mt-6 pt-6 border-t border-dashed border-gray-500/30">
                    <h5 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} flex items-center`}>
                      <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center mr-2">
                        <i className="fas fa-trophy text-green-500"></i>
                      </div>
                      Key Achievements 
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-gray-600/50' : 'bg-gray-50'} text-center`}>
                        <div className="text-3xl font-bold text-blue-500 mb-1">9+</div>
                        <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Projects Completed</div>
                      </div>
                      <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-gray-600/50' : 'bg-gray-50'} text-center`}>
                        <div className="text-3xl font-bold text-purple-500 mb-1">60%</div>
                        <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Performance Boost</div>
                      </div>
                      <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-gray-600/50' : 'bg-gray-50'} text-center`}>
                        <div className="text-3xl font-bold text-green-500 mb-1">3+</div>
                        <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>App Releases</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Items */}
              <div className="relative animate-fade-in-right">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center z-10 shadow-lg">
                  <i className="fas fa-graduation-cap text-white"></i>
                </div>
                <div className={`ml-16 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-2xl shadow-xl border-l-4 border-purple-500 transform hover:scale-102 transition-all duration-300`}>
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        B.Tech. in Civil Engineering
                      </h4>
                      <p className={`${isDarkMode ? 'text-purple-400' : 'text-purple-600'} font-medium`}>
                        Tadipatri Engineering College
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <div className="flex items-center">
                        <i className="far fa-calendar-alt mr-2 text-purple-500"></i>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} font-medium`}>
                          Jan '19 — Jan '22
                        </p>
                      </div>
                      <div className="flex items-center mt-1">
                        <i className="fas fa-award mr-2 text-purple-500"></i>
                        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          GPA: 72%
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Relevant Coursework */}
                  <div className="mt-4">
                    <h5 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} flex items-center`}>
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mr-2">
                        <i className="fas fa-book text-purple-500"></i>
                      </div>
                      Relevant Coursework
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {['Java full stack developement', 'Testing', 'Data Structures', 'Algorithms', 'Database Systems'].map((course, idx) => (
                        <span key={idx} className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-600 text-gray-200' : 'bg-gray-100 text-gray-700'}`}>
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative animate-fade-in-left">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center z-10 shadow-lg">
                  <i className="fas fa-graduation-cap text-white"></i>
                </div>
                <div className={`ml-16 ${isDarkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-2xl shadow-xl border-l-4 border-pink-500 transform hover:scale-102 transition-all duration-300`}>
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Diploma in Civil Engineering
                      </h4>
                      <p className={`${isDarkMode ? 'text-pink-400' : 'text-pink-600'} font-medium`}>
                        Govt. Polytechnic Rayadurg
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <div className="flex items-center">
                        <i className="far fa-calendar-alt mr-2 text-pink-500"></i>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} font-medium`}>
                          Jan '16 — Jan '19
                        </p>
                      </div>
                      <div className="flex items-center mt-1">
                        <i className="fas fa-award mr-2 text-pink-500"></i>
                        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          GPA: 70%
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mt-4">
                    <h5 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} flex items-center`}>
                      <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center mr-2">
                        <i className="fas fa-medal text-pink-500"></i>
                      </div>
                      Achievements
                    </h5>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                        <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          Participated in state-level technical symposium
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                        <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          Member of college technical club
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;



