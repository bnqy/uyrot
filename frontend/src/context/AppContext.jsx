import { createContext, useEffect, useState } from "react";
import axios from "axios"
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) =>{

    const currencySymbol = 'c ';
    const backendUrl = import.meta.env.VITE_BACKEND_URL 
    const [tutors, setTutors] = useState([])

    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')

    const getTutorsData = async () => {

        try {

            const { data } = await axios.get(backendUrl + '/api/tutor/list')
            if (data.success) {
                setTutors(data.tutors)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    useEffect(() => {
        getTutorsData()
    }, [])


    const value = {
        tutors,
        currencySymbol,
        token,
        setToken,
        backendUrl
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider