import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-white p-2 rounded-full transform group-hover:scale-110 transition-transform">
              <UtensilsCrossed className="h-6 w-6 text-blue-500" />
            </div>
            <span className="text-xl font-bold text-white">Recipe Book</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;