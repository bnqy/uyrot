import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AdminContext = createContext()

const AdminContextProvider = (props) => {

   const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '')
   const backendUrl = import.meta.env.VITE_BACKEND_URL

   
   const [tutors, setTutors] = useState([])

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

   const value = {
      aToken,
      setAToken,
      backendUrl,
      tutors,
      getAllTutors,
      changeAvailability
  }


  return (
      <AdminContext.Provider value={value}>
          {props.children}
      </AdminContext.Provider>
  )
}

export default AdminContextProvider
