'use client';

import styles from './page.module.css';
import { motion } from 'framer-motion';

export default function WarrantyPage() {
  return (
    <main className={styles.main}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.container}
      >
        <h1 className={styles.title}>Warranty Information</h1>
        
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Warranty Coverage</h2>
          <div className={styles.content}>
            <p>Our products are covered by the following warranties:</p>
            <ul className={styles.list}>
              <li>1-year limited warranty on all electronic products</li>
              <li>2-year warranty on mechanical components</li>
              <li>Lifetime warranty on structural defects</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What's Covered</h2>
          <div className={styles.content}>
            <p>Our warranty covers:</p>
            <ul className={styles.list}>
              <li>Manufacturing defects</li>
              <li>Material defects</li>
              <li>Functional failures under normal use</li>
              <li>Parts and labor for repairs</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Warranty Exclusions</h2>
          <div className={styles.content}>
            <p>The following are not covered under warranty:</p>
            <ul className={styles.list}>
              <li>Damage from misuse or accidents</li>
              <li>Normal wear and tear</li>
              <li>Unauthorized modifications</li>
              <li>Cosmetic damage</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Warranty Claims</h2>
          <div className={styles.content}>
            <p>To make a warranty claim:</p>
            <ul className={styles.list}>
              <li>Contact our customer service</li>
              <li>Provide proof of purchase</li>
              <li>Describe the issue in detail</li>
              <li>Follow return instructions if required</li>
            </ul>
          </div>
        </section>
      </motion.div>
    </main>
  );
}