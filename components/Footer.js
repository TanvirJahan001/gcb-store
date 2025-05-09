import Link from 'next/link';
import styles from '../styles/components/Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerGrid}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>GCB</h3>
            <p className={styles.footerDescription}>
              Your Ultimate PC Parts Destination. Quality computer components at competitive prices.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Quick Links</h4>
            <nav className={styles.footerNav}>
              <Link href="/about" className={styles.footerLink}>About Us</Link>
              <Link href="/shop" className={styles.footerLink}>Shop</Link>
              <Link href="/contact" className={styles.footerLink}>Contact</Link>
              <Link href="/faq" className={styles.footerLink}>FAQ</Link>
            </nav>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Customer Service</h4>
            <nav className={styles.footerNav}>
              <Link href="/shipping" className={styles.footerLink}>Shipping Info</Link>
              <Link href="/returns" className={styles.footerLink}>Returns</Link>
              <Link href="/warranty" className={styles.footerLink}>Warranty</Link>
              <Link href="/terms" className={styles.footerLink}>Terms & Conditions</Link>
            </nav>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Connect With Us</h4>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>📘 Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>🐦 Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>📸 Instagram</a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} Godagari Computer Bazar. All rights reserved.
          </p>
          <p className={styles.copyright}>
            Made By A.S.M Tanvir Jahan
          </p>
        </div>
       
      </div>
    </footer>
  );
}