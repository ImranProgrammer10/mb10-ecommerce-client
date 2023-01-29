import { format } from 'date-fns';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({result,setResult,product,counter}) => {
    const navigate = useNavigate();
    const {name,price,img}=result;
    const { id } = useParams();
    const [date,setDate]=useState(new Date());
  const [user,loading,error]=useAuthState(auth);
  const [phoneNumber, setPhoneNumber] = useState('');

  

  const formattedDate=format(date,'PP');
//   const {_id,name,img,price}=treatment;
  const handleBooking =event=>{
    const count = event.target.count.value;
  event.preventDefault();
   const form=event.target;
  
   const email=form.email.value;
   const phone=form.phone.value;

   const booking={
   date:formattedDate,
  Product:product.name,
  Customer:user.displayName,
 
   email,
    phone,
    count: count,
    img:product.img,
    Price:product.price
  }

   console.log(booking);
   setResult(null);

   fetch(`https://mb10-ecommerce-server-imranprogrammer10.vercel.app/order/${id}`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(booking),
        })
            .then(response => response.json())
            .then(data => {
                toast('order confirm')
            })
            .catch((error) => {
                console.error('Error:', error);

            });
            navigate('/dashboard/order');

}



 


    return (
        <>
           <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold text-secondary">{name} </h3>
    <form onSubmit={handleBooking}  className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
     <input type="text"  disabled value={format(date,'PP')}  className="input input-bordered w-full max-w-xs" />
      
     <input type="text" name="name"  disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
      <input type="email" name="email" disabled value={user?.email || ''}  className="input input-bordered w-full max-w-xs" />
      <input type="text" name="phone" placeholder="Phone Number" value={phoneNumber} className="input input-bordered w-full max-w-xs"  onChange={(e) => setPhoneNumber(e.target.value)} />

      <input type="text" name="count" placeholder="piece" value={counter} className="input input-bordered w-full max-w-xs" />

      {phoneNumber.length > 0 ? (
       <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
      ) : (
        <p>Please enter a phone number</p>
      )}
      
 
     </form>
   </div>
</div>
        </>
    );
};

export default BookingModal;