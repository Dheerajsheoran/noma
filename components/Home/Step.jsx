import Image from 'next/image'
import React from 'react'

const Step = ({ card }) => {
    return (
        <>
            <div className="max-w-[358px] sm:max-w-[309px] w-full px-[10px] py-4 md:py-8">
                <div className="flex justify-center">
                    <Image
                        src={card.img}
                        alt="Props-img"
                        width={358}
                        height={155}
                        className="h-[157px]"
                    />

                </div>
                <p className="text-center sm:pt-8 pt-2 text-[24px] sm:text-[32px] font-Montserrat font-extrabold leading-normal">
                    {card.step}
                </p>
                <p className="text-center sm:pt-8 text-[16px] font-Montserrat font-normal leading-normal">
                    {card.para}
                </p>
            </div>
        </>
    )
}

export default Step