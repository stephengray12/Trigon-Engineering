import { useState } from 'react';
import { Warehouse, Info, PenSquare } from 'lucide-react';
import ContactFormModal from './contactformModal.jsx';
import { Link } from 'react-router-dom';

// helper to build URLs to files in /public
const pub = (p) => `${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className="sticky top-3 z-50 py-4 bg-black/80 backdrop-blur-lg rounded-lg shadow-lg">
      <div className="w-full px-4 mx-auto relative text-sm flex justify-between items-center">
        {/* Brand: logo + name */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0" aria-label="Trigon Engineering Home">
          <img
            src={pub('/favicon-128x128.png') }
            alt="Trigon Engineering triangle logo"
            className="w-10 h-10"
            width="40"
            height="40"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <span className="text-2xl md:text-4xl font-bold text-blue-500 leading-none">
            Trigon Engineering
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
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

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 right-0 w-3/4 h-full z-50 flex flex-col items-start p-8 bg-black/95 backdrop-blur-lg">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-6 text-white text-3xl focus:outline-none bg-black rounded-full p-1 hover:bg-gray-800 transition-colors"
            aria-label="Close menu"
          >
            &times;
          </button>

          {/* Mobile brand row */}
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 mb-6">
            <img
              src={pub('/favicon-128x128.png') }
              alt="Trigon Engineering triangle logo"
              className="w-8 h-8"
              width="32"
              height="32"
              decoding="async"
            />
            <span className="text-xl font-bold text-blue-500">Trigon Engineering</span>
          </Link>

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-white text-lg hover:bg-blue-900 flex items-center gap-2 w-full px-4 py-2 rounded"
          >
            <Warehouse className="w-5 h-5" /> Home
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-white text-lg hover:bg-blue-900 flex items-center gap-2 w-full px-4 py-2 rounded"
          >
            <Info className="w-5 h-5" /> About
          </Link>

          <button
            onClick={() => {
              setShowModal(true);
              setIsOpen(false);
            }}
            className="text-white text-lg hover:bg-blue-900 flex items-center gap-2 w-full px-4 py-2 rounded"
          >
            <PenSquare className="w-5 h-5" /> Contact Form
          </button>
        </div>
      )}

      <ContactFormModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </nav>
  );
};

export default Navbar;
