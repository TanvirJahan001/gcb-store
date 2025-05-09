'use client';

import Link from 'next/link';
import styles from '../app/page.module.css';
import useHeroParallax from '../hooks/useHeroParallax';

/**
 * ParallaxHero - A component that creates a parallax hero section with animated content
 * 
 * @param {Object} props
 * @param {string} props.title - The hero title
 * @param {string} props.text - The hero text
 * @param {string} props.buttonText - The button text
 * @param {string} props.buttonLink - The button link
 * @param {string} props.backgroundImage - The background image URL (optional)
 * @param {string} props.className - Additional CSS classes
 */
const ParallaxHero = ({
  title = 'Your Ultimate PC Parts Destination',
  text = 'Build your dream PC with premium components from trusted brands',
  buttonText = 'Shop Now',
  buttonLink = '/shop',
  backgroundImage = '/images/bg-1.jpg',
  className = '',
}) => {
  // Use the hero parallax hook
  const { containerRef, contentRef } = useHeroParallax({
    backgroundSpeed: 0.2,
    contentSpeed: 0.4,
    fadeContent: true
  });

  return (
    <section 
      ref={containerRef}
      className={`${styles.hero} ${className}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${backgroundImage}')`,
      }}
    >
      <div ref={contentRef} className={`container ${styles.heroContent}`}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroText}>{text}</p>
        <Link href={buttonLink} className="btn btn-primary">
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default ParallaxHero;