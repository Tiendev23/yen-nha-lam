import React from 'react';
import HeroBannerSlider from '../components/HeroBannerSlider';
import Intro from '../components/Intro';
import ProductCategory from '../components/ProductCategory';
import PromotionSection from '../components/PromotionSection';
import ProductList from '../components/ProductList';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactInfo from '../components/ContactInfo';



function Home() {
    return (
        <div>
            <HeroBannerSlider />
            <Intro />
            <PromotionSection />
            <ProductCategory />
            <ProductList />
            <TestimonialsSection />
            <ContactInfo />
        </div>
    );
}

export default Home;
