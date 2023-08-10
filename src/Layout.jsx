import SidebarNavigation from "./components/ui/SideBarNavigation/Sidebar";
import HeaderNavbar from "@/components/ui/HeaderNavbar";
import ThemeProvider from "./components/ThemeProvider";

const Layout = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <HeaderNavbar />
      <SidebarNavigation />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
