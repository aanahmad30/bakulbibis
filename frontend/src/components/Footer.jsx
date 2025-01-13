import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Kami berkomitmen untuk menyediakan berbagai macam produk mulai dari f&b, fashion, dll. Kami hadir untuk mempermudah pembelian dari mana saja.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>LAYANAN</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li><a href="/collection" className="hover:text-black transition">Produk</a></li>
                    <li><a href="/about" className="hover:text-black transition">Tentang Kami</a></li>
                    <li><a href="/contact" className="hover:text-black transition">Kontak Kami</a></li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>HUBUNGI KAMI</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>083866151200</li>
                    <li>contact@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ padukuhanbibis.my.id - All Right Reserved.</p>
        </div>
    </div>
  ) 
}

export default Footer
