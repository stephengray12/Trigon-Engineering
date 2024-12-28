import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
       <nav className="sticky top-0 z-50 py-3 backdrop-blur border-b border-neutral-700/80 bg-gray-500">
        <div className="w-full px-4 mx-auto relative text-sm flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
                <h1 className="text-2xl font-bold text-green-900">Trigon Engineering</h1>
            </div>
            <div className="hidden md:flex space-x-4">
                <a href="#home" className="text-white hover:text-green-500">Home</a>
                <a href="#about" className="text-white hover:text-green-500">About</a>
                <a href="#projects" className="text-white hover:text-green-500">Projects</a>
                <a href="#contact" className="text-white hover:text-green-500">Contact</a>
            </div>
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </div>
        {isOpen && (
            <div className="md:hidden">
                <a href="#home" className="block text-white hover:text-green-500 py-2">Home</a>
                <a href="#about" className="block text-white hover:text-green-500 py-2">About</a>
                <a href="#projects" className="block text-white hover:text-green-500 py-2">Projects</a>
                <a href="#contact" className="block text-white hover:text-green-500 py-2">Contact</a>
            </div>
        )}
       </nav>
    );
};

export default Navbar;