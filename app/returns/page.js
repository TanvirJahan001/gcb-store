'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function ReturnsPage() {
  const containerRef = useRef();

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power2.out'
    });
  }, []);

  return (
    <main className={styles.main}>
      <div
        ref={containerRef}
        className={styles.container}
      >
        <h1 className={styles.title}>Returns Policy</h1>
        
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Return Process</h2>
          <div className={styles.content}>
            <p>Our hassle-free return process:</p>
            <ul className={styles.list}>
              <li>Initiate return within 30 days of purchase</li>
              <li>Items must be unused and in original packaging</li>
              <li>Include original receipt or order number</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Return Shipping</h2>
          <div className={styles.content}>
            <p>Return shipping options:</p>
            <ul className={styles.list}>
              <li>Free returns on defective items</li>
              <li>Prepaid return label for eligible items</li>
              <li>Customer responsible for non-defective returns</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Refund Process</h2>
          <div className={styles.content}>
            <p>After we receive your return:</p>
            <ul className={styles.list}>
              <li>Inspection within 2 business days</li>
              <li>Refund processed to original payment method</li>
              <li>Email confirmation once refund is issued</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Non-Returnable Items</h2>
          <div className={styles.content}>
            <p>The following items cannot be returned:</p>
            <ul className={styles.list}>
              <li>Customized or personalized products</li>
              <li>Digital downloads or software</li>
              <li>Items marked as final sale</li>
              <li>Personal care items</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}