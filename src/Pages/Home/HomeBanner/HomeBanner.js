import React from 'react';
import banner from '../../../Images/Home-Banner.png';
const HomeBanner = () => {
    return (
        <div className='d-flex w-100'>
            <div className='bg-dark' style={{ height: "400px" }}>
                <h1 className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda nobis, quisquam laboriosam placeat incidunt sunt repellat deserunt nesciunt optio ut?</h1>
            </div>
            <div className='bg-dark'>
                <img src={banner} alt="" className='w-100' style={{}} />

            </div>
        </div>
    );
};

export default HomeBanner;