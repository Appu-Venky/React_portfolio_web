import React, { useEffect, useState } from "react";

const SplashScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            onLoadingComplete?.();
          }, 1000);
          return 100;
        }
        return Math.min(prev + Math.random() * 10, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50 transition-opacity duration-1000">
      <div className="text-center space-y-8">
        {/* Animated Logo/Spinner */}
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 border-4 border-blue-500 rounded-full animate-pulse"></div>

          {/* Circular Progress */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              className="fill-none stroke-blue-500"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * progress) / 100}
            />
          </svg>

          {/* Center Content */}
          <div className="absolute inset-0 flex items-center justify-center">

            <span className="text-2xl font-bold text-white">{Math.round(progress)}%</span>

          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white animate-pulse">
            Welcome to My Portfolio
          </h1>
          <p className="text-gray-400 text-lg">
            {progress < 100 ? "Loading assets..." : "Ready to explore!"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;