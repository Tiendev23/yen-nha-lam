import React from 'react';
import { motion } from 'framer-motion';
import bannerData from '../data/heroBanner.json';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: {
      staggerChildren: 0.3,
      duration: 0.8,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

function HeroBanner() {
  const { image, title, subtitle, ctaText, ctaLink } = bannerData;

  return (
    <>
      <style>{`
        .hero-banner {
          position: relative;
          height: 450px;
          background-image: url('${image}');
          background-size: cover;
          background-position: center;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
          user-select: none;
          padding: 0 20px;
        }

        .hero-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.5);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          text-shadow: 2px 2px 10px rgba(0,0,0,0.8);
        }

        .hero-subtitle {
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 2rem;
          text-shadow: 1px 1px 6px rgba(0,0,0,0.7);
          color: #d4f1c5;
        }

        .hero-cta {
          background-color: #28a745;
          color: white;
          padding: 14px 50px;
          border-radius: 50px;
          font-size: 1.3rem;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(40, 167, 69, 0.6);
          transition: background-color 0.3s ease, transform 0.3s ease;
          display: inline-block;
          cursor: pointer;
          user-select: none;
        }

        .hero-cta:hover {
          background-color: #1e7e34;
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(30, 126, 52, 0.8);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
          }
          .hero-subtitle {
            font-size: 1.1rem;
          }
        }
      `}</style>

      <section className="hero-banner" role="banner" aria-label="Banner giới thiệu sản phẩm Yến Nhà Làm">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="hero-title" variants={itemVariants}>{title}</motion.h1>
          <motion.p className="hero-subtitle" variants={itemVariants}>{subtitle}</motion.p>
          <motion.a href={ctaLink} className="hero-cta" variants={itemVariants} role="button">
            {ctaText}
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}

export default HeroBanner;
