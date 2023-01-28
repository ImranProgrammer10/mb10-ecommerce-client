import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import MyOrders from './MyOrders';

const stripePromise = loadStripe('pk_test_51L1vZHLM2TnMhPb2sdgMvAdW7nsOrVhfoVoFg3USSKppvi51pMM2kp3RKEsMsGtQ7aisvKjcCKNnhcL1I07nYmg500j0iqZ8jG');

const Payment = () => {
    const { id } = useParams()
    const [oder, setorder] = useState([]);
    useEffect(() => {
        fetch(`https://ancient-cove-16092.herokuapp.com/order/${id}`)
            .then(res => res.json()).then(data => setorder(data))
    }, [])
    return (
        <div className='grid justify-items-center'>
            <div className="card w-96 bg-base-100 shadow-xl rounded-none mt-8">
                <div className="card-body">
                    
                    <Elements stripe={stripePromise}>
                        <CheckoutForm id={id}></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;