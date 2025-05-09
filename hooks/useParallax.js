'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Custom hook for creating parallax scrolling effects
 * 
 * @param {Object} options - Configuration options
 * @param {number} options.speed - Parallax speed (negative values move opposite to scroll direction)
 * @param {string} options.direction - Direction of parallax effect ('vertical' or 'horizontal')
 * @param {boolean} options.reverse - Whether to reverse the direction
 * @param {number} options.start - Start position as percentage (0-100)
 * @param {number} options.end - End position as percentage (0-100)
 * @returns {Object} - Ref to attach to the element
 */
const useParallax = ({
  speed = 0.5,
  direction = 'vertical',
  reverse = false,
  start = 0,
  end = 100
} = {}) => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    if (!elementRef.current) return;
    
    const element = elementRef.current;
    const adjustedSpeed = reverse ? -speed : speed;
    
    // Calculate the distance to move based on speed
    const distance = adjustedSpeed * 100;
    
    // Set up the animation based on direction
    const animationProps = {};
    if (direction === 'vertical') {
      animationProps.y = () => distance;
    } else {
      animationProps.x = () => distance;
    }
    
    // Create the parallax effect
    gsap.to(element, {
      ...animationProps,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: `top ${100 - start}%`,
        end: `bottom ${end}%`,
        scrub: true,
        // For debugging
        // markers: true,
      }
    });
    
    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [speed, direction, reverse, start, end]);
  
  return elementRef;
};

export default useParallax;