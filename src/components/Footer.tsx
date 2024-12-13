import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brown-50 py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Coffee className="w-6 h-6 text-brown-800" />
              <h4 className="text-xl font-bold text-brown-900">Wedangan</h4>
            </div>
            <p className="text-brown-700">
              Experience the authentic taste of Balinese coffee culture in the
              heart of Ubud.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-brown-900 mb-4 sm:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href="#home" className="text-brown-700 hover:text-brown-900">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-brown-700 hover:text-brown-900"
                >
                  About
                </a>
              </li>
              <li>
                <a href="#menu" className="text-brown-700 hover:text-brown-900">
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="text-brown-700 hover:text-brown-900"
                >
                  Location
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-brown-900 mb-4 sm:mb-6">
              Opening Hours
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-brown-700">
              <li>Monday - Friday: 7AM - 10PM</li>
              <li>Saturday: 8AM - 10PM</li>
              <li>Sunday: 8AM - 9PM</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-brown-900 mb-4 sm:mb-6">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="p-2 rounded-full bg-brown-200 text-brown-800 hover:bg-brown-300"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="p-2 rounded-full bg-brown-200 text-brown-800 hover:bg-brown-300"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="p-2 rounded-full bg-brown-200 text-brown-800 hover:bg-brown-300"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-brown-200 text-center text-brown-600">
          <p>
            &copy; {new Date().getFullYear()} Wedangan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
