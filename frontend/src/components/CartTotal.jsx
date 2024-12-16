import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    return (
        <div className='w-full'>
            <div className='text-2xl'>
                <Title text1={'TOTAL'} text2={'KERANJANG'} />
            </div>

            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>Rp {getCartAmount().toLocaleString()}</p> {/* Mengubah penampilan subtotal */}
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Biaya Admin</p>
                    <p>Rp {delivery_fee.toLocaleString()}</p> {/* Mengubah penampilan biaya admin */}
                </div>
                <hr />
                <div className='flex justify-between'>
                    <b>Total</b>
                    <b>
                        Rp { (getCartAmount() === 0 ? 0 : (getCartAmount() + delivery_fee)).toLocaleString() }
                    </b> {/* Mengubah penampilan total */}
                </div>
            </div>
        </div>
    );
}

export default CartTotal;
