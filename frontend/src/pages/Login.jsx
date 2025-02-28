import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [name, setName] = useState('');
  const { backendUrl, token, setToken } = useContext(AppContext)

  const navigate = useNavigate()

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (state === 'Sign Up') {

      const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })

      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
      } else {
        toast.error(data.message)
      }

    } else {

      const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
      } else {
        toast.error(data.message)
      }

    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Катталуу" : "Кирүү"}</p>
        <p>Сураныч жолугушуу үчүн {state === 'Sign Up' ? 'катталуу' : "кириш"} жасаңыз</p>
        {
          state === "Sign Up" && <div className='w-full'>
            <p>Аты жөнү</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.value)} value={name} required />
          </div>
        }


        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
        </div>
        <div className='w-full'>
          <p>Сыр сөз</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
        </div>

        <button type='submit' className='bg-primary text-white w-full py-2 rounded-md text-base'> {state === 'Sign Up' ? "Катталуу" : "Кирүү"}</button>
        {
          state === "Sign Up"
            ? <p>Сиздин аккаунтуңуз барбы? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Кирүү</span> </p>
            : <p>Жаңы колдонуучу түзүңүз?<span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>басыңыз</span> </p>
        }

      </div>


    </form>
  )
}

export default Login