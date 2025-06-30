import React from 'react';

const AboutSection = ({ isDarkMode, profileImage }) => {
  return (
    <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square overflow-hidden rounded-full bg-green-500 shadow-lg h-96 w-96 justify-center justify-self-center">
            <img
              src={profileImage}
              alt="Professional Portrait"
              className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              With over 2.5 years of experience in Android Development using React Native and Flutter, I specialize in building mobile applications with clean architecture...
            </p>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              I have strong knowledge of data structures and algorithms, with an appetite for solving complex software engineering problems...
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: 'fab fa-react text-blue-500', text: 'React Native' },
                { icon: 'fab fa-android text-green-500', text: 'Android' },
                { icon: 'fas fa-mobile-alt text-blue-600', text: 'Flutter' },
                { icon: 'fab fa-js text-yellow-500', text: 'JavaScript' },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-white'
                  } rounded-full shadow-sm`}
                >
                  <i className={item.icon}></i>
                  <span className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
