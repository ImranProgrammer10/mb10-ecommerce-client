import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const handleAdd = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const img = e.target.img.value;
        const price= e.target.price.value;
        const data={
            name:name,
            description:description,
            img:img,
            price:price
        };
        fetch(`https://mb10-ecommerce-server-imranprogrammer10.vercel.app/product`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                toast('Product Add')
            })
            .catch((error) => {
                console.error('Error:', error);

            });
    }
    return (
        <div className='lg:px-12'>
            <h1 className='font-bold text-3xl text-secondary'>Write Your Comment About Us</h1>

            <div className="card w-96 bg-base-100 rounded-none mt-8 shadow-xl">
                <div className="card-body">
                    <form onSubmit={handleAdd}>
                        <input name='name' type="text" placeholder="Product name" className="input input-bordered w-full max-w-xs" /><br />
                        <input name='description' type="text" placeholder="Product description" className="input input-bordered w-full max-w-xs" /><br />
                        <textarea name='img' className="textarea textarea-bordered w-full mt-3" placeholder="Type image link"></textarea><br />
                        <input name='price' type="number" placeholder="Price" className="input mt-3 input-bordered w-full max-w-xs" /><br />
                        <input type="submit" className='btn btn-secondary w-32 rounded-full mt-2' value="Submit" />

                    </form>
                </div>
            </div>


        </div>
    );
};

export default AddProduct;