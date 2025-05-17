import React from 'react';

function TestimonialCard({ testimonial }) {
  return (
    <div style={styles.card}>
      <img src={testimonial.avatar} alt={testimonial.name} style={styles.avatar} />
      <p style={styles.feedback}>"{testimonial.feedback}"</p>
      <h4 style={styles.name}>{testimonial.name}</h4>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#e6f4ea',
    borderRadius: 12,
    padding: 20,
    maxWidth: 320,
    margin: 'auto',
    boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: 15,
    border: '3px solid #28a745',
  },
  feedback: {
    fontSize: '1rem',
    color: '#444',
    marginBottom: 15,
  },
  name: {
    fontWeight: '700',
    color: '#2f6f32',
  },
};

export default TestimonialCard;
