import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>БИЗ <span className='text-gray-700 font-medium'>ЖӨНҮНДӨ</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Биз – студенттерге сапаттуу билим алуу мүмкүнчүлүгүн сунуштаган инновациялык онлайн платформабыз. Биздин максат – ар бир окуучуга өзүнө ылайыктуу мугалимди табууга жардам берүү жана билимди жеткиликтүү кылуу.</p>
          <p>Биздин платформа аркылуу каалаган предмет боюнча квалификациялуу окутуучулар менен жеке сабактарды брондоп, билимиңизди өркүндөтө аласыз.</p>
          <b className='text-gray-800'>Биздин Максатыбыз</b>
          <p>Биздин негизги максатыбыз – билим берүүнү заманбап, ыңгайлуу жана ар бир студентке жеткиликтүү кылуу. Биз студенттер менен тажрыйбалуу мугалимдердин ортосундагы байланышты күчөтүп, сапаттуу билим алуу процессин жеңилдетүүгө аракет кылабыз.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>ЭМНЕ <span className='text-gray-700 font-semibold'>ҮЧҮН Üyröt?</span> </p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Эффективдүүлүк:</b>
          <p>Сиздин жашооңузга ыңгайлуу жолугушуу графиги. Математикадан баштап тил курстарына чейин кеңири тандоо.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Ыңгайлуу:</b>
          <p>Тармагыңыздагы ишенимдүү адистердин тармагына кирүү. Сабактарды өз убактыңызга жараша пландаштырыңыз.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Жеткиликтүү:</b>
          <p>Окутуучуларды оңой тандап, онлайн же оффлайн сабактарды эффективдүү жана ыңгайлуу брондоңуз.</p>
        </div>
      </div>

    </div>
  )
}

export default About