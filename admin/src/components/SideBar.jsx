import React, { useContext } from 'react'
import { TutorContext } from '../context/TutorContext'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const SideBar = () => {

   const { dToken } = useContext(TutorContext)
  const { aToken } = useContext(AdminContext)

  return (
   <div className='min-h-screen bg-white border-r'>
   {aToken && <ul className='text-[#515151] mt-5'>

     <NavLink to={'/admin-dashboard'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
       <img className='min-w-5' src={assets.home_icon} alt='' />
       <p className='hidden md:block'>Панель</p>
     </NavLink>
     <NavLink to={'/all-appointments'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
       <img className='min-w-5' src={assets.appointment_icon} alt='' />
       <p className='hidden md:block'>Жолугушуулар</p>
     </NavLink>
     <NavLink to={'/add-tutor'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
       <img className='min-w-5' src={assets.add_icon} alt='' />
       <p className='hidden md:block'>Бардык окутуучулар</p>
     </NavLink>
     <NavLink to={'/tutor-list'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
       <img className='min-w-5' src={assets.people_icon} alt='' />
       <p className='hidden md:block'>Окутуучулар тизмеси</p>
     </NavLink>
   </ul>}

   {dToken && <ul className='text-[#515151] mt-5'>
     <NavLink to={'/tutor-dashboard'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
       <img className='min-w-5' src={assets.home_icon} alt='' />
       <p className='hidden md:block'>Панель</p>
     </NavLink>
     <NavLink to={'/tutor-appointments'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
       <img className='min-w-5' src={assets.appointment_icon} alt='' />
       <p className='hidden md:block'>Жолугушуулар</p>
     </NavLink>
     <NavLink to={'/tutor-profile'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
       <img className='min-w-5' src={assets.people_icon} alt='' />
       <p className='hidden md:block'>Профиль</p>
     </NavLink>
   </ul>}
 </div>
  )
}

export default SideBar