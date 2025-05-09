'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../app/product/[slug]/page.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * AnimatedProductDetail - A component that displays product details with animations
 * 
 * @param {Object} props
 * @param {Object} props.product - The product data
 */
const AnimatedProductDetail = ({ product }) => {
  const imageRef = useRef(null);
  const infoRef = useRef(null);
  const descriptionRef = useRef(null);
  const specsRef = useRef(null);
  
  useEffect(() => {
    if (!imageRef.current || !infoRef.current) return;
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    // Create a timeline for the initial animation
    const tl = gsap.timeline();
    
    // Animate the product image
    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9, x: -30 },
      { opacity: 1, scale: 1, x: 0, duration: 0.8, ease: 'power2.out' }
    );
    
    // Animate the product info
    tl.fromTo(
      infoRef.current.querySelector('h1'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.4'
    );
    
    tl.fromTo(
      infoRef.current.querySelector(`.${styles.productMeta}`),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.4'
    );
    
    tl.fromTo(
      infoRef.current.querySelector(`.${styles.productPrice}`),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.4'
    );
    
    tl.fromTo(
      infoRef.current.querySelector(`.${styles.actions}`),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.4'
    );
    
    // Add scroll animations for description and specifications
    if (descriptionRef.current) {
      ScrollTrigger.create({
        trigger: descriptionRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.fromTo(
            descriptionRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
          );
        }
      });
    }
    
    if (specsRef.current) {
      ScrollTrigger.create({
        trigger: specsRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          // Animate the specs table rows with stagger
          gsap.fromTo(
            specsRef.current.querySelectorAll('tr'),
            { opacity: 0, y: 20 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.5, 
              stagger: 0.1, 
              ease: 'power2.out' 
            }
          );
        }
      });
    }
    
    // Add hover effect to the image
    const image = imageRef.current;
    
    const hoverAnimation = () => {
      gsap.to(image, {
        scale: 1.05,
        duration: 0.5,
        ease: 'power2.out'
      });
    };
    
    const leaveAnimation = () => {
      gsap.to(image, {
        scale: 1,
        duration: 0.5,
        ease: 'power2.out'
      });
    };
    
    image.addEventListener('mouseenter', hoverAnimation);
    image.addEventListener('mouseleave', leaveAnimation);
    
    return () => {
      // Clean up event listeners and ScrollTrigger
      image.removeEventListener('mouseenter', hoverAnimation);
      image.removeEventListener('mouseleave', leaveAnimation);
      
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [product]);
  
  return (
    <div className={styles.productLayout}>
      {/* Image Gallery */}
      <div className={styles.productImage}>
        <Image
          ref={imageRef}
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className={styles.image}
        />
      </div>

      {/* Product Info */}
      <div className={styles.productInfo} ref={infoRef}>
        <h1 className={styles.productName}>{product.name}</h1>
        
        <div className={styles.productMeta}>
          <span className={styles.rating}>⭐ {product.rating} Rating</span>
          <span className={styles.stock}>
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </span>
        </div>

        <div className={styles.productPrice}>
          ৳{product.price.toLocaleString()}
        </div>

        <div className={styles.actions}>
          <button className="btn btn-primary">Add to Cart</button>
        </div>

        <div className={styles.description} ref={descriptionRef}>
          <h2>Description</h2>
          <p>{product.description}</p>
        </div>

        <div className={styles.specifications} ref={specsRef}>
          <h2>Specifications</h2>
          <table className={styles.specsTable}>
            <tbody>
              {Object.entries(product.specs).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AnimatedProductDetail;