import { motion, useReducedMotion } from "framer-motion";

const CARDS = [
  {
    id: "products",
    title: "Products",
    color: "text-blue-400",
    items: ["Pumps", "Valves", "Actuation", "Filter Presses", "Mixers"],
  },
  {
    id: "services",
    title: "Services",
    color: "text-green-400",
    items: [
      "Sales",
      "Service",
      "Refurbishing of pumps and valves",
      "Light fabrication",
      "Elite customer service",
    ],
    description:
      "Our biggest service is delivering fast and reliable support with a face you can count on.",
  },
  {
    id: "manufacturers",
    title: "Manufacturers",
    color: "text-yellow-400",
    items: [
      "AEROVENT",
      "BRAY VALVE",
      "EVOQUA WATER TECHNOLOGIES",
      "FINISH-THOMPSON",
      "FLOWSERVE VALVE",
      "LIGHTNIN MIXERS",
      "LMI",
      "MICROPUMP",
      "ROPER",
      "ROTO-JET",
      "SCOT PUMP",
    ],
  },
];

const Container = () => {
  const prefersReduced = useReducedMotion();

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 16, scale: prefersReduced ? 1 : 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: prefersReduced ? {} : {
      scale: 1.02,
      transition: { duration: 0.15, ease: "easeOut" },
    },
    tap: prefersReduced ? {} : { scale: 0.99 },
  };

  return (
    <section
      aria-label="Products, services, and manufacturers"
      className="flex justify-center items-end pb-16 bg-black"
    >
      <motion.div
        className="grid w-full max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {CARDS.map((card) => (
          <motion.article
            key={card.id}
            aria-labelledby={`${card.id}-title`}
            className="bg-white/5 backdrop-blur-md border border-white/10 text-white p-6
                       rounded-3xl shadow-2xl flex flex-col
                       hover:shadow-blue-500/20 focus-within:ring-2 focus-within:ring-blue-400/40
                       motion-reduce:transition-none"
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <h2
              id={`${card.id}-title`}
              className={`text-2xl font-semibold mb-4 text-center ${card.color}`}
            >
              {card.title}
            </h2>

            {/* Scrollable content with subtle mask fade */}
            <div
              className="flex-1 overflow-y-auto pr-1 mb-2
                         [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]
                         scrollbar-thin scrollbar-thumb-gray-700"
            >
              <ul className="list-disc list-inside text-sm space-y-1">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {card.description && (
              <p className="text-gray-300 text-xs mt-2">{card.description}</p>
            )}
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Container;
