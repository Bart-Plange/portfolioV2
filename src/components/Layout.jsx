import { Header, SideIcons, Footer, DarkModeToggle } from "../components";  

const Layout = ({ children, toggleDarkMode }) => {
  return (
    <div className="flex dark:bg-darkBackground">
      <SideIcons />
      <div className="flex-1 p-4 relative"> {/* Make the container relative */}
        <Header />
        {children}
        <Footer />
        <DarkModeToggle toggleDarkMode={toggleDarkMode}/>
        </div>
      </div>
  );
};

export default Layout;
