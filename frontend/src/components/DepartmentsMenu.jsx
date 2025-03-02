import React from 'react'
import { departmentData } from '../assets/assets'
import { Link } from 'react-router-dom'

const DepartmentsMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='department'>
      <h1 className='text-3xl font-medium'>Өзүңдүн бөлүмүңө жараша танда</h1>
      <p className='sm:w-1/2 text-center text-sm'>Өзүңдүн бөлүмө жараша танда жана өзүңдүн келечиңе карай кадам ташта. Өзүңдүн бөлүмө жараша танда жана өзүңдүн келечиңе карай кадам ташта</p>
      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
      {departmentData.map((item,index)=>(
                <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/tutors/${item.speciality}`}>
                    <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
                    <p>{item.speciality}</p>

                </Link>
            ))}
      </div>
    </div>
  )
}

export default DepartmentsMenu