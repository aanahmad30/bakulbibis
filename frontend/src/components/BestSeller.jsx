import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import Title from './Title';

const BestSeller = () => {

  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    console.log('Products:', products); // Debugging
    const bestProduct = products.filter((item) => item.bestseller); // Pastikan ini sesuai
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);


  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'PRODUK'} text2={'FASHION'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          UMKM Padukuhan Bibis menyediakan berbagai pakaian dan aksesoris yang fashionable dan original 100%.
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          bestSeller.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id} // Properti ID produk
              name={item.name} // Nama produk
              image={item.image} // Array gambar produk
              price={item.price} // Harga produk
            />
          ))
        }
      </div>
    </div>
  )
}

export default BestSeller