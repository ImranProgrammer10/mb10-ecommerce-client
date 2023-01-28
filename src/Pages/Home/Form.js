import React from 'react';

const Form = () => {
    return (
        <div className='lg:px-24 px-4 lg:mb-16 mb-8 p-3'>
            <div className="bg-center bg-[url('https://htmldemo.net/lukas/lukas/assets/img/bg/newsletter-bg-2.jpg')]">
                <p className='lg:mb-24'>.</p>
                <div className='text-base-100 grid justify-items-center'>
                    <h1 className='font-bold text-2xl mb-3'>SPECIAL <span className='text-secondary'>OFFER</span> FOR SUBSCRIPTION</h1>
                    <h1 className='font-bold text-4xl'>GET INSTANT DISCOUNT FOR</h1>
                    <h1 className='font-bold text-4xl mb-1'>MEMBERSHIP</h1>
                    <p>Subscribe our newsletter and all latest news of our</p>
                    <p>latest product, promotion and offers</p>
                    <div className='mt-12'>
                        <input style={{padding:'11px'}} className="border-solid lg:w-96 w-44 rounded-full bg-[url('https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg?w=996&t=st=1662122424~exp=1662123024~hmac=c3694fe1adb241e278682221cdf7df59764390de8389152eec1f995a8a35df38')]" type="email" 
                        placeholder='Enter your email here' name="" id="" />
                        <button className="lg:ml-[-116px] btn btn-secondary hover:bg-primary border-none 
                    font-bold rounded-3xl lg:w-36 w-24 mb-24 text-base-100 hover:text-neutral">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;