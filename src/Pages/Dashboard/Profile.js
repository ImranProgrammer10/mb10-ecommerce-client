import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import pro from '../../../src/assets/icon/profile1.png';
import email from '../../../src/assets/icon/email.png';
import location from '../../../src/assets/icon/location.png';
import phone from '../../../src/assets/icon/phone.png';
import edu from '../../../src/assets/icon/edu.png';
import link from '../../../src/assets/icon/linkden.png';
import { toast } from 'react-toastify';


const Profile = () => {
    const [user, loading] = useAuthState(auth);

    const [profile, setProfile] = useState([])
    const [reload,setReload] = useState(false);
    useEffect(() => {
        const url = `http://localhost:5000/profile?email=${user.email}`;
        fetch(url).then(res => res.json()).then(data => setProfile(data))
    }, [reload])

    const handleUpdate = (event) => {
        event.preventDefault();
        event.preventDefault();
        const education = event.target.education.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const link = event.target.link.value;
        const email = user.email;
        // data collect here 
        const update = {
            education: education,
            address: address,
            phoneNumber: phone,
            link: link
        };
        // put method 
        const url = `http://localhost:5000/profile/${email}`
        console.log(url)
        fetch(url, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(update),
        })
            .then(response => response.json())
            .then(data => {
                if(data){
                    toast('update success')
                }
                setReload(!reload)
            })
    }

    // get profile data 


    return (
        <div className='mt-12 grid lg:grid-cols-2 sm:grid-cols-1 lg:px-12 justify-items-center px-4'>
            <div className="card-normal w-fit bg-base-100 shadow-xl ml-6">
                <div className="card-body items-center text-center"><div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img className='mt-3 ml-3' style={{ height: '70px', width: '70px' }} src={pro} alt="" />
                    </div>
                </div>
                    <h2 className="card-title">{user?.displayName}</h2>
                    <div className='flex'>
                        <div><img style={{ height: '30px', width: '30px' }} src={email} alt="" /></div>
                        <div className='ml-3'><p>Email: {user.email}</p></div>
                    </div>
                    {
                        profile.map(p => <div>

                            <div className='flex'>
                                <div><img style={{ height: '30px', width: '30px' }} src={edu} alt="" /></div>
                                <div className='mr-16 ml-3'><p>Education: {p.education} </p></div>
                            </div>
                            <div className='flex'>
                                <div><img style={{ height: '30px', width: '30px' }} src={location} alt="" /></div>
                                <div className='mr-16 ml-3'><p>Location: {p.address}</p></div>
                            </div>
                            <div className='flex'>
                                <div><img style={{ height: '30px', width: '30px' }} src={phone} alt="" /></div>
                                <div className='mr-16 ml-3'><p>Phone Number: {p.phoneNumber}</p></div>
                            </div>
                            <div className='flex'>
                                <div><img style={{ height: '30px', width: '30px' }} src={link} alt="" /></div>
                                <div className='mr-16 ml-3'><a href={p.link}><p>Social Account: {user?.displayName} </p></a></div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
            <div className='text-2xl'>
                <div className="card-normal sm:w-fit bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h1>Update Your Profile</h1>
                        <form onSubmit={handleUpdate}>
                            <input type="text" name='name' value={user.displayName} disabled placeholder="Type here" className="input-sm input-bordered input-primary w-full max-w-xs" />
                            <input type="email" name='email' value={user.email} disabled placeholder="Type here" className="input-sm input-bordered input-primary w-full max-w-xs mt-2" />
                            <input required type="text" name='education' placeholder="Education" className="input-sm input-bordered input-primary w-full max-w-xs mt-2" />
                            <input required type="text" name='address' placeholder="Location or City" className="input-sm input-bordered input-primary w-full max-w-xs mt-2" />
                            <input required type="number" name='phone' placeholder="Number" className="input-sm input-bordered input-primary w-full max-w-xs mt-2" />
                            <input required type="text" name='link' placeholder="Your Any Social Link" className="input-sm input-bordered input-primary w-full max-w-xs mt-2" /><br />
                            <input className='btn btn-primary lg:w-80 mt-2' type="submit" value="UPDATE" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;