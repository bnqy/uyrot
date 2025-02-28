import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { toast } from "react-toastify";
import axios from "axios";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";

const AddTutor = () => {

  const [tutImg, setTutImg] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [experience, setExperience] = useState('1 жыл')
  const [fees, setFees] = useState('')
  const [about, setAbout] = useState('')
  const [speciality, setSpeciality] = useState('Компьютер инженериясы')
  const [degree, setDegree] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')

  const { backendUrl, aToken } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {

      if (!tutImg) {
          return toast.error('Image Not Selected')
      }

      const formData = new FormData();

      formData.append('image', tutImg)
      formData.append('name', name)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('experience', experience)
      formData.append('fees', Number(fees))
      formData.append('about', about)
      formData.append('speciality', speciality)
      formData.append('degree', degree)
      formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))

      // console log formdata            
      formData.forEach((value, key) => {
          console.log(`${key}: ${value}`);
      });

      const { data } = await axios.post(backendUrl + '/api/admin/add-tutor', formData, { headers: { aToken } })
      if (data.success) {
          toast.success(data.message)
          setTutImg(false)
          setName('')
          setPassword('')
          setEmail('')
          setAddress1('')
          setAddress2('')
          setDegree('')
          setAbout('')
          setFees('')
      } else {
          toast.error(data.message)
      }

  } catch (error) {
      toast.error(error.message)
      console.log(error)
  }

  }

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Окутуучу кош</p>
      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="tut-img">
            <img className="w-16 bg-gray-100 rounded-full cursor-pointer" src={tutImg ? URL.createObjectURL(tutImg) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e) => setTutImg(e.target.files[0])} type="file" id="tut-img" hidden />
          <p>
            Окутуучунун <br /> сүрөтүн жүктө
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Аты жөнү</p>
              <input onChange={e => setName(e.target.value)} value={name} className="border rounded px-3 py-2" type="text" placeholder="Name" required />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Email</p>
              <input onChange={e => setEmail(e.target.value)} value={email} className="border rounded px-3 py-2" type="email" placeholder="Email" required />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Сыр сөзү</p>
              <input onChange={e => setPassword(e.target.value)} value={password} className="border rounded px-3 py-2" type="password" placeholder="Password" required />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Тажырыйбасы</p>
              <select onChange={e => setExperience(e.target.value)} value={experience} name="" id="" className="border rounded px-2 py-2">
                <option value="1 Year">1 жыл</option>
                <option value="2 Year">2 жыл</option>
                <option value="3 Year">3 жыл</option>
                <option value="4 Year">4 жыл</option>
                <option value="5 Year">5 жыл</option>
                <option value="6 Year">6 жыл</option>
                <option value="8 Year">8 жыл</option>
                <option value="9 Year">9 жыл</option>
                <option value="10 Year">10 жыл</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Баасы</p>
              <input onChange={e => setFees(e.target.value)} value={fees} className="border rounded px-3 py-2" type="number" placeholder="fees" required />
            </div>
          </div>

          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Бөлүмү</p>
              <select onChange={e => setSpeciality(e.target.value)} value={speciality} name="" id="" className="border rounded px-2 py-2">
                <option value="Компьютер инженериясы">Компьютер инженериясы</option>
                <option value="Музыка бөлүмү">Музыка бөлүмү</option>
                <option value="Химия инженериясы">Химия инженериясы</option>
                <option value="Спорт билимдери">Спорт билимдери</option>
                <option value="Радио, телевидение">Радио, телевидение</option>
                <option value="Финансы жана кредит">Финансы жана кредит</option>
                <option value="Биология илими">Биология илими</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Билими</p>
              <input onChange={e => setDegree(e.target.value)} value={degree} type="text" placeholder="Education" className="border rounded px-3 py-2" required />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Дареги</p>
              <input onChange={e => setAddress1(e.target.value)} value={address1} type="text" className="border rounded px-3 py-2" placeholder="address 1" required />
              <input onChange={e => setAddress2(e.target.value)} value={address2} type="text" className="border rounded px-3 py-2" placeholder="address 2" required />
            </div>
          </div>
        </div>

        <div className="mt-4 mb-2">
          <p className="mt-4 mb-2">Окутуучу Жөнүндө</p>
          <textarea onChange={e => setAbout(e.target.value)} value={about} placeholder="About" className="w-full px-4 pt-2 border rounded" rows={5} required />
        </div>

        <button type="submit" className="bg-primary px-10 py-3 mt-4 text-white rounded-full">Тизмеге кош</button>
      </div>
    </form>
  );
};

export default AddTutor;
