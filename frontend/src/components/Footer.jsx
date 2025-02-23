import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
         {/* left */}
         <div>
         <img className='mb-5 w-40' src={assets.logo} alt="" />
         <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum, doniet loremon, ipsam iste blanditiis mollitia deserunt autem incidunt minima ipsum explicabo!</p>
         </div>

         {/*center */}
         <div>
         <p className='text-xl font-medium mb-5'>КОМПАНИЯ</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <p>Башкы бет</p>
                    <p>Биз жөнүңдө</p>
                    <p>Байланышуу</p>
                    <p>Колдонуу политикасы</p>
                </ul>          
         </div>

         {/*right */}
         <div>
         <p className='text-xl font-medium mb-5'>КАБАРЛАШ</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+312 908719(882)</li>
                    <li>uyrot.bilgi@manas.edu.kg</li>
                </ul>
         </div>
      </div>

      {/* CopyRight */}
      <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@  Manas x Uyrot - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer