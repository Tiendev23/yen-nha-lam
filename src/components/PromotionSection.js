import React from 'react';
import promotions from '../data/promotions.json';
import PromotionCard from './PromotionCard';

function PromotionSection() {
    return (
        <section style={styles.section}>
            <h2 style={styles.heading}>Ưu đãi đặc biệt</h2>
            <div style={styles.grid}>
                {promotions.map(promo => (
                    <PromotionCard key={promo.id} promo={promo} />
                ))}
            </div>
        </section>
    );
}

const styles = {
    section: {
        maxWidth: 1200,
        margin: '60px auto',
        padding: '0 20px',
    },
    heading: {
        fontSize: '2.6rem',
        textAlign: 'center',
        color: '#2f6f32',
        marginBottom: 40,
        fontWeight: '700',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
        gap: 30,
    }
};

export default PromotionSection;
