import React from 'react';

const Design = () => {
    return (
        <div className='mb-12 grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-8 lg:mt-22 mt-16 lg:px-24 px-4'>
            <div className="card w-full rounded-none">
                <figure><img src="https://i.ibb.co/R4805cZ/design1-1.webp" alt="Car" /></figure>
            </div>
            <div className="card w-full rounded-none">
                <figure><img src="https://i.ibb.co/qDMbzKV/design2.webp" alt="Car" /></figure>
            </div>
            <div className="card w-full rounded-none">
                <figure><img src="https://i.ibb.co/SsRNfNV/design3-2.webp" alt="Car" /></figure>
            </div>
        </div>
    );
};

export default Design;