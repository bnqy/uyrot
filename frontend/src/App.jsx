import React from 'react'
import Home from './pages/Home'
import Tutors from './pages/Tutors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChatWidget from './components/ChatWidget'
import ChatBot from './components/ChatBot'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tutors' element={<Tutors />}/>
        <Route path='/tutors/:department' element={<Tutors />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/my-profile' element={<MyProfile />}/>
        <Route path='/my-appointments' element={<MyAppointments />}/>
        <Route path='/appointment/:tutId' element={<Appointment />}/>
        <Route path='/appointment/TDD/places' element={<Appointment />}></Route>
        <Route path='/appointment/TDD/places/:placeId' element={<Appointment />}></Route>
      </Routes>
      <ChatBot />
      <Footer />
    </div>
  )
}

export default App