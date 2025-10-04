import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    budgetRange: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailBody = `
New Event Inquiry from EventCraft Website

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event Type: ${formData.eventType}
Event Date: ${formData.eventDate}
Location: ${formData.location}
Budget Range: ${formData.budgetRange}

Message:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:eventcraft10@gmail.com?subject=Event Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        location: '',
        budgetRange: '',
        message: ''
      });
      setIsSubmitting(false);

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Let's Plan Your Next Event!</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">Tell us about your event idea and we'll make it happen.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Ready to create an unforgettable event? Fill out the form and our team will get back to you within 24 hours. We're excited to bring your vision to life!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">eventcraft10@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">+91 9013690498</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Office</h4>
                  <p className="text-gray-600">New Delhi, Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
              <h4 className="font-bold text-gray-900 mb-3">Business Hours</h4>
              <div className="space-y-2 text-gray-700">
                <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                <p>Saturday: 10:00 AM - 6:00 PM</p>
                <p>Sunday: By Appointment</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-amber-50 p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                    placeholder="+91 9013690498"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-semibold text-gray-900 mb-2">
                  Event Type *
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                >
                  <option value="">Select event type</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="wedding">Wedding</option>
                  <option value="engagement">Engagement</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="concert">Concert/Festival</option>
                  <option value="private">Private Gathering</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-900 mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-gray-900 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                    placeholder="City or venue"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="budgetRange" className="block text-sm font-semibold text-gray-900 mb-2">
                  Budget Range
                </label>
                <select
                  id="budgetRange"
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                >
                  <option value="">Select budget range</option>
                  <option value="under-1lakh">Under ₹1 Lakh</option>
                  <option value="1-3lakh">₹1 - 3 Lakhs</option>
                  <option value="3-5lakh">₹3 - 5 Lakhs</option>
                  <option value="5-10lakh">₹5 - 10 Lakhs</option>
                  <option value="10lakh-plus">₹10 Lakhs+</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Tell us about your event
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
                  placeholder="Share your vision, special requirements, or any questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Request
                  </>
                )}
              </button>
            </form>

            {showSuccess && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 animate-fade-in">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <p className="text-green-800 font-medium">
                  Thank you! We've received your request and will contact you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
