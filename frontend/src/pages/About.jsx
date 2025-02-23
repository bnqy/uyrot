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
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores culpa, repellat debitis cum minus neque animi excepturi voluptatum amet laborum?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur inventore sequi ipsa repellendus accusantium, exercitationem dolore nemo quas, laboriosam illo qui. Qui provident fugit porro.</p>
          <b className='text-gray-800'>Биздин Максатыбыз</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, molestias! Explicabo, ipsam rem. Aperiam molestias numquam voluptas magni aspernatur itaque fugit nisi ad ipsum veritatis.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>ЭМНЕ <span className='text-gray-700 font-semibold'>ҮЧҮН Üyröt?</span> </p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Эффективдүүлүк:</b>
          <p>Сиздин бош эмес жашоо образыңызга туура келген жөнөкөйлөштүрүлгөн жолугушуу графиги.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Ыңгайлуу:</b>
          <p>Тармагыңыздагы ишенимдүү адистердин тармагына кирүү.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Жеткиликтүү:</b>
          <p>Концентриңизди сактоого жардам берүү үчүн ылайыкташтырылган сунуштар жана эскертүүлөр.</p>
        </div>
      </div>

    </div>
  )
}

export default About