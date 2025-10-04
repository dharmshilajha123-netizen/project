import { Cake, Heart, Briefcase, Home, Sparkles } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Cake,
      title: 'Birthday Parties',
      description: 'Fun, creative, and customized celebrations that bring joy to every age group.',
      color: 'from-pink-400 to-rose-400'
    },
    {
      icon: Heart,
      title: 'Weddings & Engagements',
      description: 'From décor to coordination, we handle it all to make your special day perfect.',
      color: 'from-red-400 to-pink-400'
    },
    {
      icon: Briefcase,
      title: 'Corporate Events',
      description: 'Product launches, seminars, team parties, and professional gatherings.',
      color: 'from-blue-400 to-indigo-400'
    },
    {
      icon: Home,
      title: 'Private Gatherings',
      description: 'House parties, anniversaries, and intimate celebrations with your loved ones.',
      color: 'from-green-400 to-teal-400'
    },
    {
      icon: Sparkles,
      title: 'Custom Events',
      description: 'Have a unique vision? We bring any event concept to life with creativity.',
      color: 'from-amber-400 to-orange-400'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">What We Do Best</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${service.color} text-white mb-4`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="bg-amber-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Customize Your Event
          </button>
        </div>
      </div>
    </section>
  );
}
