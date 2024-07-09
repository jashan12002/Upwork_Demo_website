import React from 'react'
import { GiLaurelsTrophy } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";

const SliderComponent = () => {
    return (
        <div>
            <div className='bg-[#0f5684] px-4 py-6 md:px-16 md:py-10'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0'>
                    <div className='flex flex-col md:flex-row gap-6 items-center'>
                        <GiLaurelsTrophy className='text-white text-5xl md:text-7xl'/>
                        <div className='text-white flex flex-col gap-4 text-center md:text-left'>
                            <p className='text-xl md:text-3xl font-bold'>Do you want to sell OUR games in YOUR store?</p>
                            <div className='border-b border-[#e5007e] w-16 md:w-24 mx-auto md:mx-0'></div>
                            <p className='text-xs md:text-sm'>"PRIMATE CITY" is the 50th best game in the world and the 40th best strategy game of all time.</p>
                        </div>
                    </div>
                    <button className='bg-[#e5007e] px-8 py-2 md:px-16 md:py-4 outline-none text-white flex gap-1 items-center justify-center'>
                        Contact Us <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SliderComponent
