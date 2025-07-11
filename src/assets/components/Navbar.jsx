import { useState } from 'react';
import { Warehouse, Info, PenSquare } from 'lucide-react';
import ContactFormModal from './contactformModal.jsx';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className="sticky  top-3 z-50 py-4 bg-black bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg">
      <div className="w-full px-4 mx-auto relative text-sm flex justify-between items-center">
        <div className="flex items-center flex-shrink-0">
          <h1 className="text-3xl md:text-5xl font-bold text-stroke-white text-blue-500">
            Trigon Engineering
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white text-lg hover:text-blue-400 font-bold flex items-center gap-1">
            <Warehouse className="w-5 h-5" /> Home |
          </Link>

          <Link to="/about" className="text-white text-lg hover:text-blue-400 font-bold flex items-center gap-1">
            <Info className="w-5 h-5" /> About
          </Link>

          <button
            onClick={() => setShowModal(true)}
            className="text-white text-xl hover:text-green-100 bg-blue-500 rounded-full px-4 py-1 border-2 border-black hover:shadow-lg hover:shadow-black flex items-center gap-2"
          >
            <PenSquare className="w-5 h-5" /> Contact Form
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
        <div className="md:hidden fixed top-0 right-0 w-3/4 h-full z-50 flex flex-col items-start p-8">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-6 text-white text-3xl focus:outline-none bg-black rounded-full p-1 hover:bg-gray-800 transition-colors"
            aria-label="Close menu"
          >
            &times;
          </button>

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-white text-lg hover:bg-blue-900 flex items-center gap-2 w-full px-4 py-2 rounded bg-black"
          >
            <Warehouse className="w-5 h-5" /> Home
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-white text-lg hover:bg-blue-900 flex items-center gap-2 w-full px-4 py-2 rounded bg-black"
          >
            <Info className="w-5 h-5" /> About
          </Link>

          <button
            onClick={() => {
              setShowModal(true);
              setIsOpen(false);
            }}
            className="text-white text-lg hover:bg-blue-900 flex items-center gap-2 w-full px-4 py-2 rounded bg-black"
          >
            <PenSquare className="w-5 h-5" /> Contact Form
          </button>
        </div>
      )}

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </nav>
  );
};

export default Navbar;
