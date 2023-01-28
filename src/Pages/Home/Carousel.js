import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Carousel = () => {
    // responsive
    const responsive = {
        0: {
            items: 1,
        },
        587: {
            items: 4
        },
        1024: {
            items: 6
        }
    };

    //   The carousel items 

    const items = [
        <div className='item'>
            <img src="https://htmldemo.net/lukas/lukas/assets/img/brand-logo/brand-3.png" alt="" />
        </div>,
        <div className='item'>
            <img src="https://htmldemo.net/lukas/lukas/assets/img/brand-logo/brand-4.png" alt="" />
        </div>,
        <div className='item'>
            <img src="https://htmldemo.net/lukas/lukas/assets/img/brand-logo/brand-5.png" alt="" />
        </div>,
        <div className='item'>
            <img src="https://htmldemo.net/lukas/lukas/assets/img/brand-logo/brand-3.png" alt="" />
        </div>,
        <div className='item'>
            <img src="https://htmldemo.net/lukas/lukas/assets/img/brand-logo/brand-3.png" alt="" />
        </div>,
        <div className='item'>
            <img src="https://htmldemo.net/lukas/lukas/assets/img/brand-logo/brand-3.png" alt="" />
        </div>,
        <div className='item'>
            <img src="https://htmldemo.net/lukas/lukas/assets/img/brand-logo/brand-1.png" alt="" />
        </div>,
        <div className='item'>
            <img src="https://htmldemo.net/lukas/lukas/assets/img/brand-logo/brand-4.png" alt="" />
        </div>,
        <div className='item'>
            <img src="https://htmldemo.net/lukas/lukas/assets/img/brand-logo/brand-5.png" alt="" />
        </div>,
    ];

    return (
        <div className='lg:px-24'>
            <AliceCarousel mouseTracking items={items}
                responsive={responsive}
            />
        </div>
    );
};

export default Carousel;