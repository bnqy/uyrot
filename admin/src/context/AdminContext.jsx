import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AdminContext = createContext()

const AdminContextProvider = (props) => {

   const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '')
   const backendUrl = import.meta.env.VITE_BACKEND_URL

   const [appointments, setAppointments] = useState([])

   
   const [tutors, setTutors] = useState([])
   const [dashData, setDashData] = useState(false)

   const getAllTutors = async () => {

    try {

        const { data } = await axios.get(backendUrl + '/api/admin/all-tutors', { headers: { aToken } })
        if (data.success) {
            setTutors(data.tutors)
        } else {
            toast.error(data.message)
        }

    } catch (error) {
        toast.error(error.message)
    }

}

const changeAvailability = async (tutId) => {
    try {

        const { data } = await axios.post(backendUrl + '/api/admin/change-availability', { tutId }, { headers: { aToken } })
        if (data.success) {
            toast.success(data.message)
            getAllTutors()
        } else {
            toast.error(data.message)
        }

    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }
}

const getAllAppointments = async () => {

    try {

        const { data } = await axios.get(backendUrl + '/api/admin/appointments', { headers: { aToken } })
        if (data.success) {
            setAppointments(data.appointments.reverse())
        } else {
            toast.error(data.message)
        }

    } catch (error) {
        toast.error(error.message)
        console.log(error)
    }

}

const cancelAppointment = async (appointmentId) => {

    try {

        const { data } = await axios.post(backendUrl + '/api/admin/cancel-appointment', { appointmentId }, { headers: { aToken } })

        if (data.success) {
            toast.success(data.message)
            getAllAppointments()
        } else {
            toast.error(data.message)
        }

    } catch (error) {
        toast.error(error.message)
        console.log(error)
    }

}

const getDashData = async () => {
    try {

        const { data } = await axios.get(backendUrl + '/api/admin/dashboard', { headers: { aToken } })

        if (data.success) {
            setDashData(data.dashData)
        } else {
            toast.error(data.message)
        }

    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }

}

   const value = {
      aToken,
      setAToken,
      backendUrl,
      tutors,
      getAllTutors,
      changeAvailability,
      appointments, setAppointments,
      getAllAppointments,
      cancelAppointment,
      dashData,
      getDashData,

  }


  return (
      <AdminContext.Provider value={value}>
          {props.children}
      </AdminContext.Provider>
  )
}

export default AdminContextProvider
