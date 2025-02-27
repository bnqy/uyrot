import React from "react";
import { assets } from "../../assets/assets";

const AddTutor = () => {
  return (
    <form className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Окутуучу кош</p>
      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="tut-img">
            <img className="w-16 bg-gray-100 rounded-full cursor-pointer" src={assets.upload_area} alt="" />
          </label>
          <input type="file" id="tut-img" hidden />
          <p>
            Окутуучунун <br /> сүрөтүн жүктө
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Аты жөнү</p>
              <input className="border rounded px-3 py-2" type="text" placeholder="Name" required />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Email</p>
              <input className="border rounded px-3 py-2" type="email" placeholder="Email" required />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Сыр сөзү</p>
              <input className="border rounded px-3 py-2" type="password" placeholder="Password" required />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Тажырыйбасы</p>
              <select name="" id="" className="border rounded px-2 py-2">
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
              <input className="border rounded px-3 py-2" type="number" placeholder="fees" required />
            </div>
          </div>

          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Бөлүмү</p>
              <select name="" id="" className="border rounded px-2 py-2">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Билими</p>
              <input type="text" placeholder="Education" className="border rounded px-3 py-2" required />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Дареги</p>
              <input type="text" className="border rounded px-3 py-2" placeholder="address 1" required />
              <input type="text" className="border rounded px-3 py-2" placeholder="address 2" required />
            </div>
          </div>
        </div>

        <div className="mt-4 mb-2">
          <p className="mt-4 mb-2">Окутуучу Жөнүндө</p>
          <textarea placeholder="About" className="w-full px-4 pt-2 border rounded" rows={5} required />
        </div>

        <button type="submit" className="bg-primary px-10 py-3 mt-4 text-white rounded-full">Тизмеге кош</button>
      </div>
    </form>
  );
};

export default AddTutor;
