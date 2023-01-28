import React from 'react';
import Footer from './Shared/Footer';

const Blog = () => {
    return (
        <div>
            {/* card 1  */}
            <div className="card lg:w-full bg-base-100 rounded-none">
                <figure><img src="https://htmldemo.net/lukas/lukas/assets/img/blog/blog-details-1.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='lg:px-60'>
                        <h1 className='font-bold text-3xl'>Modern technology for making</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam assumenda culpa cumque debitis dignissimos, dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi quibusdam quos ratione rem saepe sequi sit unde ut velit vitae. Amet ea error expedita, laboriosam maxime officiis porro ut velit.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam assumenda culpa cumque debitis dignissimos, dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi</p>
                    </div>

                    <div className='lg:px-60'>
                        <p className='bg-primary text-xl h-60 grid items-center lg:scroll-px-80'>Dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi, consectetur adipisicing elit. Aliquam aperiam assumenda</p>
                    </div>
                </div>
            </div>

            {/* card 2  */}
            <div className="card lg:w-full bg-base-100 rounded-none">
                <figure><img src="https://htmldemo.net/lukas/lukas/assets/img/blog/blog-details-2.jpg" alt="Shoes" /></figure>
                <div className="card-body lg:px-60">
                    <p className='tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam assumenda culpa cumque debitis dignissimos, dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi quibusdam quos ratione rem saepe sequi sit unde ut velit vitae. Amet ea error expedita, laboriosam maxime officiis porro ut velit.

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam assumenda culpa cumque debitis dignissimos, dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;