import React from 'react';
import products from '../data/products.json';
import ProductCard from './ProductCard';

function ProductList() {
  return (
    <section style={styles.container}>
      <h2 style={styles.title}>Sản phẩm nổi bật</h2>
      <div style={styles.grid}>
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: {
    maxWidth: 1200,
    margin: '60px auto',
    padding: '0 20px',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.8rem',
    color: '#2f6f32',
    marginBottom: 50,
    fontWeight: '700',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
    gap: 40,
  },
};

export default ProductList;
