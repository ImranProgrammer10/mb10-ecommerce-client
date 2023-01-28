import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Reviews = () => {
    const [user] = useAuthState(auth);
    const {id} =useParams();
    const hanldeReview = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const comment = e.target.comment.value;
        const rating = e.target.rating.value;
        const data = {
            name: name,
            comment: comment,
            rating: rating
        }

        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                if(data){
                    toast('Review submit')
                }
                
            })
    }
    return (
        <div className='lg:px-12'>
            <h1 className='font-bold text-3xl text-secondary'>Write Your Comment About Us</h1>

            <div className="card w-96 bg-base-100 rounded-none mt-8 shadow-xl">
                <div className="card-body">
                    <form onSubmit={hanldeReview}>
                        <input name='name' disabled value={user.displayName} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /><br />
                        <textarea name='comment' className="textarea textarea-bordered w-full mt-3" placeholder="Comment"></textarea><br />
                        <input name='rating' type="number" placeholder="Rating" className="input mt-3 input-bordered w-full max-w-xs" /><br />
                        <input type="submit" className='btn btn-secondary w-32 rounded-full mt-2' value="Submit" />

                    </form>
                </div>
            </div>


        </div>
    );
};

export default Reviews;