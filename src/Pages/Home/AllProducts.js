import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
 

const AllProducts = () => {
    const navigate = useNavigate();
    const [products,setProducts]=useState([]);
 
    useEffect(()=>{
        fetch('https://mb10-ecommerce-server-imranprogrammer10.vercel.app/product')
        .then(res=>res.json()).then(data=>setProducts(data))
    },[])

    const handleGo = (id) => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div className='grid justify-items-center lg:mt-20 mt-8 lg:mb-8'>
            <div className='grid justify-items-center'>
                <h1 className='font-bold text-3xl lg:mb-5 mb-3'> BEST SELLER PRODUCTS</h1>
                <p> Best seller product are now available for you and your can 
                    </p>
                    <p>buy this product from here any time any where so shop now</p>
            </div>
            <div className='mb-12 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 justify-items-center gap-8 lg:mt-22 mt-16 lg:px-24 px-4'>
                {
                    products.slice(30,60).map(product=> <div onClick={()=>handleGo(product._id)} className="card w-full rounded-none bg-primary shadow-xl">
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

export default AllProducts;