import React from 'react';

const Heading = ({ Heading2 }) => {
    return (
        <div>
            <h1 className='max-w-[1112px] w-full md:py-8 text-center font-sergio-trendy text-black lg:text-5xl sm:text-[30px] text-[16px]  font-normal mx-auto  capitalize'>{Heading2}</h1>
        </div>
    );
};

export default Heading;
