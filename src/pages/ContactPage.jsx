import { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, AlertCircle, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/contactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      id: 1,
      icon: Phone,
      title: 'Phone',
      content: '+91 9512097576',
      link: 'tel:+919512097576'
    },
    {
      id: 2,
      icon: Mail,
      title: 'Email',
      content: 'thetravelbharat@gmail.com',
      link: 'mailto:thetravelbharat@gmail.com'
    },
    {
      id: 3,
      icon: MapPin,
      title: 'Location',
      content: 'Delhi, India',
      link: '#'
    }
  ];

  const socialLinks = [
    { id: 1, icon: Facebook, url: '#', label: 'Facebook' },
    { id: 2, icon: Twitter, url: 'https://x.com/TheTravelBharat', label: 'Twitter' },
    { id: 3, icon: Linkedin, url: '#', label: 'LinkedIn' },
    { id: 4, icon: Instagram, url: 'https://www.instagram.com/thetravelbharat', label: 'Instagram' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    // Simulate form submission (replace with EmailJS integration)
    try {
      // TODO: Integrate EmailJS here
      // For now, just simulate the submission
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <Navbar />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Get in Touch</h1>
          <p className="contact-hero-tagline">We'd love to hear from you. Let's talk about your travel dreams!</p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-wrapper">
            {/* Contact Info Cards */}
            <div className="contact-info-section">
              <h2 className="section-heading">Contact Information</h2>
              <p className="section-description">Get in touch with our team through any of these channels</p>

              <div className="contact-info-cards">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={info.id}
                      href={info.link}
                      className="contact-info-card"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="contact-info-icon">
                        <IconComponent size={28} />
                      </div>
                      <h3 className="contact-info-title">{info.title}</h3>
                      <p className="contact-info-content">{info.content}</p>
                    </a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="social-section">
                <h3 className="social-heading">Follow Us</h3>
                <div className="social-links">
                  {socialLinks.map((social) => {
                    const SocialIcon = social.icon;
                    return (
                      <a
                        key={social.id}
                        href={social.url}
                        className="social-link"
                        title={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SocialIcon size={24} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <h2 className="section-heading">Send us a Message</h2>

              {submitted && (
                <div className="success-message">
                  <CheckCircle size={24} />
                  <div>
                    <h4>Message Sent Successfully!</h4>
                    <p>Thank you for reaching out. We'll get back to you soon.</p>
                  </div>
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <span className="form-error">
                      <AlertCircle size={16} />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <span className="form-error">
                      <AlertCircle size={16} />
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Phone Field */}
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Subject Field */}
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`form-input ${errors.subject ? 'form-input-error' : ''}`}
                    placeholder="How can we help?"
                  />
                  {errors.subject && (
                    <span className="form-error">
                      <AlertCircle size={16} />
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-input form-textarea ${errors.message ? 'form-input-error' : ''}`}
                    placeholder="Tell us more about your travel plans..."
                    rows="5"
                  />
                  {errors.message && (
                    <span className="form-error">
                      <AlertCircle size={16} />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`submit-button ${loading ? 'loading' : ''}`}
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="map-section">
        <div className="map-container">
          <h2 className="map-title">Visit Our Office</h2>
          <iframe
            title="Travel Bharat Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5906471124353!2d77.22860947346033!3d28.66482877245405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce262eef34ec1%3A0x4c6b456ce4201e09!2sIndia%20Gate%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1701234567890"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '12px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
