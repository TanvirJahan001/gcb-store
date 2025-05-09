'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

/**
 * AnimationProvider - A component that sets up global animations and scroll effects
 * 
 * This component should be placed in the root layout to enable animations across the entire site.
 * It initializes GSAP plugins and sets up global animation defaults.
 */
const AnimationProvider = ({ children }) => {
  useEffect(() => {
    // Set default ease for all animations
    gsap.defaults({
      ease: 'power2.out',
    });

    // Add smooth scrolling to all anchor links
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          gsap.to(window, {
            duration: 1,
            scrollTo: {
              y: targetElement,
              offsetY: 50
            },
            ease: 'power3.inOut'
          });
        }
      }
    };

    // Apply smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    // Add scroll-triggered animations to common elements
    const setupScrollAnimations = () => {
      // Animate headings
      gsap.utils.toArray('h1, h2, h3').forEach(heading => {
        if (!ScrollTrigger.matchMedia('(prefers-reduced-motion: reduce)').isMatched) {
          ScrollTrigger.create({
            trigger: heading,
            start: 'top 85%',
            once: true,
            onEnter: () => {
              gsap.fromTo(heading, 
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 }
              );
            }
          });
        }
      });

      // Animate images with parallax effect
      gsap.utils.toArray('img:not([data-no-parallax])').forEach(img => {
        if (!ScrollTrigger.matchMedia('(prefers-reduced-motion: reduce)').isMatched) {
          gsap.to(img, {
            yPercent: -15,
            ease: 'none',
            scrollTrigger: {
              trigger: img,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.5
            }
          });
        }
      });

      // Add reveal animation to sections
      gsap.utils.toArray('section, .section').forEach(section => {
        if (!ScrollTrigger.matchMedia('(prefers-reduced-motion: reduce)').isMatched) {
          ScrollTrigger.create({
            trigger: section,
            start: 'top 75%',
            once: true,
            onEnter: () => {
              gsap.fromTo(section, 
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
              );
            }
          });
        }
      });
    };

    // Run setup after a short delay to ensure DOM is fully loaded
    const timer = setTimeout(() => {
      setupScrollAnimations();
    }, 500);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return children;
};

export default AnimationProvider;