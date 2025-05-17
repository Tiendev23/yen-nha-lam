import React from 'react';
import { motion } from 'framer-motion';
import contactData from '../data/contactInfo.json';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 0.6
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

function ContactInfo() {
  const { phone, email, address, ctaText, ctaButtonText, ctaButtonLink } = contactData;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      style={styles.section}
    >
      <motion.div style={styles.infoGrid}>
        <InfoCard
          icon={<FaPhoneAlt size={26} color="#28a745" />}
          title="Điện thoại"
          content={<a href={`tel:${phone.replace(/\s/g, '')}`} style={styles.link}>{phone}</a>}
          variants={cardVariants}
        />
        <InfoCard
          icon={<FaEnvelope size={26} color="#28a745" />}
          title="Email"
          content={<a href={`mailto:${email}`} style={styles.link}>{email}</a>}
          variants={cardVariants}
        />
        <InfoCard
          icon={<FaMapMarkerAlt size={26} color="#28a745" />}
          title="Địa chỉ"
          content={<span>{address}</span>}
          variants={cardVariants}
        />
      </motion.div>

      <motion.div
        variants={cardVariants}
        style={styles.ctaContainer}
      >
        <p style={styles.ctaText}>{ctaText}</p>
        <motion.a
          href={ctaButtonLink}
          style={styles.ctaButton}
          whileHover={{ scale: 1.1, boxShadow: '0 0 15px 3px #a3d9a5' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {ctaButtonText}
        </motion.a>
      </motion.div>
    </motion.section>
  );
}

function InfoCard({ icon, title, content, variants }) {
  return (
    <motion.div variants={variants} style={styles.card}>
      <div style={styles.iconWrapper}>{icon}</div>
      <h4 style={styles.cardTitle}>{title}</h4>
      <div style={styles.cardContent}>{content}</div>
    </motion.div>
  );
}

const styles = {
  section: {
    backgroundColor: '#f0fbf5',
    padding: '80px 20px',
    maxWidth: 1100,
    margin: '80px auto',
    borderRadius: 20,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxShadow: '0 10px 30px rgba(40, 167, 69, 0.1)',
  },
  infoGrid: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: 30,
    marginBottom: 60,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 18,
    padding: 30,
    flex: '1 1 300px',
    boxShadow: '0 10px 20px rgba(40, 167, 69, 0.12)',
    textAlign: 'center',
    cursor: 'default',
    userSelect: 'none',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  iconWrapper: {
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: '1.4rem',
    fontWeight: '700',
    marginBottom: 12,
    color: '#2f6f32',
  },
  cardContent: {
    fontSize: '1.1rem',
    color: '#444',
    wordBreak: 'break-word',
  },
  link: {
    color: '#28a745',
    textDecoration: 'none',
    fontWeight: '600',
  },
  ctaContainer: {
    textAlign: 'center',
  },
  ctaText: {
    fontSize: '1.8rem',
    fontWeight: '700',
    marginBottom: 30,
    color: '#2f6f32',
  },
  ctaButton: {
    display: 'inline-block',
    background: 'linear-gradient(135deg, #43a047, #66bb6a)',
    color: 'white',
    padding: '18px 60px',
    borderRadius: 50,
    fontWeight: '700',
    fontSize: '1.3rem',
    textDecoration: 'none',
    boxShadow: '0 6px 20px rgba(102, 187, 106, 0.6)',
    userSelect: 'none',
    cursor: 'pointer',
  },
};

export default ContactInfo;
