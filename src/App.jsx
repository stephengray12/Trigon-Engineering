import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import Container from "./assets/components/Container";
import './index.css';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main Content that grows to push footer down */}
      <main className="flex-grow">
        {/* Quote Section */}
        <div className="p-6">
          <p className="text-xl md:text-2xl font-bold text-white text-center">
            &quot;Trigon Engineering, Arkansas Premier distributor of industrial equipment and sales&quot;
          </p>
        </div>

        {/* Iframe Section - Small and Left-Aligned */}
        <div className="px-6 pb-6 flex justify-start">
          <div className="w-full max-w-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.377234577377!2d-92.25245572279087!3d34.77127747289468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d2bc693ded17d5%3A0x991920e79e7d2c63!2s1317%20N%20Hills%20Blvd%20%23401%2C%20North%20Little%20Rock%2C%20AR%2072114!5e0!3m2!1sen!2sus!4v1736118474899!5m2!1sen!2sus"
              className="w-full h-64"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <Container />
      </main>

      <Footer />
    </div>
  );
};

export default App;
