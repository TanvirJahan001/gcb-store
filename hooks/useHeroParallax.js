'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Custom hook for creating a parallax hero effect with text animation
 * 
 * @param {Object} options - Configuration options
 * @param {number} options.backgroundSpeed - Speed of the background parallax effect
 * @param {number} options.contentSpeed - Speed of the content parallax effect
 * @param {boolean} options.fadeContent - Whether to fade the content on scroll
 * @returns {Object} - Refs to attach to the elements {containerRef, contentRef}
 */
const useHeroParallax = ({
  backgroundSpeed = 0.2,
  contentSpeed = 0.4,
  fadeContent = true
} = {}) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const content = contentRef.current;
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    // Create a timeline for initial animation
    const tl = gsap.timeline();
    
    if (content) {
      // Animate the hero content in
      tl.fromTo(
        content.querySelector('h1'),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      ).fromTo(
        content.querySelector('p'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      ).fromTo(
        content.querySelector('a'),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.6'
      );
    }
    
    // Create the parallax effect for the background
    gsap.to(container, {
      backgroundPositionY: `${backgroundSpeed * 100}%`,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
    
    // Create the parallax effect for the content
    if (content && contentSpeed !== 0) {
      gsap.to(content, {
        y: contentSpeed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
      
      // Fade out content while scrolling if enabled
      if (fadeContent) {
        gsap.to(content, {
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: '30% top',
            scrub: true
          }
        });
      }
    }
    
    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === container || trigger.vars.trigger === content) {
          trigger.kill();
        }
      });
    };
  }, [backgroundSpeed, contentSpeed, fadeContent]);
  
  return { containerRef, contentRef };
};

export default useHeroParallax;