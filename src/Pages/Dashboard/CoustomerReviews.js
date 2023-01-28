import React, { useEffect, useState } from 'react';

const CoustomerReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://mb10-ecommerce-server-imranprogrammer10.vercel.app/reviews')
            .then(res => res.json()).then(data => setReviews(data))
    }, [])
    return (
        <div className='px-12 grid justify-items-center'>
            <h1 className='font-bold text-secondary text-4xl mb-8 mt-8'>Coustomers Reviews </h1>
            <div className='grid lg:grid-cols-4 lg:gap-5 gap-2'>
                
                {
                    reviews.map(review => <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h4 className='font-bold text-2xl'>{review.name}</h4>
                            <p>{review.comment}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CoustomerReviews;