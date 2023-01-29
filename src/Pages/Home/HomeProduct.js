import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeProduct = () => {
    const navigate = useNavigate();
    // get for product 
    const [hProducts, setHproducts] = useState([]);
    useEffect(() => {
        fetch('https://mb10-ecommerce-server-imranprogrammer10.vercel.app/homeProduct')
            .then(res => res.json())
            .then(data => setHproducts(data))
    }, [])

    // go to inventory id route 
    const handleGo = (id) => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div className='mt-16 mb-24'>
            {/* first part */}
            <div className='grid justify-items-center'>
                <h1 className='font-bold text-2xl mb-4 p-2 px-4'>BEST SELLER</h1>
                <p>All best seller product are now available for you and your can <br />
                    buy this product from here any time any where so sop now</p>
            </div>

            {/* second part */}
            <div className='mb-12 grid lg:grid-cols-5 md:grid-cols-3 justify-items-center gap-8 lg:mt-22 mt-16 lg:px-24 px-4'>
                {
                    hProducts.map(product => <div onClick={()=>handleGo(product._id)} className="card w-full rounded-none bg-primary shadow-xl">
                        <figure><img className='hover:rotate-3' src={product.img} alt="Shoes" /></figure>
                        {/* rating */}

                        <div className="card-body hover:rotate-1">
                            {/* rating */}
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            </div>

                            <h4 className='font-bold text-xl'>{product.name}</h4>
                            <p><span className='font-bold'>Price:</span> ${product.price}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HomeProduct;