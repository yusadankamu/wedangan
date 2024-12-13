import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">Our Story</h2>
          <p className="text-base sm:text-lg text-gray-700">
            Nestled in the cultural heart of Ubud, Wedangan brings together
            traditional Balinese coffee culture with modern brewing techniques.
            Our coffee shop is more than just a place to drink coffee—it's a
            sanctuary where culture, community, and exceptional coffee
            intersect.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            Every bean we use is carefully selected from local Balinese farmers,
            ensuring both quality and sustainability. Our commitment to the
            community extends beyond coffee, as we regularly host cultural
            events and support local artisans.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[300px] sm:h-[400px] lg:h-[600px]"
        >
          <img
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3"
            alt="Wedangan Coffee Shop Interior"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
