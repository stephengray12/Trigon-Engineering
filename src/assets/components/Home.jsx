import Container from "./Container";
import { Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-grow bg-black">
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 gap-10">
        {/* Embedded Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.377234577377!2d-92.25245572279087!3d34.77127747289468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d2bc693ded17d5%3A0x991920e79e7d2c63!2s1317%20N%20Hills%20Blvd%20%23401%2C%20North%20Little%20Rock%2C%20AR%2072114!5e0!3m2!1sen!2sus!4v1736118474899!5m2!1sen!2sus"
          className="w-full max-w-xl h-96 rounded-xl shadow-lg"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Welcome Text Box */}
        <div className="w-full max-w-3xl bg-white/5 backdrop-blur-md border border-white/10 text-gray-200 p-8 rounded-2xl shadow-2xl">
          <h1 className="text-4xl font-bold text-center text-blue-400 mb-6">Welcome to Trigon!</h1>

          <p className="mb-4 text-lg leading-relaxed">
            We are a full-service manufacturer’s representative sales company, proudly
            serving customers in Arkansas and the Mid-South since 1980. Trigon
            specializes in the sale of engineered wet process equipment, representing
            a broad range of pumps, valves, and related process systems. We also offer
            specialized wastewater treatment equipment tailored to meet your specific
            requirements.
          </p>

          <p className="mb-6 text-lg">
            Thank you for visiting our website—we look forward to serving you!
          </p>

          <div className="text-center">
            <a
              href="tel:5012585924"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-lg font-semibold text-white shadow-md transition"
            >
              <Phone className="w-5 h-5" />
              Call Us Today
            </a>
          </div>
        </div>
      </div>

      {/* Products/Services Section */}
      <Container />
    </main>
  );
}
