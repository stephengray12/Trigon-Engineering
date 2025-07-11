const Container = () => {
  return (
    <div className="flex justify-center  items-end pb-16 bg-black">
      <div className="flex flex-wrap items-center justify-center gap-8 px-6 max-w-7xl w-full">
        {[
          {
            title: "Products",
            color: "text-blue-400",
            items: ["Pumps", "Valves", "Actuation", "Filter Presses", "Mixers"],
          },
          {
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
        ].map((card, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md border border-white/10 text-white p-6 rounded-3xl shadow-2xl w-80 h-[28rem] flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/20"
          >
            <h2 className={`text-2xl font-semibold mb-4 text-center ${card.color}`}>
              {card.title}
            </h2>

            {/* Scrollable content area */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 pr-1 mb-2">
              <ul className="list-disc list-inside text-sm space-y-1">
                {card.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Optional description */}
            {card.description && (
              <p className="text-gray-300 text-xs mt-2">
                {card.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;
