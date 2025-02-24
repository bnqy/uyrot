import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Tutors = () => {
  
  const {department} = useParams();
  console.log(department)
  const {tutors} = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();
  const [showFilter,setShowFilter] = useState(false);

  const applyFilter = () =>{
    if(department){
      setFilterDoc(tutors.filter(doc=>doc.speciality === department))
    } else{
      setFilterDoc(tutors)
    }
  }

  useEffect(()=>{
    applyFilter();
  },[tutors,department])
 
  return (
    <div>
      <p className='text-gray-600'>Студенттерди бөлүмгө жараша танда.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
      <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : '' }`} onClick={()=>setShowFilter(prev => !prev)}>Фильтрлөө</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={()=> department === 'Компьютер инженериясы' ? navigate('/tutors') : navigate('/tutors/Компьютер инженериясы')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${department === "Компьютер инженериясы" ? "bg-indigo-100 text-black" : ""}`}>Компьютер инженериясы</p>
          <p onClick={()=> department === 'Химия инженериясы' ? navigate('/tutors') : navigate('/tutors/Химия инженериясы')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${department === "Химия инженериясы" ? "bg-indigo-100 text-black" : ""}`}>Химия инженериясы</p>
          <p onClick={()=> department === 'Музыка бөлүмү' ? navigate('/tutors') : navigate('/tutors/Музыка бөлүмү')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${department === "Музыка бөлүмү" ? "bg-indigo-100 text-black" : ""}`}>Музыка бөлүмү</p>
          <p onClick={()=> department === 'Спорт билимдери' ? navigate('/tutors') : navigate('/tutors/Спорт билимдери')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${department === "Спорт билимдери" ? "bg-indigo-100 text-black" : ""}`}>Спорт билимдери</p>
          <p onClick={()=> department === 'Радио, телевидение' ? navigate('/tutors') : navigate('/tutors/Радио, телевидение')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${department === "Радио, телевидение" ? "bg-indigo-100 text-black" : ""}`}>Радио, телевидение</p>
          <p onClick={()=> department === 'Финансы жана кредит' ? navigate('/tutors') : navigate('/tutors/Финансы жана кредит')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${department === "Финансы жана кредит" ? "bg-indigo-100 text-black" : ""}`}>Финансы жана кредит</p>
          <p onClick={()=> department === 'Биология илими' ? navigate('/tutors') : navigate('/tutors/Биология илими')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${department === "Биология илими" ? "bg-indigo-100 text-black" : ""}`}>Биология илими</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoc.map((item,index)=>(
              <div onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                  <img className='bg-blue-50' src={item.image} alt="" />
                  <div className='p-4'>
                      <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                          <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Жеткиликтүү</p>
                      </div>
                      <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                      <p className='text-gray-600 text-sm'>{item.speciality} </p>
                  </div>
              </div>
  
              ))
          }
        </div>
      </div>
    </div>
  )
}

export default Tutors