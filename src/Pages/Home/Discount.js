import React from 'react';
import { Link } from 'react-router-dom';

const Discount = () => {
    return (
        <div className='grid justify-items-center bg-center bg-[url("https://htmldemo.net/lukas/lukas/assets/img/bg/deal-bg-2.jpg")] '>
            <div className="card lg:card-side rounded-none mt-24">
                <figure><img src="https://i.ibb.co/qmT4RQc/pexels-photomix-company-230544-1.jpg" alt="Album"/></figure>
                <div className="card-body grid justify-items-center">
                    <h1 className='mb-0 font-bold text-5xl'>FLASH DEALS</h1>
                    <h1 className='mb-0 font-bold text-4xl'>HURRY UP AND GET 25% DISCOUNT</h1>
                    <button className="btn btn-secondary hover:bg-primary border-none 
                    font-bold rounded-3xl p-2 w-36"><Link to='/shop'>Add to cart</Link></button>
                    {/* count down */}
                    

                </div>
            </div>
        </div>
    );
};

export default Discount;