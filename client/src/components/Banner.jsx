import React from 'react'
import BannerCard from '../Home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-2 bg-teal-200 flex items-center'>
        <div className=' flex flex-col md:flex-row justify-between items-center w-full gap-12 py-40'>
            <div className='w-1/2 space-y-8 h-full '>
                <h2 className='text-5xl font-bold leading-snug text-black'>
                    Buy and Sell Your Books <span className='text-blue-700'>for the Best Prices</span>
                </h2>
                <p className='md:w-4/5'>
                
                Buy And Sell Used Books In India. Search And Buy Second Hand Books Near You. Post Free Ad To Sell Old Books In City. 
                </p>
                <div>
                    <input type='search' name='search' id='search' placeholder='Search a book' className='py-2 px-2 rounded-s-sm outline-none'/>
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div>
            </div>
            <div className='space-y-8 w-1/2'>
            <br></br>
            <br></br>
                <BannerCard/>
            </div>
        </div>
    </div>
  )
}

export default Banner