import React from 'react';

const Subscribe = () => {
    return (
        <div className='px-7 py-14 bg-[#D7D6D2] lg:text-left text-center'>
            <h2 className='text-[28px]'>
                End of Summer!
                <br />
                Up to 40% off on all items.
            </h2>
            <div className='my-5 flex gap-2 flex-wrap lg:justify-start justify-center'>
                <input type="email" className='px-4 py-3 w-96 outline-none' name="email" id="email" placeholder="Email Address" />
                <input type="submit" className='px-8 py-3 bg-[black] text-white uppercase font-semibold cursor-pointer' value="Subscribe" />
            </div>
            <p>Sign up to our Newsletter and get the discount code!</p>
        </div>
    );
};

export default Subscribe;