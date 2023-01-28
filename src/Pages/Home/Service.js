import React from 'react';

const Service = () => {
    return (
        <div className='grid lg:grid-cols-3 lg:px-24 mt-16 mb-28'>

            <div className="card w-96 bg-base-100 grid justify-items-center mt-12">
                <div className="lg:flex grid justify-items-center">
                    <div className='lg:mt-5'><figure><img src="https://htmldemo.net/lukas/lukas/assets/img/icons/icon-1.png" alt="Shoes" /></figure></div>
                    <div className='ml-5'>
                        <h1 className='card-title mb-1'>Free Home Delivery</h1>
                        <p className='mb-1'>Provide free home delivery</p> 
                        <p>for all product over $100</p>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 grid justify-items-center mt-12">
                <div className="lg:flex grid justify-items-center">
                    <div className='lg:mt-5'><figure><img src="https://htmldemo.net/lukas/lukas/assets/img/icons/icon-2.png" alt="Shoes" /></figure></div>
                    <div className='ml-5'>
                        <h1 className='card-title mb-1'>Quality Products</h1>
                        <p className='mb-1'>We ensure our product quality </p>
                            <p>all times</p>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 grid justify-items-center mt-12">
                <div className="lg:flex grid justify-items-center">
                    <div className='lg:mt-5'><figure><img src="https://htmldemo.net/lukas/lukas/assets/img/icons/icon-3.png" alt="Shoes" /></figure></div>
                    <div className='ml-5'>
                        <h1 className='card-title mb-1'>Online Support</h1>
                        <p className='mb-1'>To satisfy our customer we </p>
                             <p>try to give support online</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;