import React, { useEffect, useState } from 'react';
 
import { BsPlusLg } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
 
import BookingModal from '../Home/BookingModal';
import Footer from './Footer';

const Inventory = () => {
     
    const { id } = useParams();
   
    const [product, setProduct] = useState([])
    const [result,setResult]=useState(null);
    useEffect(() => {
        fetch(`https://mb10-ecommerce-server-imranprogrammer10.vercel.app/product/${id}`)
            .then(res => res.json()).then(data => setProduct(data))
    }, [])

    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let deccrementCounter = () => setCounter(counter - 1);
    if (counter <= 1) {
        deccrementCounter = () => setCounter(1);
    }
    

    // add to cart 

    // const addToCart = event => {
    //     event.preventDefault();
    //     const count = event.target.count.value;
    //     let today = new Date();
    //     let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    //     const data = {
    //         name: product.name,
    //         description: product.description,
    //         count: count,
    //         email: user.email,
    //         img: product.img,
    //         date: date
    //     };
    //     fetch(`https://mb10-ecommerce-server-imranprogrammer10.vercel.app/order/${id}`, {
    //         method: 'POST', // or 'PUT'
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             toast('order confirm')
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error);

    //         });
    //         navigate('/dashboard/order');

    // }

    return (
        <div>
            <div>
                <div className="lg:h-64 h-48 bg-center text-base-100 
            grid justify-items-center items-center
            bg-[url('https://htmldemo.net/lukas/lukas/assets/img/bg/page-header-bg.jpg')]">
                    <h1 className='font-bold text-4xl'>Product Details</h1>
                    <h1 className='font-bold text-xl'>
                        <Link to='/home'><span>Home</span></Link>
                        <Link to='/shop'><span> Shop</span> </Link>
                        <span className='text-secondary'>Product Details</span>
                    </h1>
                </div>

                {/* card */}
                <div class="card lg:card-side bg-base-100 lg:mt-28 mt-12 lg:px-24 px-4">
                    <figure className='card border rounded-none imgOut'><img src={product.img} className='imag' alt="Album" /></figure>
                    <div class="card-body">
                        <h1 className='font-bold lg:text-4xl text-2xl'>{product.name}</h1>
                        <p> <span className='font-bold text-xl'>Price:</span> <span className='font-bold'> ${product.price}</span></p>
                        <p className='font-bold text-xl'>Description: {product.description}</p>

                        {/* table  */}

                     {/* <div class="overflow-x-auto mb-8">
                            <table class="table  w-full border">

                                <tbody>
                                    <tr>
                                        <th>Color</th>
                                        <th className='hover:text-secondary'>Black</th>
                                        <th className='hover:text-secondary'>Blue</th>
                                        <th className='hover:text-secondary'>Green</th>
                                    </tr>

                                    <tr>
                                        <th>Size</th>
                                        <th className='hover:text-secondary'>Large</th>
                                        <th className='hover:text-secondary'>Medium </th>
                                        <th className='hover:text-secondary'>Small</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div> */}

                 { result &&  <BookingModal product={product}
                 counter={counter}
                 setResult={setResult}
                   result={result} 
                   ></BookingModal>}
                        

                        {/* add to cart buttton */}

                        <form >
                            <div className='flex' style={{ marginRight: '530px' }}>
                                <p onClick={incrementCounter} className='btn rounded-none mr-5 border-primary text-neutral' style={{ backgroundColor: 'white' }}><BsPlusLg></BsPlusLg></p>
                                {/* <p >{counter}</p> */}

                                <button disabled name='count' className='mt-3 lg:mr-5 mr-5 font-bold w-12' value={counter} id="" >{counter}</button>

                                <p onClick={deccrementCounter} className='btn rounded-none text-4xl border-primary text-neutral' style={{ backgroundColor: 'white' }}>-</p>
                                <div>
                                 
                                <label className='btn btn-orange text-white' 
                         htmlFor="booking-modal" onClick={()=>setResult(product)}>Booking Order</label>
                                </div>
                               
                            </div>
                        </form>

                    </div>
                </div>
            </div>

            {/* description and reviews setion  */}

            <div className='flex lg:px-24 px-4'>
                {/* card 1 */}
                <div class="card w-full border rounded-none grid justify-items-center bg-primary">
                    <div className='lg:flex'>
                        <h2 class="des bg-secondary mt-0 font-bold text-xl text-base-100 p-3">DESCRIPTION</h2>
                        <h2 class="des bg-neutral mt-0 font-bold text-xl text-base-100 p-3">REVIEW</h2>
                    </div>
                    <div class="card-body">
                        <p>Created from either wood or recycled materials, it can be
                            moulded into just about any shape and hardens to provide a hard shell.
                            Additives can make it water resistant and it can be produced in a rainbow
                            of colours. Other materials being
                            </p>
                    </div>
                </div>


            </div>
            <Footer></Footer>
        </div>
    );
};

export default Inventory;