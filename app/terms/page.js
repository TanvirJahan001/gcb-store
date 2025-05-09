'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import styles from './page.module.css';


export default function TermsPage() {
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
        <h1 className={styles.title}>Terms & Conditions</h1>
        
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Agreement to Terms</h2>
          <div className={styles.content}>
            <p>By accessing and using this website, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Use License</h2>
          <div className={styles.content}>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on GCB Store&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className={styles.list}>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software contained on GCB Store website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Disclaimer</h2>
          <div className={styles.content}>
            <p>The materials on GCB Store&apos;s website are provided on an &apos;as is&apos; basis. GCB Store makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of:</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Limitations</h2>
          <div className={styles.content}>
            <p>In no event shall GCB Store or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on GCB Store&apos;s website.</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Revisions and Errata</h2>
          <div className={styles.content}>
            <p>The materials appearing on GCB Store&apos;s website could include technical, typographical, or photographic errors. GCB Store does not warrant that any of the materials on its website are accurate, complete or current. GCB Store may make changes to the materials contained on its website at any time without notice.</p>
          </div>
        </section>
      </div>
    </main>
  );
}