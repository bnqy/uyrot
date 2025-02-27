import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {

   const [state, setState] = useState('Admin')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const { setAToken, backendUrl } = useContext(AdminContext)

   const onSubmitHandler = async (event) => {
      event.preventDefault();
  
      if (state === 'Admin') {
  
        const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })
        if (data.success) {
          setAToken(data.token)
          localStorage.setItem('aToken', data.token)
        } else {
          toast.error(data.message)
        }
  
      } else {
  
        const { data } = await axios.post(backendUrl + '/api/tutor/login', { email, password })
        if (data.success) {
          setDToken(data.token)
          localStorage.setItem('tToken', data.token)
        } else {
          toast.error(data.message)
        }
  
      }
  
    }


  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
         <p className='text-2xl font-semibold m-auto'><span className='text-primary'>{state} Кириши</span></p>
         <div className='w-full '>
          <p>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
        </div>
        <div className='w-full '>
          <p>Сыр сөз</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>Кирүү</button>
        {
          state === 'Admin'
            ? <p>Студент кириши? <span onClick={() => setState('Tutor')} className='text-primary underline cursor-pointer'>Бул жака басыңыз</span></p>
            : <p>Админ кириши? <span onClick={() => setState('Admin')} className='text-primary underline cursor-pointer'>Бул жака басыңыз</span></p>
        }
      </div>
    </form>
  )
}

export default Login