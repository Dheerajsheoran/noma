import React from 'react'

const Para = ({ para,w }) => {
    return (
        <div>
            <p className='max-w-[600px] w-full text-center text-black max-md:leading-normal leading-6 max-md:text-[12px] font-normal font-Montserrat mx-auto ' style={{width:w}} > {para} </p>
        </div>
    )
}

export default Para