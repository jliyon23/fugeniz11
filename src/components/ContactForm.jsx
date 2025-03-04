import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div {...fadeInUp}>
        <h2 className="title-font text-4xl text-gold mb-4 text-center gold-underline">
          Contact US
        </h2>
        <p className="body-font text-gray-300 text-center mb-12">
          Your message will be received with the highest level of discretion
        </p>

        <div className="bg-black/50 border border-gold p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gold mb-2 subtitle-font">
                  Agent Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/30 border border-gold text-white p-3 rounded focus:border-gold focus:outline-none transition-all duration-300"
                  placeholder="Enter your codename"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gold mb-2 subtitle-font">
                  Secure Channel
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/30 border border-gold text-white p-3 rounded focus:border-gold focus:outline-none transition-all duration-300"
                  placeholder="Enter your secure email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-gold mb-2 subtitle-font">
                Mission Type
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-black/30 border border-gold text-white p-3 rounded focus:border-gold focus:outline-none transition-all duration-300"
              >
                <option value="">Select mission type</option>
                <option value="event_registration">Event Registration</option>
                <option value="sponsorship">Sponsorship Inquiry</option>
                <option value="partnership">Partnership Proposal</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-gold mb-2 subtitle-font">
                Mission Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full bg-black/30 border border-gold text-white p-3 rounded focus:border-gold focus:outline-none transition-all duration-300"
                placeholder="Enter your message..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-red-900 text-white px-8 py-3  hover:bg-red-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Transmitting...' : 'Send Message'}
              </button>
            </div>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-green-400 mt-4"
              >
                Message transmitted successfully. We'll be in touch soon.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-red-400 mt-4"
              >
                Transmission failed. Please try again.
              </motion.div>
            )}
          </form>
        </div>

        
      </motion.div>
    </div>
  );
};

export default ContactForm; 