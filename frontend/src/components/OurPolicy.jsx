import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div>
        <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
            
            <div>
                <img src={assets.exchange_icon} className='w-12 m-auto mb-5 ' alt="" />
                <p className='font-semibold' >Pengembalian Produk</p>
                <p className='text-gray-400' >Kebijakan pengembalian produk</p>
            </div>
            <div>
                <img src={assets.quality_icon} className='w-12 m-auto mb-5 ' alt="" />
                <p className='font-semibold' >Produk Berkualitas</p>
                <p className='text-gray-400' >Setiap produk dibuat dengan standar terbaik</p>
            </div>
            <div>
                <img src={assets.support_img} className='w-12 m-auto mb-5 ' alt="" />
                <p className='font-semibold' >Layanan Pelanggan 24/7</p>
                <p className='text-gray-400' >Tim kami siap membantu kapan saja</p>
            </div>

        </div>
    </div>
  )
}

export default OurPolicy
