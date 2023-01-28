import React from 'react';

const Car = () => {
    return (
        <div className='mt-16 lg:mb-24 mb-8'>
            <div className="bg-[url('https://htmldemo.net/lukas/lukas/assets/img/bg/bg-2.jpg')]">
                <p className='mb-16'>.</p>
                {/* mt-[-100px] */}
                <div className='grid justify-items-center'>
                    <div className='grid justify-items-center'>
                    <h1 className='font-bold text-2xl lg:text-5xl'>ALL KINDS OF PARTS THAT YOU</h1>
                    <h1 className='font-bold text-2xl lg:text-5xl mb-5 lg:mb-8'>NEED CAN FIND HERE</h1>
                    <button className="btn btn-secondary hover:bg-primary border-none 
                    font-bold rounded-3xl p-2 w-36 mb-44">shop now</button>
                    </div>
                </div>

                <div className='grid justify-items-center mt-[-100px] lg:hidden'>
                <img src="https://htmldemo.net/lukas/lukas/assets/img/bg/bg-car.png" alt="" />
            </div>
            </div>

            <div className='grid justify-items-center mt-[-128px]'>
                <img src="https://htmldemo.net/lukas/lukas/assets/img/bg/bg-car.png" alt="" />
            </div>
        </div>
    );
};

export default Car;