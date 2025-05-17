import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      type: 'spring',
      stiffness: 50,
    },
  }),
  hover: {
    scale: 1.05,
    boxShadow: '0 15px 30px rgba(40, 167, 69, 0.4)',
    transition: { duration: 0.3 },
  },
};

function ProductCard({ product, index }) {
  return (
    <motion.div
      className="product-card"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      style={styles.card}
    >
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3 style={styles.name}>{product.name}</h3>
      <p style={styles.description}>{product.description}</p>
      <p style={styles.price}>{product.price.toLocaleString()} VND</p>
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: '#1e7e34' }}
        style={styles.button}
        onClick={() => alert(`Bạn đã chọn mua: ${product.name}`)}
      >
        <FaShoppingCart style={{ marginRight: 8 }} />
        Mua ngay
      </motion.button>
    </motion.div>
  );
}

const styles = {
  card: {
    borderRadius: 12,
    padding: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: 180,
    objectFit: 'cover',
    borderRadius: 12,
    marginBottom: 15,
  },
  name: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#28a745',
    marginBottom: 8,
  },
  description: {
    fontSize: '1rem',
    color: '#555',
    flexGrow: 1,
  },
  price: {
    fontWeight: '700',
    fontSize: '1.1rem',
    margin: '15px 0',
    color: '#333',
  },
  button: {
    backgroundColor: '#28a745',
    border: 'none',
    color: 'white',
    padding: '12px 25px',
    borderRadius: 30,
    fontWeight: '600',
    fontSize: '1rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default ProductCard;
