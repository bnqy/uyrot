import logo from "./logo.svg";
import profile_pic from "./profile_pic.jpg";
import dropdown_icon from "./dropdown_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import group_profiles from "./group_profiles.png";
import header_img from "./header_img.png";
import Bio from "./Bio.svg";
import Eco from "./Eco.svg";
import KimMuh from "./KimMuh.svg";
import MuhBil from "./MuhBil.svg";
import Music from "./Music.svg";
import Radio from "./Radio.svg";
import Spor from "./Spor.svg";
import tut1 from "./2004.01001.jpg";
import tut2 from "./2004.01002.jpg";
import tut3 from "./2004.01003.jpg";
import tut4 from "./2004.01004.jpg";
import tut6 from "./2004.01006.jpg";
//import tut9 from './2004.01009.jpg'
import tut10 from "./2004.01010.jpg";
import tut12 from "./2004.01012.jpg";
import tut13 from "./2004.01013.jpg";
import tut14 from "./2004.01014.jpg";
//import tut17 from './2004.01017.jpg'
import tut18 from "./2004.01018.jpg";
//import tut19 from './2004.01019.jpg'
import tut20 from "./2004.01020.jpg";
import tut23 from "./2004.01023.jpg";
//import tut25 from './2004.01025.jpg'
import tut31 from "./2004.01031.jpg";
import tut33 from "./2004.01033.jpg";
import tut35 from "./2004.01035.jpg";
import tut37 from "./2004.01037.jpg";
import tut39 from "./2004.01039.jpg";
import tut41 from "./2004.01041.jpg";
import tut42 from "./2004.01042.jpg";
import tut43 from "./2004.01043.jpg";
import tut2133 from "./2104.01033.jpg";
import tut2131 from "./2104.01031.jpg";

import appointment_img from "./appointment_img.png";
import verified_icon from "./verified_icon.svg";
import info_icon from "./info_icon.svg";
import about_image from "./about_image.jpg";
import contact_image from "./contact_image.jpg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import upload_icon from './upload_icon.png'
import razorpay_logo from './razorpay_logo.png'


export const assets = {
  logo,
  profile_pic,
  dropdown_icon,
  arrow_icon,
  group_profiles,
  header_img,
  appointment_img,
  verified_icon,
  info_icon,
  about_image,
  contact_image,
  menu_icon,
  cross_icon,
  upload_icon,
  razorpay_logo
};

export const departmentData = [
  {
    speciality: "Компьютер инженериясы",
    image: MuhBil,
  },
  {
    speciality: "Музыка бөлүмү",
    image: Music,
  },
  {
    speciality: "Химия инженериясы",
    image: KimMuh,
  },
  {
    speciality: "Спорт билимдери",
    image: Spor,
  },
  {
    speciality: "Радио & телевидение",
    image: Radio,
  },
  {
    speciality: "Финансы & кредит",
    image: Eco,
  },
  {
    speciality: "Биология илими",
    image: Bio,
  },
];

export const tutors = [
  {
    _id: "tut1",
    name: "Студент 1",
    image: tut1,
    speciality: "Компьютер инженериясы",
    degree: "2.80 GPA",
    experience: "2 жылдык тажрыйба",
    about:
      "Булуттуу эсептөө жана DevOps: Студент булуттук кызматтарды (AWS, Azure, Google Cloud) жана DevOps куралдарын (Docker, Kubernetes, Jenkins) колдонуп, инфраструктураны автоматташтырат жана CI/CD процессин оптималдаштырат.",
    fees: 670,
    address: { line1: "zoom", line2: "Community Server" },
  },
  {
    _id: "tut2",
    name: "Студент 2",
    image: tut2,
    speciality: "Компьютер инженериясы",
    degree: "3.36 GPA",
    experience: "2 жылдык тажрыйба",
    about:
      "Маалыматтар инженериясы жана анализ: Студент чоң маалыматтар менен иштөөдө тажрыйбалуу. Python, R жана SQL менен маалыматтарды анализдеп, бизнес чечимдерди кабыл алуу үчүн аналитикалык инструменттерди колдонот.",
    fees: 380,
    address: { line1: "teams", line2: "Community Server" },
  },
  {
    _id: "tut3",
    name: "Студент 3",
    image: tut3,
    speciality: "Компьютер инженериясы",
    degree: "2.16 GPA",
    experience: "3 жылдык тажрыйба",
    about:
      "Тармактык коопсуздук жана маалыматтык коопсуздук: Студент коопсуздук стратегияларын иштеп чыгууда адис. Желе тиркемелердин коопсуздугун текшерүү, тармактык чабуулдардан коргоо жана маалыматтарды шифрлөө боюнча билими бар.",
    fees: 540,
    address: { line1: "teams", line2: "Community Server" },
  },
  {
    _id: "tut4",
    name: "Студент 4",
    image: tut4,
    speciality: "Компьютер инженериясы",
    degree: "3.53 GPA",
    experience: "5 жылдык тажрыйба",
    about:
      "Булуттуу эсептөө жана DevOps: Студент булуттук кызматтарды (AWS, Azure, Google Cloud) жана DevOps куралдарын (Docker, Kubernetes, Jenkins) колдонуп, инфраструктураны автоматташтырат жана CI/CD процессин оптималдаштырат.",
    fees: 640,
    address: { line1: "google meet", line2: "Corporate Teams Room" },
  },
  {
    _id: "tut6",
    name: "Студент 6",
    image: tut6,
    speciality: "Компьютер инженериясы",
    degree: "3.37 GPA",
    experience: "4 жылдык тажрыйба",
    about:
      "Машиналык окутуу жана жасалма интеллект: Студент ар кандай машиналык окутуу алгоритмдерин жана жасалма интеллект ыкмаларын колдонот. Нейрондук тармактарды үйрөтүү, маалыматтарды алдын ала иштетүү жана класстердик анализ жүргүзүү боюнча терең билими бар.",
    fees: 620,
    address: { line1: "teams", line2: "Online Meeting Room" },
  },
  {
    _id: "tut10",
    name: "Студент 10",
    image: tut10,
    speciality: "Компьютер инженериясы",
    degree: "2.34 GPA",
    experience: "1 жылдык тажрыйба",
    about:
      "Оюн иштеп чыгуу жана виртуалдык чындык: Студент Unity жана Unreal Engine менен оюндарды иштеп чыгат. Виртуалдык чындык (VR) жана кеңейтилген чындык (AR) технологияларын колдонуп, интерактивдүү тажрыйбаларды түзөт.",
    fees: 950,
    address: { line1: "zoom", line2: "Community Server" },
  },
  {
    _id: "tut12",
    name: "Студент 12",
    image: tut12,
    speciality: "Компьютер инженериясы",
    degree: "3.62 GPA",
    experience: "1 жылдык тажрыйба",
    about:
      "Веб иштеп чыгуу жана интерфейс дизайн: Студент веб тиркемелерди иштеп чыгууда React, Angular, жана Vue.js сыяктуу технологияларды колдонот. UI/UX дизайн принциптерин колдонуп, колдонуучуга ыңгайлуу интерфейстерди түзөт.",
    fees: 980,
    address: { line1: "teams", line2: "Virtual Classroom" },
  },
  {
    _id: "tut13",
    name: "Студент 13",
    image: tut13,
    speciality: "Компьютер инженериясы",
    degree: "3.85 GPA",
    experience: "1 жылдык тажрыйба",
    about:
      "Мобилдик тиркемелерди иштеп чыгуу: Студент iOS жана Android платформаларында мобилдик тиркемелерди Flutter жана React Native колдонуусу менен иштеп чыгат. APIлер менен иштөө жана колдонмонун өндүрүмдүүлүгүн оптималдаштырат.",
    fees: 980,
    address: { line1: "google meet", line2: "Virtual Classroom" },
  },
  {
    _id: "tut14",
    name: "Студент 14",
    image: tut14,
    speciality: "Компьютер инженериясы",
    degree: "2.90 GPA",
    experience: "1 жылдык тажрыйба",
    about:
      "Маалыматтар инженериясы жана анализ: Студент чоң маалыматтар менен иштөөдө тажрыйбалуу. Python, R жана SQL менен маалыматтарды анализдеп, бизнес чечимдерди кабыл алуу үчүн аналитикалык инструменттерди колдонот.",
    fees: 320,
    address: { line1: "google meet", line2: "Corporate Teams Room" },
  },
  {
    _id: "tut18",
    name: "Студент 18",
    image: tut18,
    speciality: "Компьютер инженериясы",
    degree: "3.12 GPA",
    experience: "2 жылдык тажрыйба",
    about:
      "Веб иштеп чыгуу жана интерфейс дизайн: Студент веб тиркемелерди иштеп чыгууда React, Angular, жана Vue.js сыяктуу технологияларды колдонот. UI/UX дизайн принциптерин колдонуп, колдонуучуга ыңгайлуу интерфейстерди түзөт.",
    fees: 460,
    address: { line1: "discord", line2: "Online Meeting Room" },
  },
  {
    _id: "tut20",
    name: "Студент 20",
    image: tut20,
    speciality: "Компьютер инженериясы",
    degree: "2.85 GPA",
    experience: "3 жылдык тажрыйба",
    about:
      "Булуттуу эсептөө жана DevOps: Студент булуттук кызматтарды (AWS, Azure, Google Cloud) жана DevOps куралдарын (Docker, Kubernetes, Jenkins) колдонуп, инфраструктураны автоматташтырат жана CI/CD процессин оптималдаштырат.",
    fees: 600,
    address: { line1: "teams", line2: "Virtual Classroom" },
  },
  {
    _id: "tut23",
    name: "Студент 23",
    image: tut23,
    speciality: "Компьютер инженериясы",
    degree: "2.29 GPA",
    experience: "3 жылдык тажрыйба",
    about:
      "Машиналык окутуу жана жасалма интеллект: Студент ар кандай машиналык окутуу алгоритмдерин жана жасалма интеллект ыкмаларын колдонот. Нейрондук тармактарды үйрөтүү, маалыматтарды алдын ала иштетүү жана класстердик анализ жүргүзүү боюнча терең билими бар.",
    fees: 430,
    address: { line1: "discord", line2: "Virtual Classroom" },
  },
  {
    _id: "tut31",
    name: "Студент 31",
    image: tut31,
    speciality: "Компьютер инженериясы",
    degree: "2.47 GPA",
    experience: "3 жылдык тажрыйба",
    about:
      "Машиналык окутуу жана жасалма интеллект: Студент ар кандай машиналык окутуу алгоритмдерин жана жасалма интеллект ыкмаларын колдонот. Нейрондук тармактарды үйрөтүү, маалыматтарды алдын ала иштетүү жана класстердик анализ жүргүзүү боюнча терең билими бар.",
    fees: 580,
    address: { line1: "discord", line2: "Corporate Teams Room" },
  },
  {
    _id: "tut33",
    name: "Студент 33",
    image: tut33,
    speciality: "Компьютер инженериясы",
    degree: "3.53 GPA",
    experience: "5 жылдык тажрыйба",
    about:
      "Булуттуу эсептөө жана DevOps: Студент булуттук кызматтарды (AWS, Azure, Google Cloud) жана DevOps куралдарын (Docker, Kubernetes, Jenkins) колдонуп, инфраструктураны автоматташтырат жана CI/CD процессин оптималдаштырат.",
    fees: 640,
    address: { line1: "google meet", line2: "Corporate Teams Room" },
  },
  {
    _id: "tut35",
    name: "Студент 35",
    image: tut35,
    speciality: "Компьютер инженериясы",
    degree: "3.62 GPA",
    experience: "1 жылдык тажрыйба",
    about:
      "Веб иштеп чыгуу жана интерфейс дизайн: Студент веб тиркемелерди иштеп чыгууда React, Angular, жана Vue.js сыяктуу технологияларды колдонот. UI/UX дизайн принциптерин колдонуп, колдонуучуга ыңгайлуу интерфейстерди түзөт.",
    fees: 980,
    address: { line1: "teams", line2: "Virtual Classroom" },
  },
  {
    _id: "tut37",
    name: "Студент 37",
    image: tut37,
    speciality: "Компьютер инженериясы",
    degree: "3.97 GPA",
    experience: "1 жылдык тажрыйба",
    about:
      "Оюн иштеп чыгуу жана виртуалдык чындык: Студент Unity жана Unreal Engine менен оюндарды иштеп чыгат. Виртуалдык чындык (VR) жана кеңейтилген чындык (AR) технологияларын колдонуп, интерактивдүү тажрыйбаларды түзөт.",
    fees: 330,
    address: { line1: "discord", line2: "Community Server" },
  },
  {
    _id: "tut39",
    name: "Студент 39",
    image: tut39,
    speciality: "Компьютер инженериясы",
    degree: "2.90 GPA",
    experience: "1 жылдык тажрыйба",
    about:
      "Маалыматтар инженериясы жана анализ: Студент чоң маалыматтар менен иштөөдө тажрыйбалуу. Python, R жана SQL менен маалыматтарды анализдеп, бизнес чечимдерди кабыл алуу үчүн аналитикалык инструменттерди колдонот.",
    fees: 320,
    address: { line1: "google meet", line2: "Corporate Teams Room" },
  },
  {
    _id: "tut41",
    name: "Студент 41",
    image: tut41,
    speciality: "Компьютер инженериясы",
    degree: "2.90 GPA",
    experience: "1 жылдык тажрыйба",
    about:
      "Маалыматтар инженериясы жана анализ: Студент чоң маалыматтар менен иштөөдө тажрыйбалуу. Python, R жана SQL менен маалыматтарды анализдеп, бизнес чечимдерди кабыл алуу үчүн аналитикалык инструменттерди колдонот.",
    fees: 520,
    address: { line1: "google meet", line2: "Corporate Teams Room" },
  },
  {
    _id: "tut42",
    name: "Студент 42",
    image: tut42,
    speciality: "Компьютер инженериясы",
    degree: "3.90 GPA",
    experience: "1 жылдык тажрыйба",
    about:
      "Маалыматтар инженериясы жана анализ: Студент чоң маалыматтар менен иштөөдө тажрыйбалуу. Python, R жана SQL менен маалыматтарды анализдеп, бизнес чечимдерди кабыл алуу үчүн аналитикалык инструменттерди колдонот.",
    fees: 590,
    address: { line1: "google meet", line2: "Corporate Teams Room" },
  },
  {
    _id: "tut43",
    name: "Студент 43",
    image: tut43,
    speciality: "Компьютер инженериясы",
    degree: "2.90 GPA",
    experience: "1 жылдык тажрыйба",
    about:
      "Маалыматтар инженериясы жана анализ: Студент чоң маалыматтар менен иштөөдө тажрыйбалуу. Python, R жана SQL менен маалыматтарды анализдеп, бизнес чечимдерди кабыл алуу үчүн аналитикалык инструменттерди колдонот.",
    fees: 310,
    address: { line1: "google meet", line2: "Corporate Teams Room" },
  },
  {
    _id: "tut2131",
    name: "Студент 2131",
    image: tut2131,
    speciality: "Компьютер инженериясы",
    degree: "2.90 GPA",
    experience: "1 жылдык тажрыйба",
    about:
      "Маалыматтар инженериясы жана анализ: Студент чоң маалыматтар менен иштөөдө тажрыйбалуу. Python, R жана SQL менен маалыматтарды анализдеп, бизнес чечимдерди кабыл алуу үчүн аналитикалык инструменттерди колдонот.",
    fees: 320,
    address: { line1: "google meet", line2: "Corporate Teams Room" },
  },
  {
    _id: "tut2133",
    name: "Студент 2133",
    image: tut2133,
    speciality: "Компьютер инженериясы",
    degree: "3.30 GPA",
    experience: "1 жылдык тажрыйба",
    about:
      "Маалыматтар инженериясы жана анализ: Студент чоң маалыматтар менен иштөөдө тажрыйбалуу. Python, R жана SQL менен маалыматтарды анализдеп, бизнес чечимдерди кабыл алуу үчүн аналитикалык инструменттерди колдонот.",
    fees: 390,
    address: { line1: "google meet", line2: "Corporate Teams Room" },
  },
];
