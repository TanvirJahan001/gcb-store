'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { products } from '../../../data/products';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import AnimatedProductDetail from '../../../components/AnimatedProductDetail';
import AnimatedElement from '../../../components/AnimatedElement';

export default function ProductDetail() {
  const params = useParams();
  const productId = parseInt(params.slug);
  const product = products.find(p => p.id === productId);

  // Get related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== productId)
    .slice(0, 3);

  if (!product) {
    return (
      <div className={styles.page}>
        <Header />
        <div className="container">
          <div className={styles.notFound}>
            <h1>Product Not Found</h1>
            <Link href="/shop" className="btn btn-primary">Back to Shop</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Header />

      <div className="container">
        {/* Navigation */}
        <AnimatedElement animation="fadeIn" duration={0.5}>
          <div className={styles.navigation}>
            <Link href="/shop">← Back to Shop</Link>
          </div>
        </AnimatedElement>

        {/* Product Details with Animation */}
        <AnimatedProductDetail product={product} />


        {/* Related Products */}
        <AnimatedElement animation="fadeIn" scrollTrigger={true} delay={0.2}>
          <div className={styles.relatedProducts}>
            <h2>Related Products</h2>
            <AnimatedElement animation="stagger" staggerSelector={`.${styles.relatedCard}`} staggerDelay={0.15} scrollTrigger={true}>
              <div className={styles.relatedGrid}>
                {relatedProducts.map((relatedProduct) => (
                  <Link 
                    href={`/product/${relatedProduct.id}`} 
                    key={relatedProduct.id} 
                    className={styles.relatedCard}
                  >
                    <div className={styles.relatedImage}>
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        width={200}
                        height={200}
                        className={styles.image}
                      />
                    </div>
                    <div className={styles.relatedInfo}>
                      <h3>{relatedProduct.name}</h3>
                      <p>৳{relatedProduct.price.toLocaleString()}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </AnimatedElement>
          </div>
        </AnimatedElement>
      </div>

      <Footer />
    </div>
  );
}