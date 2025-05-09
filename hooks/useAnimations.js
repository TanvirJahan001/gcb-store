'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hook for fade-in animation on scroll
 */
export const useFadeInAnimation = (elementRef, delay = 0, duration = 0.8) => {
  useEffect(() => {
    if (!elementRef.current) return;
    
    const element = elementRef.current;
    
    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
    
    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [elementRef, delay, duration]);
};

/**
 * Hook for staggered animation of multiple elements
 */
export const useStaggerAnimation = (containerRef, childSelector, staggerDelay = 0.1, duration = 0.5) => {
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const elements = container.querySelectorAll(childSelector);
    
    gsap.fromTo(
      elements,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration,
        stagger: staggerDelay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [containerRef, childSelector, staggerDelay, duration]);
};

/**
 * Hook for animating accordion items
 */
export const useAccordionAnimation = (isOpen, contentRef, duration = 0.3) => {
  useEffect(() => {
    if (!contentRef.current) return;
    
    const content = contentRef.current;
    
    if (isOpen) {
      // First set height to auto to measure it
      gsap.set(content, { height: 'auto', overflow: 'hidden' });
      // Then animate from 0 to that height
      gsap.from(content, {
        height: 0,
        duration,
        ease: 'power2.out',
        onComplete: () => gsap.set(content, { overflow: '' })
      });
    } else {
      // Animate to height 0
      gsap.to(content, {
        height: 0,
        duration,
        ease: 'power2.in',
        overflow: 'hidden'
      });
    }
  }, [isOpen, contentRef, duration]);
};

/**
 * Hook for parallax scroll effect
 */
export const useParallaxEffect = (elementRef, speed = 0.5) => {
  useEffect(() => {
    if (!elementRef.current) return;
    
    const element = elementRef.current;
    
    gsap.to(element, {
      y: () => speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [elementRef, speed]);
};