const Container = () => {
  return (
    <div className="flex flex-wrap items-center justify-center min-h-screen">
      <div className="bg-white p-4 m-2 rounded-lg shadow-lg w-80 h-80">
        <h1 className="text-blue-300 font-bold underline">Products</h1>
        <ul>
          <li>Pumps</li>
          <li>Valves</li>
          <li>Actuation</li>
          <li>Filter Presses</li>
          <li>Mixers</li>
        </ul>
      </div>

      <div className="bg-white p-4 m-2 rounded-lg shadow-lg w-80 h-80">
        <h1 className="text-blue-300 font-bold underline">Services</h1>
        <ul>
          <li>Sales</li>
          <li>Service</li>
          <li>Refurbishing of pumps and valves</li>
          <li>Light fabrication</li>
          <li>Elite customer service</li>
        </ul>
        <p className="text-blue-300">Our biggest service will always be to provide fast and reliable services to customers with a face you can count on.</p>
      </div>

      <div className="bg-white p-4 m-2 rounded-lg shadow-lg w-80 h-80">
        <h1 className="text-blue-300 font-bold underline">Mission</h1>
        <p>
          Since 1980, Trigon has been dedicated to providing high-quality engineered products to the industrial market.
          Specializing in the sale, repair, and maintenance of pumps, and valves. We take pride in delivering reliable,
          innovative, and efficient products and services that keep industries running smoothly. Our mission is to build long-lasting
          partnerships by offering unparalleled technical expertise.
          
        </p>
      </div>

      <div className="bg-white p-4 m-2 rounded-lg shadow-lg w-80 h-80">
        <h1 className="text-blue-300 font-bold underline">Manufacturers</h1>
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
  );
}

export default Container;