'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import { products } from '../../data/products';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


export default function Shop() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: { min: 0, max: 100000 },
    inStock: false,
    searchQuery: '',
    sortBy: ''
  });

  // Handle URL search parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const searchQuery = searchParams.get('search');
    if (searchQuery) {
      setFilters(prev => ({ ...prev, searchQuery }));
    }
  }, []);

  useEffect(() => {
    let result = [...products];

    // Apply category filters
    if (filters.categories.length > 0) {
      result = result.filter(product => filters.categories.includes(product.category));
    }



    // Apply price range filter
    result = result.filter(product => 
      product.price >= filters.priceRange.min && 
      product.price <= filters.priceRange.max
    );

    // Apply in stock filter
    if (filters.inStock) {
      result = result.filter(product => product.stock > 0);
    }

    // Apply search filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  }, [filters]);

  const handleCategoryChange = (category) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };



  const handlePriceChange = (min, max) => {
    setFilters(prev => ({
      ...prev,
      priceRange: { min, max }
    }));
  };

  const handleStockChange = () => {
    setFilters(prev => ({
      ...prev,
      inStock: !prev.inStock
    }));
  };

  const handleSearch = (query) => {
    setFilters(prev => ({
      ...prev,
      searchQuery: query
    }));
  };

  const handleSort = (value) => {
    setFilters(prev => ({
      ...prev,
      sortBy: value
    }));
  };

  return (
    <div className={styles.page}>
      <Header />

      <div className="container">
        <div className={styles.shopLayout}>
          {/* Sidebar Filters */}
          <aside className={styles.sidebar}>
            <div className={styles.filterSection}>
              <h3>Categories</h3>
              <div className={styles.filterGroup}>
                <label className={styles.filterLabel}>
                  <input 
                    type="checkbox"
                    checked={filters.categories.includes('CPU')}
                    onChange={() => handleCategoryChange('CPU')}
                  /> CPU
                </label>
                
                <label className={styles.filterLabel}>
                  <input 
                    type="checkbox"
                    checked={filters.categories.includes('RAM')}
                    onChange={() => handleCategoryChange('RAM')}
                  /> RAM
                </label>
                <label className={styles.filterLabel}>
                  <input 
                    type="checkbox"
                    checked={filters.categories.includes('Storage')}
                    onChange={() => handleCategoryChange('Storage')}
                  /> Storage
                </label>
                <label className={styles.filterLabel}>
                  <input 
                    type="checkbox"
                    checked={filters.categories.includes('Motherboard')}
                    onChange={() => handleCategoryChange('Motherboard')}
                  /> Motherboard
                </label>
              </div>
            </div>



            <div className={styles.filterSection}>
              <h3>Price Range</h3>
              <div className={styles.priceRange}>
                <input 
                  type="range" 
                  min="0" 
                  max="100000" 
                  step="1000"
                  className={styles.rangeSlider}
                  value={filters.priceRange.max}
                  onChange={(e) => handlePriceChange(filters.priceRange.min, parseInt(e.target.value))}
                />
                <div className={styles.priceInputs}>
                  <input 
                    type="number" 
                    placeholder="Min" 
                    value={filters.priceRange.min}
                    onChange={(e) => handlePriceChange(parseInt(e.target.value), filters.priceRange.max)}
                  />
                  <span>-</span>
                  <input 
                    type="number" 
                    placeholder="Max" 
                    value={filters.priceRange.max}
                    onChange={(e) => handlePriceChange(filters.priceRange.min, parseInt(e.target.value))}
                  />
                </div>
              </div>
            </div>

            <div className={styles.filterSection}>
              <h3>Availability</h3>
              <label className={styles.filterLabel}>
                <input 
                  type="checkbox"
                  checked={filters.inStock}
                  onChange={handleStockChange}
                /> In Stock Only
              </label>
            </div>
          </aside>

          {/* Main Content */}
          <main className={styles.mainContent}>
            {/* Top Filters */}
            <div className={styles.topFilters}>
              <div className={styles.searchBar}>
                <input 
                  type="text" 
                  placeholder="Search products..."
                  className={styles.searchInput}
                  value={filters.searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>

              <div className={styles.sortDropdown}>
                <select 
                  className={styles.select}
                  value={filters.sortBy}
                  onChange={(e) => handleSort(e.target.value)}
                >
                  <option value="">Sort by</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Best Rating</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className={styles.productsGrid}>
              {filteredProducts.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <div className={styles.productImage}>
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className={styles.productInfo}>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <p className={styles.productPrice}>৳{product.price.toLocaleString()}</p>
                    <div className={styles.productMeta}>
                      <span className={styles.rating}>⭐ {product.rating}</span>
                      <span className={styles.stock}>{product.stock} in stock</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className={styles.loadMore}>
              <button className="btn btn-accent">Load More</button>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}