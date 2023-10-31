import { Header, SideIcons, Footer, DarkModeToggle } from "../components";

const Layout = ({ children, toggleDarkMode }) => {
  // Function to check if the screen is in mobile view
  const isMobileView = () => {
    // You can adjust the max-width value as needed to define when the mobile view starts
    return window.innerWidth <= 768; // Example: 768px is a common mobile breakpoint
  };

  return (
    <div className="dark:bg-gray-950">
      {/* Conditionally render SideIcons based on screen size */}
      {!isMobileView() && <SideIcons />}
      <div>
        <Header />
        {children}
        <Footer />
        <DarkModeToggle toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
};

export default Layout;
