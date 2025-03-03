
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-screen-md mx-auto px-4 pb-20">
        <Outlet />
      </div>
      <Navbar />
    </div>
  );
};

export default Layout;
