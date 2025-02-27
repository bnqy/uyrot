import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddTutor from './pages/Admin/AddTutor';
import TutorList from './pages/Admin/TutorList';
import TutorAppointments from './pages/Tutor/TutorAppointments';
import TutorDashboard from './pages/Tutor/TutorDashboard';
import TutorProfile from './pages/Tutor/TutorProfile';

const App = () => {

  const { aToken } = useContext(AdminContext)

  return aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <NavBar />
      <div className='flex items-start'>
        <SideBar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllAppointments />} />
          <Route path='/add-tutor' element={<AddTutor />} />
          <Route path='/tutor-list' element={<TutorList />} />
          <Route path='/tutor-dashboard' element={<TutorDashboard />} />
          <Route path='/tutor-appointments' element={<TutorAppointments />} />
          <Route path='/tutor-profile' element={<TutorProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  )
}

export default App