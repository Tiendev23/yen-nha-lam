import React from 'react';

function PromotionCard({ promo }) {
  return (
    <div style={styles.card}>
      <img src={promo.image} alt={promo.title} style={styles.image} />
      <h3 style={styles.title}>{promo.title}</h3>
      <p style={styles.description}>{promo.description}</p>
    </div>
  );
}

const styles = {
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    maxWidth: 320,
    margin: 'auto',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: 180,
    objectFit: 'cover',
  },
  title: {
    fontSize: '1.4rem',
    margin: '15px 20px 10px',
    color: '#28a745',
    fontWeight: '700',
  },
  description: {
    fontSize: '1rem',
    margin: '0 20px 20px',
    color: '#555',
  }
};

export default PromotionCard;
