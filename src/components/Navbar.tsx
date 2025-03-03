
import { Home, BookOpen, Heart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center">
      <div className="glass flex items-center justify-between gap-4 py-4 px-6 rounded-t-2xl w-full max-w-screen-md mx-auto">
        <NavItem icon={<Home size={24} />} isActive={location.pathname === "/"} to="/" />
        <NavItem icon={<BookOpen size={24} />} isActive={location.pathname.includes("/categories")} to="/categories" />
        <NavItem icon={<Heart size={24} />} isActive={location.pathname.includes("/favorites")} to="/favorites" />
        <NavItem icon={<User size={24} />} isActive={location.pathname.includes("/profile")} to="/profile" />
      </div>
    </div>
  );
};

const NavItem = ({ icon, isActive, to }: { icon: React.ReactNode, isActive: boolean, to: string }) => {
  return (
    <Link 
      to={to}
      className={`p-2 rounded-full transition-all ${isActive ? 'bg-primary text-primary-foreground' : 'text-foreground/60 hover:text-foreground/90'}`}
    >
      {icon}
    </Link>
  );
};

export default Navbar;
