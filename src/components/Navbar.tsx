import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Coffee } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full px-4 sm:px-6 py-4 bg-white/80 backdrop-blur-sm z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-brown-900">
          <h4 className="flex items-center gap-x-2">
            <Coffee />
            Wedangan
          </h4>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="hover:text-brown-700 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-brown-700 transition-colors">
            About
          </a>
          <a href="#menu" className="hover:text-brown-700 transition-colors">
            Menu
          </a>
          <a
            href="#location"
            className="hover:text-brown-700 transition-colors"
          >
            Location
          </a>

          <motion.button
            whileHover={{ backgroundColor: "white", color: "#4A321F" }}
            className="px-6 py-2 bg-brown-800 text-white rounded-full border-2 border-brown-800 transition-colors"
          >
            Reservation
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              <a
                href="#home"
                className="hover:text-brown-700 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-brown-700 transition-colors"
              >
                About
              </a>
              <a
                href="#menu"
                className="hover:text-brown-700 transition-colors"
              >
                Menu
              </a>
              <a
                href="#location"
                className="hover:text-brown-700 transition-colors"
              >
                Location
              </a>
              <motion.button
                whileHover={{ backgroundColor: "white", color: "#4A321F" }}
                className="px-6 py-2 bg-brown-800 text-white rounded-full border-2 border-brown-800 transition-colors"
              >
                Reservation
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
