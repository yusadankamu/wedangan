import { motion } from "framer-motion";
import { Coffee, MapPin } from "lucide-react";
import Reservation from "./Reservation";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-8 bg-brown-50 rounded-3xl p-6 sm:p-12"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-brown-900 mb-6">
            Experience Bali's Finest Coffee in the Heart of Ubud
          </h1>
          <p className="text-lg sm:text-xl text-brown-700 mb-8">
            Immerse yourself in the authentic Balinese coffee culture while
            enjoying our carefully crafted beverages and delicious treats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-4">
              <Coffee className="text-brown-700" />
              <span>Open daily: 7AM - 10PM</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-brown-700" />
              <span>Jl. Raya Ubud No. 88, Ubud, Bali</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-4 grid gap-6"
        >
          <div className="bg-brown-100 rounded-3xl p-4 sm:p-8 aspect-square">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3"
              alt="Coffee beans"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <Reservation />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
