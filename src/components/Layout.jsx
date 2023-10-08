import { Header, SideIcons, Footer, DarkModeToggle } from "../components";

const Layout = ({ children, toggleDarkMode }) => {
  // Function to check if the screen is in mobile view
  const isMobileView = () => {
    // You can adjust the max-width value as needed to define when the mobile view starts
    return window.innerWidth <= 768; // Example: 768px is a common mobile breakpoint
  };

  return (
    <div className="flex dark:bg-darkBackground">
      {/* Conditionally render SideIcons based on screen size */}
      {!isMobileView() && <SideIcons />}
      <div className="flex-1 relative">
        <Header />
        {children}
        <Footer />
        <DarkModeToggle toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
};

export default Layout;
