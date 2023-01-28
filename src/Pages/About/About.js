import React from 'react';
import { Link } from 'react-router-dom';
import Car from '../Home/Car';
import Carousel from '../Home/Carousel';
import Form from '../Home/Form';
import Footer from '../Shared/Footer';

const About = () => {
    return (
        <div>
            <div className="lg:h-64 h-48 bg-center text-base-100 
            grid justify-items-center items-center
            bg-[url('https://htmldemo.net/lukas/lukas/assets/img/bg/page-header-bg.jpg')]">
                <div><h1 className='font-bold text-4xl'>About</h1>
                    <h1 className='font-bold text-xl'>
                        <Link to='/home'><span>Home</span></Link>
                        <span className='text-secondary'> About</span></h1></div>
            </div>

            <div className='mt-20'>
                {/* first card */}
                <div className="card lg:card-side bg-base-100 rounded-none mb-20 lg:px-24 px-2">
                    <div className="card-body">
                        <h2 className="font-bold text-4xl">About Lukas</h2>
                        <p>This is a list of automotive parts mostly for vehicles using internal combustion
                            engines which are manufactured components of automobiles.
                            This category is for components and parts that make up automobile (car)
                            bodies including accessories.
                            On motorbikes their main function is to shield the rider from wind,
                            though not as completely as in a car,
                            whereas on sports and racing motorcycles the main function is reducing
                            drag when the rider</p>

                    </div>
                    <figure><img src="https://htmldemo.net/lukas/lukas/assets/img/banner/a-1.jpg" alt="Album" /></figure>

                </div>

                {/* second card  */}
                <div className="card lg:card-side bg-base-100 rounded-none lg:px-24 px-2">
                    <figure><img className='' src="https://htmldemo.net/lukas/lukas/assets/img/banner/a-2.jpg" alt="Album" style={{width:'500px'}} /></figure>
                    <div className="card-body grid items-center">
                        <h2 className="font-bold text-4xl">Our mission</h2>
                        <p>This is a list of automotive parts mostly for vehicles using internal combustion engine
                            which are manufactured components of automobiles.
                            This category is for components and parts that make up automobile
                            (car) bodies including accessories.
                            On motorbikes their main function is to shield the rider from wind, though
                            not as completely as in a car, whereas on sports
                            and racing motorcycles the main function is reducing drag when the rider</p>
                      
                    </div>
                </div>

                <div className='mb-20'>
                    <Car></Car>
                </div>

                <div className='mb-20'>
                    <Form></Form>
                </div>

                <div>
                    <Carousel></Carousel>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;
