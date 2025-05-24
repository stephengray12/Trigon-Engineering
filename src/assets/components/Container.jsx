const Container = () => {
  return (
    <div className="flex justify-center min-h-[50vh] md:min-h-[60vh] items-end pb-12">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="bg-white p-4 rounded-lg shadow-lg w-80 h-80 hover:bg-blue-200">
          <h1 className="text-white font-bold underline bg-gray-600 text-center">Products</h1>
          <ul>
            <li>Pumps</li>
            <li>Valves</li>
            <li>Actuation</li>
            <li>Filter Presses</li>
            <li>Mixers</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg w-80 h-80 hover:bg-blue-200">
          <h1 className="text-white font-bold underline bg-gray-600 text-center">Services</h1>
          <ul>
            <li>Sales</li>
            <li>Service</li>
            <li>Refurbishing of pumps and valves</li>
            <li>Light fabrication</li>
            <li>Elite customer service</li>
          </ul>
          <p className="text-blue-400">
            Our biggest service will always be to provide fast and reliable services to customers with a face you can count on.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg w-80 h-80 hover:bg-blue-200">
          <h1 className="text-white font-bold underline bg-gray-600 text-center">Manufacturers</h1>
          <ul>
            <li>AEROVENT</li>
            <li>BRAY VALVE</li>
            <li>EVOQUA WATER TECHNOLOGIES</li>
            <li>FINISH-THOMPSON</li>
            <li>FLOWSERVE VALVE</li>
            <li>LIGHTNIN MIXERS</li>
            <li>LMI</li>
            <li>MICROPUMP</li>
            <li>ROPER</li>
            <li>ROTO-JET</li>
            <li>SCOT PUMP</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Container;
