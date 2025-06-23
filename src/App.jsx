import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import Container from "./assets/components/Container";
import { Phone } from 'lucide-react';
import './index.css';
import About from "./assets/components/About";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main Content that grows to push footer down */}
      <main className="flex-grow">
        {/* Quote Section */}
        <div className="p-6">
          <p className="text-xl md:text-2xl font-bold text-white text-center">
            &quot;Trigon Engineering, Arkansas&apos; Premier distributor of industrial equipment and sales&quot;
          </p>
        </div>

        {/* Responsive Iframe + Welcome Text Section */}
        <div className="flex flex-col md:flex-row px-6 gap-6 pb-6 items-start">
          {/* Iframe (Left on desktop) */}
          <div className="w-full md:w-1/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.377234577377!2d-92.25245572279087!3d34.77127747289468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d2bc693ded17d5%3A0x991920e79e7d2c63!2s1317%20N%20Hills%20Blvd%20%23401%2C%20North%20Little%20Rock%2C%20AR%2072114!5e0!3m2!1sen!2sus!4v1736118474899!5m2!1sen!2sus"
              className="w-full h-64 rounded-md shadow-md"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Welcome Text (Right on desktop) */}
          <div className="w-full md:w-1/2 text-gray-300 bg-gray-200 bg-opacity-20 p-8 rounded-md shadow-md">
            <div className="w-full bg-gradient-to-r from-black via-gray-600 to-black text-center py-4 rounded-md mb-4">
              <h1 className="text-3xl font-bold text-white">Welcome to Trigon!</h1>
            </div>

            <p className="mb-4 text-lg">
              We are a full-service manufacturer’s representative sales company, proudly
              serving customers in Arkansas and the Mid-South since 1980. Trigon
              specializes in the sale of engineered wet process equipment, representing
              a broad range of pumps, valves, and related process systems. We also offer
              specialized wastewater treatment equipment tailored to meet your specific
              requirements.
            </p>

            <p className="mb-4 text-lg">
              In addition to process industries, Trigon has extensive experience in the
              HVAC market. We have provided industrial products to colleges, hospitals,
              and other commercial facilities, working closely with physical plant
              directors and consulting engineers across the region.
            </p>

            <p className="mb-4 text-lg">
              Our service department is highly skilled, responsive, and easy to work
              with. We repair and refurbish most pump models and fabricate both new and
              retrofit skids to match our customers’ exact specifications.
            </p>

            <p className="text-lg font-semibold mb-6">
              Thank you for visiting our website—we look forward to serving you!
            </p>

            {/* Call Us Today Button */}
            <div className="text-center">
              <a
                href="tel:5012585924"
                className="inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-lg font-semibold shadow-md transition"
              >
                <Phone className="w-5 h-5" />
                Call Us Today
              </a>
            </div>
          </div>
        </div>

        <Container />
      </main>

      <Footer />
    </div>
  );
};

export default App;
