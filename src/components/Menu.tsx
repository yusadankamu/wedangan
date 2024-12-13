import { motion } from "framer-motion";

const menuItems = [
  {
    name: "Bali Coffee",
    price: "45K",
    description: "Traditional Balinese coffee made from locally sourced beans",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3",
  },
  {
    name: "Ubud Latte",
    price: "55K",
    description: "Signature latte with palm sugar and coconut milk",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3",
  },
  {
    name: "Rice Terrace Mocha",
    price: "60K",
    description: "Rich mocha inspired by Ubud famous rice terraces",
    image:
      "https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-4.0.3",
  },
];

const MenuItem = ({
  item,
  index,
}: {
  item: (typeof menuItems)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 sm:p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg sm:text-xl font-bold">{item.name}</h3>
          <span className="text-brown-800 font-bold">{item.price}</span>
        </div>
        <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
      </div>
    </motion.div>
  );
};

const Menu = () => {
  return (
    <section id="menu" className="py-16 sm:py-24 px-4 sm:px-6 bg-brown-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
          Our Signature Menu
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {menuItems.map((item, index) => (
            <MenuItem key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
