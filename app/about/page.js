import styles from './page.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div className={styles.page}>
      <Header />

      <div className="container">
        <div className={styles.aboutContent}>
          <h1 className={styles.title}>About GCB Store</h1>
          
          <section className={styles.section}>
            <h2>Our Story</h2>
            <p>
              Founded in 2023, GCB Store has grown from a small computer parts retailer to one of the most trusted names in the industry. Our journey began with a simple mission: to provide high-quality computer components at competitive prices while delivering exceptional customer service.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Our Mission</h2>
            <p>
              At GCB Store, we&apos;re committed to making high-performance computing accessible to everyone. We believe that every customer deserves access to the best technology, expert advice, and reliable support throughout their computing journey.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Why Choose Us?</h2>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>Quality Assurance</h3>
                <p>All our products are sourced directly from manufacturers and undergo rigorous quality checks.</p>
              </div>
              <div className={styles.feature}>
                <h3>Expert Support</h3>
                <p>Our team of tech enthusiasts is always ready to help you make informed decisions.</p>
              </div>
              <div className={styles.feature}>
                <h3>Fast Shipping</h3>
                <p>We ensure quick and secure delivery of your orders across the country.</p>
              </div>
              <div className={styles.feature}>
                <h3>Best Prices</h3>
                <p>We offer competitive prices and regular deals to give you the best value for your money.</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Our Values</h2>
            <div className={styles.values}>
              <div className={styles.value}>
                <h3>Integrity</h3>
                <p>We believe in honest business practices and transparent communication.</p>
              </div>
              <div className={styles.value}>
                <h3>Innovation</h3>
                <p>We stay ahead of technological trends to bring you the latest and best products.</p>
              </div>
              <div className={styles.value}>
                <h3>Customer First</h3>
                <p>Your satisfaction is our top priority, and we go the extra mile to ensure it.</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}