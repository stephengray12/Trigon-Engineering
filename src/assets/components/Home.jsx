import Container from "./Container";
import { Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-grow">
      {/* Quote Section */}
      <div className="p-6">
        <p className="text-xl md:text-2xl font-bold text-white text-center">
          &quot;Trigon Engineering, Arkansas&apos; Premier distributor of industrial equipment and sales&quot;
        </p>
      </div>

      {/* Responsive Iframe + Welcome Text Section */}
      <div className="flex flex-col md:flex-row px-6 gap-6 pb-6 items-start">
        {/* Iframe */}
        <div className="w-full md:w-1/5">
          <iframe
            src="https://www.google.com/maps/embed?...your-full-link-here..."
            className="w-full h-64 rounded-md shadow-md"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Welcome Text */}
        <div className="w-full md:w-1/2 text-gray-300 bg-gray-200 bg-opacity-20 p-8 rounded-md shadow-md">
          <div className="w-full bg-gradient-to-r from-black via-gray-600 to-black text-center py-4 rounded-md mb-4">
            <h1 className="text-3xl font-bold text-white">Welcome to Trigon!</h1>
          </div>
          <p className="mb-4 text-lg">
            We are a full-service manufacturer’s representative sales company...
          </p>
          {/* rest of your paragraphs here */}
          <p className="text-lg font-semibold mb-6">
            Thank you for visiting our website—we look forward to serving you!
          </p>
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
  );
}
