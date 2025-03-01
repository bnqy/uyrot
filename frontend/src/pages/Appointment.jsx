import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import RelatedTutors from '../components/RelatedTutors';
import { toast } from 'react-toastify';
import axios from 'axios';

const Appointment = () => {
  const { tutId } = useParams();
  const { tutors, currencySymbol, backendUrl, token, getTutorsData } = useContext(AppContext);
  const daysOfWeek = ['ЖЕК', 'ДҮЙ', 'ШЕЙ', 'ШАР', 'БЕЙ','ЖУМ','ИШЕ'];

  const [tutInfo, setTutInfo] = useState(null);
  const [tutSlots, setTutSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const navigate = useNavigate();

  const fetchTutInfo = async () => {
    const foundTutor = tutors.find(tut => tut._id === tutId);
    setTutInfo(foundTutor || null); 
  }

  const getAvailableSlots = async () => {
    // Guard: if no tutor loaded yet, skip
    if (!tutInfo) return;

    setTutSlots([]);

    //getting current date
    let today = new Date();

    for(let i=0; i<7; i++){
      //getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      //setting end time of the date with index
      let endTime = new Date(currentDate);
      endTime.setHours(21,0,0,0);

      //setting hours
      if(today.getDate() === currentDate.getDate()){
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while(currentDate < endTime){
        let formattedTime = currentDate.toLocaleTimeString([],{ hour:'2-digit', minute:'2-digit' });

        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();

        const slotDate = day + "_" + month + "_" + year;
        const thisSlotTime = formattedTime;

        // Guard: if tutor doesn't have slots_booked, skip or treat it as empty
        const isSlotAlreadyBooked = tutInfo.slots_booked?.[slotDate]?.includes(thisSlotTime);

        // If not booked, push to available
        if(!isSlotAlreadyBooked){
          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime
          });
        }

        // Increment by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes()+30);
      }

      setTutSlots(prev => ([...prev, timeSlots]));
    }
  }

  const bookAppointment = async () => {
    if (!token) {
      toast.warning('Login to book appointment');
      return navigate('/login');
    }

    // If there are no tutSlots or it’s empty, guard
    if (!tutSlots[slotIndex] || tutSlots[slotIndex].length === 0) {
      toast.error('No slot selected');
      return;
    }

    const date = tutSlots[slotIndex][0].datetime;
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const slotDate = day + "_" + month + "_" + year;

    try {
      const { data } = await axios.post(
        backendUrl + '/api/user/book-appointment',
        { tutId, slotDate, slotTime },
        { headers: { token } }
      );
      if (data.success) {
        toast.success(data.message);
        getTutorsData();
        navigate('/my-appointments');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchTutInfo();
  }, [tutors, tutId]);

  useEffect(() => {
    if (tutInfo) {
      getAvailableSlots();
    }
  }, [tutInfo]);

  return tutInfo && (
    <div>
      {/* ---------Tuts Details---------- */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={tutInfo.image} alt="" />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/* --------Tut Info : name,degree ,experience-------- */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {tutInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{tutInfo.degree} - {tutInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'> {tutInfo.experience} </button>
          </div>

          {/* ------------tut About------------ */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              Студент жөнүндө <img src={assets.info_icon} alt="" />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{tutInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Лекция баасы: <span className='text-gray-600'>{currencySymbol}{tutInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* -----------Booking Slots---------- */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Жолугушуу убактылары</p>
        
        {/* Days */}
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            tutSlots.map((daySlots, index) => {
              // If no slots for that day
              if(!daySlots.length) {
                return (
                  <div
                    onClick={() => setSlotIndex(index)}
                    className={`
                      text-center py-6 min-w-16 rounded-full cursor-pointer
                      ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}
                    `}
                    key={index}
                  >
                    <p>No slots</p>
                  </div>
                );
              }
              // If daySlots is not empty, we can safely read daySlots[0].datetime
              return (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`
                    text-center py-6 min-w-16 rounded-full cursor-pointer
                    ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}
                  `}
                  key={index}
                >
                  <p>{daysOfWeek[ daySlots[0].datetime.getDay() ]}</p>
                  <p>{daySlots[0].datetime.getDate()}</p>
                </div>
              );
            })
          }
        </div>

        {/* Times */}
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {
            tutSlots[slotIndex]?.map((slot, index) => (
              <p
                onClick={() => setSlotTime(slot.time)}
                className={`
                  text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer
                  ${slot.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}
                `}
                key={index}
              >
                {slot.time.toLowerCase()}
              </p>
            ))
          }
        </div>

        <button
          onClick={bookAppointment}
          className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'
        >
          Жолугушуу уюштур
        </button>
      </div>

      {/* -----------Listing Realted tuts---------- */}
      <RelatedTutors tutId={tutId} speciality={tutInfo.speciality}/>
    </div>
  );
}

export default Appointment;
