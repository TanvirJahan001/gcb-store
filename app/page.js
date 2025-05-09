import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { products, categories, reviews } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParallaxHero from '../components/ParallaxHero';
import AnimatedProductCard from '../components/AnimatedProductCard';
import AnimatedElement from '../components/AnimatedElement';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className={styles.page}>
      <Header />
      
      {/* Hero Section with Parallax Effect */}
      <ParallaxHero />

      {/* About Store Section */}
      <AnimatedElement animation="fadeIn" scrollTrigger={true}>
        <section className={`container ${styles.aboutSection}`}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutCard}>
              <span className={styles.aboutIcon}>🏆</span>
              <h3>5+ Years Experience</h3>
              <p>Trusted by thousands of PC enthusiasts</p>
            </div>
            <div className={styles.aboutCard}>
              <span className={styles.aboutIcon}>✨</span>
              <h3>Certified Reseller</h3>
              <p>Official partner of leading brands</p>
            </div>
            <div className={styles.aboutCard}>
              <span className={styles.aboutIcon}>⚡</span>
              <h3>Fast Delivery</h3>
              <p>Quick and secure shipping</p>
            </div>
          </div>
        </section>
      </AnimatedElement>

      {/* Featured Products */}
      <section className={`container ${styles.featuredSection}`}>
        <AnimatedElement animation="fadeIn" scrollTrigger={true}>
          <h2 className={styles.sectionTitle}>Featured Products</h2>
        </AnimatedElement>
        <div className={styles.featuredGrid}>
          {featuredProducts.map((product, index) => (
            <AnimatedProductCard 
              key={product.id} 
              product={product} 
              index={index} 
            />
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <section className={`container ${styles.categoriesSection}`}>
        <AnimatedElement animation="fadeIn" scrollTrigger={true}>
          <h2 className={styles.sectionTitle}>Shop by Category</h2>
        </AnimatedElement>
        <AnimatedElement animation="stagger" staggerSelector="a" staggerDelay={0.1} scrollTrigger={true}>
          <div className={styles.categoriesGrid}>
            {categories.map((category) => (
              <Link href={`/shop?category=${category.name}`} key={category.id} className={styles.categoryCard}>
                <span className={styles.categoryIcon}>{category.icon}</span>
                <h3 className={styles.categoryName}>{category.name}</h3>
              </Link>
            ))}
          </div>
        </AnimatedElement>
      </section>

      {/* Promotional Banner */}
      <AnimatedElement animation="slideIn" from="bottom" distance={100} scrollTrigger={true}>
        <section className={styles.promoBanner}>
          <div className="container">
            <h2 className={styles.promoTitle}>🔥 Save 10% on Ryzen Bundles</h2>
            <p className={styles.promoText}>Limited time offer on selected AMD processors</p>
            <Link href="/shop" className="btn btn-accent">
              View Deals
            </Link>
          </div>
        </section>
      </AnimatedElement>

      {/* Customer Reviews */}
      <section className={`container ${styles.reviewsSection}`}>
        <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
        <div className={styles.reviewsGrid}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <div>
                  <h4 className={styles.reviewName}>{review.name}</h4>
                  <p className={styles.reviewDate}>{review.date}</p>
                </div>
              </div>
              <div className={styles.reviewRating}>
                {'⭐'.repeat(review.rating)}
              </div>
              <p className={styles.reviewText}>{review.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );

}
