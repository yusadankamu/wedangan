import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users } from "lucide-react";

const Reservation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-brown-800 rounded-3xl p-8 text-white"
    >
      {!isOpen ? (
        <motion.button
          whileHover={{ scale: 1.02 }}
          onClick={() => setIsOpen(true)}
          className="w-full text-left"
        >
          <h3 className="text-2xl font-bold mb-4">Make a Reservation</h3>
          <p className="text-brown-100">
            Book your table now and experience the finest coffee in Ubud
          </p>
        </motion.button>
      ) : (
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold mb-6">Reserve Your Table</h3>

          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Date</span>
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 rounded-lg bg-brown-700 border border-brown-600 focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Time</span>
            </label>
            <input
              type="time"
              className="w-full px-4 py-2 rounded-lg bg-brown-700 border border-brown-600 focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Guests</span>
            </label>
            <select className="w-full px-4 py-2 rounded-lg bg-brown-700 border border-brown-600 focus:outline-none focus:ring-2 focus:ring-brown-500">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "person" : "people"}
                </option>
              ))}
            </select>
          </div>

          <motion.button
            whileHover={{ backgroundColor: "#FAF6F1", color: "#4A321F" }}
            className="w-full px-6 py-3 mt-4 bg-brown-700 text-white rounded-lg border-2 border-brown-600 transition-colors"
            type="submit"
          >
            Confirm Reservation
          </motion.button>
        </motion.form>
      )}
    </motion.div>
  );
};

export default Reservation;
