import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/home";

function App() {
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Simulate actual loading process
  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setLoadingProgress(prev => {
          const nextProgress = prev + Math.random() * 15;
          if (nextProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return nextProgress;
        });
      }, 150);

      return () => clearInterval(interval);
    }
  }, [loading]);

  return (
    <Router>
      <div className="relative h-screen w-full">
        {loading && (
          <SplashScreen 
            progress={loadingProgress}
            onLoaded={() => setLoading(false)}
          />
        )}
        
        <Routes>
          <Route 
            path="/" 
            element={<Home loadingProgress={loadingProgress} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;