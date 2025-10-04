import { Calendar } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <Calendar className="w-16 h-16 mx-auto mb-6 text-amber-600" />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Turning Your Events Into <span className="text-amber-600">Unforgettable Experiences</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
            From weddings to corporate meets — we handle everything, stress-free.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-amber-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Plan Your Event
          </button>
        </div>

      </div>
    </section>
  );
}
