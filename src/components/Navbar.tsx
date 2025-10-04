import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-amber-600">EventCraft</h1>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-amber-600 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-amber-600 transition-colors">Services</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-amber-600 transition-colors">Gallery</button>
            <button onClick={() => scrollToSection('contact')} className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors shadow-md">Request a Quote</button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-600">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-600">About</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-600">Services</button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full text-left py-2 text-gray-700 hover:text-amber-600">Gallery</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors">Request a Quote</button>
          </div>
        </div>
      )}
    </nav>
  );
}
