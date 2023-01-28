import { useEffect, useState } from "react";

const useAdmin=user=>{
    const [admin,setAdmin]= useState(false);
    useEffect(()=>{
        const email = user?.email;
        if(email){
            fetch(`https://mb10-ecommerce-server-imranprogrammer10.vercel.app/admin/${email}`, {
                method: 'GET', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
               
            })
                .then(response => response.json())
                .then(data => {
                    setAdmin(data.admin);
                })
        }
    },[user])
    return [admin]
}
export default useAdmin;