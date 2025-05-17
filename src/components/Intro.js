import React from 'react';
import introData from '../data/introData.json';

function Intro() {
  const { title, content } = introData;

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>{title}</h2>
      <p style={styles.text}>{content}</p>
    </section>
  );
}

const styles = {
  section: {
    maxWidth: 900,
    margin: '50px auto',
    padding: '0 20px',
    textAlign: 'center',
    backgroundColor: '#e6f4ea',
    borderRadius: 12,
    boxShadow: '0 6px 12px rgba(40, 167, 69, 0.2)',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: 20,
    color: '#2f6f32', // xanh đậm hơn
    fontWeight: '700',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  text: {
    fontSize: '1.25rem',
    lineHeight: 1.8,
    color: '#3c763d',
    fontWeight: '500',
  },
};

export default Intro;
