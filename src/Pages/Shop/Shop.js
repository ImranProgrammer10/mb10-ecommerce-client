import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Shop = () => {
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
        <div>
            <div className='mb-28'>
                    <div className="lg:h-64 h-48 bg-center text-base-100 
            grid justify-items-center items-center
            bg-[url('https://htmldemo.net/lukas/lukas/assets/img/bg/page-header-bg.jpg')]">
                        <div><h1 className='font-bold text-4xl mb-3'>Shop</h1>
                            <h1 className='font-bold text-xl'>
                                <Link to='/home'><span>Home</span></Link>
                            <span className='text-secondary'> Shop</span></h1></div>
                    </div>
                </div>
            
            <div className='mb-12 grid lg:grid-cols-4 md:grid-cols-3 justify-items-center gap-8 lg:mt-22 mt-16 lg:px-24 px-4'>
                {
                    products.map(product=> <div onClick={()=>handleGo(product._id)} className="card w- rounded-none bg-primary shadow-xl"  >
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
            <Footer></Footer>
        </div>
    );
};

export default Shop;