import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-amber-500 mb-4">EventCraft</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Creating unforgettable experiences through expert event management and seamless coordination.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-amber-500 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-amber-500 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-amber-500 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="hover:text-amber-500 transition-colors">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-amber-500 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Birthday Parties</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Weddings</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Corporate Events</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Private Gatherings</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Custom Events</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">eventcraft10@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">+91 9013690498</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">New Delhi, Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} EventCraft. All rights reserved. Crafted with passion for unforgettable events.
          </p>
        </div>
      </div>
    </footer>
  );
}
