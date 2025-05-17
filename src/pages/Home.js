import React from 'react';
import HeroBanner from '../components/HeroBanner';

import Intro from '../components/Intro';
import PromotionSection from '../components/PromotionSection';
import ProductList from '../components/ProductList';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactInfo from '../components/ContactInfo';



function Home() {
    return (
        <div>
            <HeroBanner />
            <Intro />
            <PromotionSection />
            <ProductList />
            <TestimonialsSection />
            <ContactInfo />
        </div>
    );
}

export default Home;
