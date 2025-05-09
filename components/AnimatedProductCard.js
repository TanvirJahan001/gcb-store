'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../app/page.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * AnimatedProductCard - A component that displays a product card with animations
 * 
 * @param {Object} props
 * @param {Object} props.product - The product data
 * @param {number} props.index - The index of the product in the list (for staggered animations)
 * @param {string} props.className - Additional CSS classes
 */
const AnimatedProductCard = ({ product, index = 0, className = '' }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  
  useEffect(() => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const image = imageRef.current;
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    // Create the card animation
    ScrollTrigger.create({
      trigger: card,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        // Animate the card
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.6, 
            delay: index * 0.1, // Stagger based on index
            ease: 'power2.out'
          }
        );
        
        // Animate the image with a slight scale effect
        if (image) {
          gsap.fromTo(
            image,
            { scale: 0.9, opacity: 0 },
            { 
              scale: 1, 
              opacity: 1, 
              duration: 0.8, 
              delay: index * 0.1 + 0.2, 
              ease: 'back.out(1.2)'
            }
          );
        }
      }
    });
    
    // Add hover animation
    const hoverAnimation = (e) => {
      gsap.to(card, {
        y: -5,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
        duration: 0.3
      });
      
      if (image) {
        gsap.to(image, {
          scale: 1.05,
          duration: 0.5
        });
      }
    };
    
    const leaveAnimation = (e) => {
      gsap.to(card, {
        y: 0,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        duration: 0.3
      });
      
      if (image) {
        gsap.to(image, {
          scale: 1,
          duration: 0.5
        });
      }
    };
    
    card.addEventListener('mouseenter', hoverAnimation);
    card.addEventListener('mouseleave', leaveAnimation);
    
    return () => {
      // Clean up event listeners and ScrollTrigger
      card.removeEventListener('mouseenter', hoverAnimation);
      card.removeEventListener('mouseleave', leaveAnimation);
      
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === card) {
          trigger.kill();
        }
      });
    };
  }, [index]);
  
  return (
    <Link href={`/product/${product.id}`} className={`${styles.productCard} ${className}`} ref={cardRef}>
      <div className={styles.productImage}>
        <Image 
          ref={imageRef}
          src={product.image} 
          alt={product.name}
          width={300}
          height={300}
          className={styles.image}
        />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productPrice}>৳{product.price.toLocaleString()}</p>
        <div className={styles.productMeta}>
          <span>⭐ {product.rating}</span>
          <span>{product.stock} in stock</span>
        </div>
      </div>
    </Link>
  );
};

export default AnimatedProductCard;