import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import bannerData from '../data/heroBanner.json';

import './HeroBannerSlider.css';

function HeroBannerSlider() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            className="hero-banner-swiper"
        >
            {bannerData.map(({ id, image, title, subtitle, ctaText, ctaLink }) => (
                <SwiperSlide key={id}>
                    <div
                        className="banner-slide"
                        style={{ backgroundImage: `url(${image})` }}
                        role="banner"
                        aria-label={title}
                    >
                        <div className="overlay" />
                        <div className="content">
                            <h1 className="title">{title}</h1>
                            <p className="subtitle">{subtitle}</p>
                            <a href={ctaLink} className="cta-button" role="button">{ctaText}</a>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default HeroBannerSlider;
