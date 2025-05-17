import React from 'react';
import testimonials from '../data/testimonials.json';
import TestimonialCard from './TestimonialCard';

function TestimonialsSection() {
    return (
        <section style={styles.section}>
            <h2 style={styles.heading}>Khách hàng nói về chúng tôi</h2>
            <div style={styles.grid}>
                {testimonials.map(testimonial => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
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
        gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
        gap: 30,
    }
};

export default TestimonialsSection;
