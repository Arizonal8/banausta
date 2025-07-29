import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src="/Logo.png" alt="BANA-USTA Logo" className="ml-2 h-8 w-8" />
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link to="/" className="text-gray-700 hover:text-green-600 px-3 py-2 font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-green-600 px-3 py-2 font-medium">
                About Us
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-green-600 px-3 py-2 font-medium">
                Services
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-green-600 px-3 py-2 font-medium">
                Blog
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-green-600 px-3 py-2 font-medium">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none">
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>}
    </nav>;
};
export default Navbar;