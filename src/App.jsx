import { useState, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LoadingScreen from './components/LoadingScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check local storage or preferred color scheme
  useLayoutEffect(() => {
    const savedMode = localStorage.getItem("mode");
    setIsDarkMode(savedMode === "light");

    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    if (!savedMode && prefersDarkMode.matches) {
      setIsDarkMode(true);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const toggleDarkMode = () => {
    const newMode = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("mode", newMode);
    document.body.setAttribute("data-mode", newMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : ""}`}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <BrowserRouter>
          <Layout toggleDarkMode={toggleDarkMode}>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
