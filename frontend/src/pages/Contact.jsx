import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>
        <span className='text-gray-700 font-semibold'>БИЗ МЕНЕН</span> БАЙЛАНЫШ
        </p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>

            <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

            <div className='flex flex-col justify-center items-start gap-6'>
              <p className='font-semibold text-lg text-gray-600 '>Биздин Кеңсе</p>
              <p className='text-gray-500'>Инженердик факультет <br />520 бөлмө, 5-кабат</p>
              <p className='text-gray-500'>Тел. : +996 312938312(3234) <br />Email: uyrot.bilgi@manas.edu.kg</p> 
              <p className='font-semibold text-lg text-gray-600 '>Üyröt менен Чогуу Өнүк </p>
              <p className='text-gray-500'>Өзүңдүн билимиңди башкалар менен бөлүш.</p>
              <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Сабак бер</button>
            </div>

        </div>
    </div>
  )
}

export default Contact