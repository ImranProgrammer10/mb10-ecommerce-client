import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
    const [products,setProducts]=useState([]);
    const [reload, setReload] = useState(false);
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data);

        }
            )
    },[]);
    // delete 
    const handleDelete = id => {
        console.log(id)
        const procced = window.confirm('Confirm Now');
        if (procced) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    setReload(!reload)
                })
        }
    }
    return (
   
        <div className='grid justify-items-center lg:mt-20 mt-8 lg:mb-8'>
        <div className='grid justify-items-center'>
          
        </div>
        <div className='mb-12 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 justify-items-center gap-8 lg:mt-22 mt-16 lg:px-24 px-4'>
            {
                products.map(product=> <div  className="card w-full rounded-none bg-primary shadow-xl">
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
                    <button className="btn btn-warning" onClick={()=>handleDelete(product._id)}>Delete</button>
                </div>
            </div>)
            }
        </div>
    </div>
    );
};

export default ManageProducts
