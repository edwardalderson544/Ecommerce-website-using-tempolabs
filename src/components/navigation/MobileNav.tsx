import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, Search, ShoppingBag, User } from "lucide-react";

const MobileNav = () => {
  const navigate = useNavigate();

  return (
    <nav className="mobile-nav">
      <Link to="/" className="mobile-nav-button">
        <Home className="w-6 h-6" />
        <span>Home</span>
      </Link>

      <Link to="/search" className="mobile-nav-button">
        <Search className="w-6 h-6" />
        <span>Search</span>
      </Link>

      <Link to="/medicines" className="mobile-nav-button">
        <ShoppingBag className="w-6 h-6" />
        <span>Shop</span>
      </Link>

      <Link to="/profile" className="mobile-nav-button">
        <User className="w-6 h-6" />
        <span>Profile</span>
      </Link>
    </nav>
  );
};

export default MobileNav;
