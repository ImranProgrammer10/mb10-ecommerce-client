import React from 'react';
import Footer from '../Shared/Footer';
import AllProducts from './AllProducts';
import Banner from './Banner/Banner';
import Car from './Car';
import Carousel from './Carousel';
import Contract from './Contract';
import Design from './Design';
import Discount from './Discount';
import Form from './Form';
import HomeProduct from './HomeProduct';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Design></Design>
            <HomeProduct></HomeProduct>
            <Discount></Discount>
            <Service></Service>
            {/* <Contract></Contract> */}
            <AllProducts></AllProducts>
            {/* <Car></Car> */}
            {/* <Form></Form> */}
            {/* <Carousel></Carousel> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;