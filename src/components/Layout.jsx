import { Header, SideIcons, Footer, DarkModeToggle } from "../components";

const Layout = ({ children, toggleDarkMode }) => {
  const isMobileView = () => {
    return window.innerWidth <= 768;
  };

  return (
    <div className="flex dark:bg-darkBackground">
      {!isMobileView() && <SideIcons />}
      <div className="flex-1 p-4 relative">
        <Header />
        {children}
        <Footer />
        <DarkModeToggle toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
};

export default Layout;
