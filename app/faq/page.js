'use client';

import { useState, useRef, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import styles from './page.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { gsap } from 'gsap';
import AnimatedElement from '../../components/AnimatedElement';
import useParallax from '../../hooks/useParallax';

const faqs = [
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept various payment methods including credit/debit cards, bank transfers, and mobile banking services. All transactions are secure and encrypted.',
  },
  {
    question: 'What is your delivery policy?',
    answer:
      'We offer nationwide delivery. Standard delivery takes 2-3 business days within Dhaka and 3-5 business days for other areas. Express delivery options are available for urgent orders.',
  },
  {
    question: 'Do you offer warranty on products?',
    answer:
      'Yes, all our products come with manufacturer warranty. The warranty period varies by product and brand. Extended warranty options are available for select products.',
  },
  {
    question: 'What is your return policy?',
    answer:
      'We offer a 7-day return policy for most products. Items must be unused and in their original packaging. Some restrictions apply to certain products for hygiene and safety reasons.',
  },
  {
    question: 'Do you offer technical support?',
    answer:
      'Yes, we provide technical support for all products purchased from our store. Our expert team is available via phone, email, or in-store consultation.',
  },
  {
    question: 'Can I track my order?',
    answer:
      "Yes, once your order is shipped, you will receive a tracking number via email. You can use this to track your order status through our website or the courier's tracking system.",
  },
  {
    question: 'Do you offer price matching?',
    answer:
      "Yes, we offer price matching against major authorized retailers. The product must be identical and in stock at the competitor's store.",
  },
  {
    question: 'How can I check product compatibility?',
    answer:
      'Our website provides detailed specifications for all products. You can also contact our technical support team for compatibility verification before making a purchase.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const accordionContentRefs = useRef([]);
  const titleParallaxRef = useParallax({ speed: -0.2 });
  const contactParallaxRef = useParallax({ speed: 0.3, start: 30 });

  useEffect(() => {
    accordionContentRefs.current = accordionContentRefs.current.slice(0, faqs.length);
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (activeIndex !== null && accordionContentRefs.current[activeIndex]) {
      const content = accordionContentRefs.current[activeIndex];
      gsap.fromTo(
        content.querySelector('p'),
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, delay: 0.2 }
      );
    }
  }, [activeIndex]);

  return (
    <div className={styles.page}>
      <Header />

      <Parallax
        strength={300}
        className={styles.parallaxContainer}
      >
        <div className="container">
          <div className={styles.faqContent}>
            <div ref={titleParallaxRef}>
              <AnimatedElement animation="fadeIn" delay={0.2} className={styles.title}>
                <h1>Frequently Asked Questions</h1>
              </AnimatedElement>
            </div>

            <AnimatedElement
              animation="stagger"
              staggerDelay={0.1}
              staggerSelector="*"
              className={styles.faqList}
            >
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
                >
                  <button
                    className={styles.faqQuestion}
                    onClick={() => toggleAccordion(index)}
                  >
                    {faq.question}
                    <span className={styles.icon}>{activeIndex === index ? '−' : '+'}</span>
                  </button>
                  <div
                    className={styles.faqAnswer}
                    ref={(el) => (accordionContentRefs.current[index] = el)}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </AnimatedElement>

            <div ref={contactParallaxRef}>
              <AnimatedElement
                animation="slideUp"
                delay={0.3}
                className={styles.contactSection}
              >
                <h2>Still have questions?</h2>
                <p>
                  Our support team is here to help you with any other questions you might
                  have.
                </p>
                <a href="/contact" className="btn btn-primary">
                  Contact Us
                </a>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </Parallax>

      <Footer />
    </div>
  );
}
