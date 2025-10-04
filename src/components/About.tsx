import { Target, Eye, CheckCircle2, Heart, DollarSign, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="mb-20 max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            We are a passionate team of event professionals who bring your ideas to life. Our goal is simple — to make every celebration seamless, stylish, and unforgettable. From concept to execution, we coordinate venues, décor, entertainment, catering, logistics, and more — so you can enjoy your event stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Target className="w-12 h-12 text-amber-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To create memorable and stress-free events for every client. We believe that every celebration deserves meticulous attention to detail and personalized care.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Eye className="w-12 h-12 text-amber-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the most trusted and creative event management medium. We strive to set new standards in the industry through innovation and excellence.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Creativity',
                description: 'Fresh, innovative ideas that make your event unique and memorable'
              },
              {
                icon: CheckCircle2,
                title: 'Transparency',
                description: 'Clear communication and honest pricing with no hidden costs'
              },
              {
                icon: DollarSign,
                title: 'Affordability',
                description: 'Premium quality services that fit within your budget'
              },
              {
                icon: Shield,
                title: 'Reliability',
                description: 'Dependable execution and on-time delivery, every single time'
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600 mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
