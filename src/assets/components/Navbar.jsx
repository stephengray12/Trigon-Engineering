import { useState } from 'react';
import ContactFormModal from './contactformModal.jsx'; // adjust the path if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // for mobile menu
  const [showModal, setShowModal] = useState(false); // for contact form modal

  return (
    <nav className="sticky top-3 z-50 py-3 backdrop-blur border-b border-neutral-700/80 bg-gray-700 bg-opacity-40 m-4">
      <div className="w-full px-4 mx-auto relative text-sm flex justify-between items-center">
        <div className="flex items-center flex-shrink-0">
          <h1 className="text-3xl md:text-5xl font-bold text-stroke-blue text-white">
            Trigon Engineering
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="text-white text-lg hover:text-blue-400 font-bold">Home |</a>
          <a href="#about" className="text-white text-lg hover:text-blue-400 font-bold">About |</a>
          <button
            onClick={() => setShowModal(true)}
            className="text-white text-xl hover:text-green-100 bg-blue-500 rounded-full px-4 py-1 border-2 border-black hover:shadow-lg hover:shadow-black"
          >
            Contact us
          </button>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 right-0 w-3/4 h-full bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-6 p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
            aria-label="Close menu"
          >
            &times;
          </button>

          <a href="#home" className="text-white text-lg hover:text-blue-400">Home</a>
          <a href="#about" className="text-white text-lg hover:text-blue-400">About</a>
          <button
            onClick={() => {
              setShowModal(true);
              setIsOpen(false);
            }}
            className="text-white text-lg hover:text-blue-400"
          >
            Contact
          </button>
        </div>
      )}

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </nav>
  );
};

export default Navbar;
