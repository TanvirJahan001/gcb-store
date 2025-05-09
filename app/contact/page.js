'use client';

import { useState } from 'react';
import styles from './page.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Here you would typically send the data to your backend
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className={styles.page}>
      <Header />

      <div className="container">
        <div className={styles.contactContent}>
          <h1 className={styles.title}>Contact Us</h1>
          
          <div className={styles.contactLayout}>
            <div className={styles.contactInfo}>
              <div className={styles.infoCard}>
                <h3>Visit Our Store</h3>
                <p>123 Tech Street</p>
                <p>Dhaka, Bangladesh</p>
              </div>

              <div className={styles.infoCard}>
                <h3>Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                <p>Saturday: 10:00 AM - 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>

              <div className={styles.infoCard}>
                <h3>Get in Touch</h3>
                <p>Phone: +880 1234-567890</p>
                <p>Email: support@gcbstore.com</p>
              </div>
            </div>

            <div className={styles.contactForm}>
              {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                  Thank you for your message! We&apos;ll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? styles.errorInput : ''}
                  />
                  {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? styles.errorInput : ''}
                  />
                  {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? styles.errorInput : ''}
                  />
                  {errors.subject && <span className={styles.errorText}>{errors.subject}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={errors.message ? styles.errorInput : ''}
                  ></textarea>
                  {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}