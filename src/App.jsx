import { useState, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { HomePage, ContactPage, Portfolio } from "./pages";
import LoadingScreen from './components/LoadingScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check local storage or preferred color scheme
  useLayoutEffect(() => {
    const savedMode = localStorage.getItem("mode");
    setIsDarkMode(savedMode === "dark");

    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    if (!savedMode && prefersDarkMode.matches) {
      setIsDarkMode(true);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const toggleDarkMode = () => {
    const newMode = isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("mode", newMode);
    document.body.setAttribute("data-mode", newMode);
  };

  return (
    <div className={`App ${isDarkMode ? "light" : ""}`}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <BrowserRouter>
          <Layout toggleDarkMode={toggleDarkMode}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
