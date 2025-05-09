'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * AnimatedElement - A reusable component for adding GSAP animations to any element
 * 
 * @param {Object} props
 * @param {string} props.animation - Type of animation ('fadeIn', 'slideUp', 'slideIn', 'scale', 'stagger')
 * @param {number} props.delay - Delay before animation starts (in seconds)
 * @param {number} props.duration - Duration of animation (in seconds)
 * @param {string} props.from - Direction for slide animations ('left', 'right', 'top', 'bottom')
 * @param {number} props.distance - Distance to animate from (in pixels)
 * @param {string} props.staggerSelector - CSS selector for staggered children (for 'stagger' animation)
 * @param {number} props.staggerDelay - Delay between staggered animations (in seconds)
 * @param {boolean} props.scrollTrigger - Whether to trigger animation on scroll
 * @param {string} props.start - ScrollTrigger start position (e.g., 'top 80%')
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Child elements
 */
const AnimatedElement = ({
  animation = 'fadeIn',
  delay = 0,
  duration = 0.8,
  from = 'bottom',
  distance = 50,
  staggerSelector = '> *',
  staggerDelay = 0.1,
  scrollTrigger = true,
  start = 'top 80%',
  className = '',
  children,
  ...props
}) => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    if (!elementRef.current) return;
    
    const element = elementRef.current;
    let animation_config = {};
    
    // Set initial state and animation based on type
    switch (animation) {
      case 'fadeIn':
        animation_config = {
          from: { opacity: 0, y: distance },
          to: { opacity: 1, y: 0 }
        };
        break;
        
      case 'slideUp':
        animation_config = {
          from: { opacity: 0, y: distance },
          to: { opacity: 1, y: 0 }
        };
        break;
        
      case 'slideIn':
        const xValue = from === 'left' ? -distance : from === 'right' ? distance : 0;
        const yValue = from === 'top' ? -distance : from === 'bottom' ? distance : 0;
        
        animation_config = {
          from: { opacity: 0, x: xValue, y: yValue },
          to: { opacity: 1, x: 0, y: 0 }
        };
        break;
        
      case 'scale':
        animation_config = {
          from: { opacity: 0, scale: 0.8 },
          to: { opacity: 1, scale: 1 }
        };
        break;
        
      case 'stagger':
        const elements = element.querySelectorAll(staggerSelector);
        
        if (elements.length > 0) {
          animation_config = {
            elements,
            from: { opacity: 0, y: distance / 2 },
            to: { 
              opacity: 1, 
              y: 0,
              stagger: staggerDelay,
              ease: 'power2.out'
            }
          };
        }
        break;
        
      default:
        animation_config = {
          from: { opacity: 0 },
          to: { opacity: 1 }
        };
    }
    
    // Create animation
    let tl = gsap.timeline({ paused: true });
    
    if (animation === 'stagger' && animation_config.elements) {
      tl.fromTo(
        animation_config.elements,
        animation_config.from,
        {
          ...animation_config.to,
          delay,
          duration
        }
      );
    } else {
      tl.fromTo(
        element,
        animation_config.from,
        {
          ...animation_config.to,
          delay,
          duration,
          ease: 'power2.out'
        }
      );
    }
    
    // Apply scroll trigger if enabled
    if (scrollTrigger) {
      ScrollTrigger.create({
        trigger: element,
        start,
        onEnter: () => tl.play(),
        once: true
      });
    } else {
      tl.play();
    }
    
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [animation, delay, duration, from, distance, staggerSelector, staggerDelay, scrollTrigger, start]);
  
  return (
    <div ref={elementRef} className={className} {...props}>
      {children}
    </div>
  );
};

export default AnimatedElement;