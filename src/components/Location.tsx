import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const Location = () => {
  return (
    <section
      id="location"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-brown-900 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Visit Us</h2>
          <p className="text-lg sm:text-xl text-brown-100">
            Experience the magic of Wedangan in person
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 flex-shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Address</h3>
                <p className="text-sm sm:text-base">
                  Jl. Raya Ubud No. 88, Ubud, Gianyar, Bali 80571
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Clock className="w-6 h-6 flex-shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  Opening Hours
                </h3>
                <p className="text-sm sm:text-base">
                  Monday - Sunday: 7AM - 10PM
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 flex-shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Contact</h3>
                <p className="text-sm sm:text-base">+62 361 123456</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[300px] sm:h-[400px] rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3"
              alt="Wedangan Coffee Shop Location"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
