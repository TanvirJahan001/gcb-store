'use client';

import styles from './page.module.css';
import { motion } from 'framer-motion';

export default function ShippingPage() {
  return (
    <main className={styles.main}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.container}
      >
        <h1 className={styles.title}>Shipping Information</h1>
        
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Delivery Options</h2>
          <div className={styles.content}>
            <p>We offer various shipping methods to meet your needs:</p>
            <ul className={styles.list}>
              <li>Standard Shipping (5-7 business days)</li>
              <li>Express Shipping (2-3 business days)</li>
              <li>Next Day Delivery (order before 2 PM)</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Shipping Costs</h2>
          <div className={styles.content}>
            <p>Shipping costs are calculated based on:</p>
            <ul className={styles.list}>
              <li>Order weight and dimensions</li>
              <li>Delivery destination</li>
              <li>Selected shipping method</li>
            </ul>
            <p>Free shipping on orders over $100 (standard shipping only)</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>International Shipping</h2>
          <div className={styles.content}>
            <p>We ship to most countries worldwide. International shipping times may vary depending on:</p>
            <ul className={styles.list}>
              <li>Customs processing</li>
              <li>Local delivery services</li>
              <li>Destination country regulations</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Order Tracking</h2>
          <div className={styles.content}>
            <p>Track your order easily:</p>
            <ul className={styles.list}>
              <li>Tracking number provided via email</li>
              <li>Real-time updates on delivery status</li>
              <li>Estimated delivery date updates</li>
            </ul>
          </div>
        </section>
      </motion.div>
    </main>
  );
}