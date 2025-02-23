import logo from './logo.svg'
import profile_pic from './profile_pic.jpg'
import dropdown_icon from './dropdown_icon.svg'
import arrow_icon from './arrow_icon.svg'
import group_profiles from './group_profiles.png'
import header_img from './header_img.png'
import Bio from './Bio.svg'
import Eco from './Eco.svg'
import KimMuh from './KimMuh.svg'
import MuhBil from './MuhBil.svg'
import Music from './Music.svg'
import Radio from './Radio.svg'
import Spor from './Spor.svg'
import tut1 from './2004.01001.jpg'
import tut2 from './2004.01002.jpg'
import tut3 from './2004.01003.jpg'
import tut4 from './2004.01004.jpg'
import tut6 from './2004.01006.jpg'
import tut9 from './2004.01009.jpg'
import tut10 from './2004.01010.jpg'
import tut12 from './2004.01012.jpg'
import tut13 from './2004.01013.jpg'
import tut14 from './2004.01014.jpg'
import tut17 from './2004.01017.jpg'
import tut18 from './2004.01018.jpg'
import tut19 from './2004.01019.jpg'
import tut20 from './2004.01020.jpg'
import tut23 from './2004.01023.jpg'
import tut25 from './2004.01025.jpg'
import tut31 from './2004.01031.jpg'
import appointment_img from './appointment_img.png'




export const assets = {
   logo,
   profile_pic,
   dropdown_icon,
   arrow_icon,
   group_profiles,
   header_img,
   appointment_img
}

export const departmentData = [
   {
       speciality: 'Компьютер инженериясы',
       image: MuhBil
   },
   {
       speciality: 'Музыка бөлүмү',
       image: Music
   },
   {
       speciality: 'Химия инженериясы',
       image: KimMuh
   },
   {
       speciality: 'Спорт билимдери',
       image: Spor
   },
   {
       speciality: 'Радио, телевидение',
       image: Radio
   },
   {
       speciality: 'Финансы жана кредит',
       image: Eco
   },
   {
      speciality: 'Биология илими',
      image: Bio
  },
]

export const tutors =[
    {'_id': 'tut1',
        'name': 'Студент 1',
        'image': tut1,
        'speciality': 'Компьютер инженериясы',
        'degree': '2.80 GPA',
        'experience': '2 жылдык тажрыйба',
        'about': 'Булуттуу эсептөө жана DevOps: Студент булуттук кызматтарды (AWS, Azure, Google Cloud) жана DevOps куралдарын (Docker, Kubernetes, Jenkins) колдонуп, инфраструктураны автоматташтырат жана CI/CD процессин оптималдаштырат.',
        'fees': 23,
        'address': {'line1': 'zoom', 'line2': 'Community Server'}},
       {'_id': 'tut2',
        'name': 'Студент 2',
        'image': tut2,
        'speciality': 'Компьютер инженериясы',
        'degree': '3.36 GPA',
        'experience': '2 жылдык тажрыйба',
        'about': 'Маалыматтар инженериясы жана анализ: Студент чоң маалыматтар менен иштөөдө тажрыйбалуу. Python, R жана SQL менен маалыматтарды анализдеп, бизнес чечимдерди кабыл алуу үчүн аналитикалык инструменттерди колдонот.',
        'fees': 38,
        'address': {'line1': 'teams', 'line2': 'Community Server'}},
       {'_id': 'tut3',
        'name': 'Студент 3',
        'image': tut3,
        'speciality': 'Компьютер инженериясы',
        'degree': '2.16 GPA',
        'experience': '3 жылдык тажрыйба',
        'about': 'Тармактык коопсуздук жана маалыматтык коопсуздук: Студент коопсуздук стратегияларын иштеп чыгууда адис. Желе тиркемелердин коопсуздугун текшерүү, тармактык чабуулдардан коргоо жана маалыматтарды шифрлөө боюнча билими бар.',
        'fees': 54,
        'address': {'line1': 'teams', 'line2': 'Community Server'}},
       {'_id': 'tut4',
        'name': 'Студент 4',
        'image': tut4,
        'speciality': 'Компьютер инженериясы',
        'degree': '3.53 GPA',
        'experience': '5 жылдык тажрыйба',
        'about': 'Булуттуу эсептөө жана DevOps: Студент булуттук кызматтарды (AWS, Azure, Google Cloud) жана DevOps куралдарын (Docker, Kubernetes, Jenkins) колдонуп, инфраструктураны автоматташтырат жана CI/CD процессин оптималдаштырат.',
        'fees': 64,
        'address': {'line1': 'google meet', 'line2': 'Corporate Teams Room'}},
       {'_id': 'tut23',
        'name': 'Студент 5',
        'image': tut23,
        'speciality': 'Компьютердик инженерия',
        'degree': '3.37 GPA',
        'experience': '4 жылдык тажрыйба',
        'about': 'Машиналык окутуу жана жасалма интеллект: Студент ар кандай машиналык окутуу алгоритмдерин жана жасалма интеллект ыкмаларын колдонот. Нейрондук тармактарды үйрөтүү, маалыматтарды алдын ала иштетүү жана класстердик анализ жүргүзүү боюнча терең билими бар.',
        'fees': 62,
        'address': {'line1': 'teams', 'line2': 'Online Meeting Room'}},
       {'_id': 'tut6',
        'name': 'Студент 6',
        'image': tut6,
        'speciality': 'Компьютер инженериясы',
        'degree': '3.99 GPA',
        'experience': '1 жылдык тажрыйба',
        'about': 'Мобилдик тиркемелерди иштеп чыгуу: Студент iOS жана Android платформаларында мобилдик тиркемелерди Flutter жана React Native колдонуусу менен иштеп чыгат. APIлер менен иштөө жана колдонмонун өндүрүмдүүлүгүн оптималдаштырат.',
        'fees': 41,
        'address': {'line1': 'discord', 'line2': 'Virtual Classroom'}},
       {'_id': 'tut25',
        'name': 'Студент 7',
        'image': tut25,
        'speciality': 'Компьютер инженериясы',
        'degree': '2.00 GPA',
        'experience': '5 жылдык тажрыйба',
        'about': 'Веб иштеп чыгуу жана интерфейс дизайн: Студент веб тиркемелерди иштеп чыгууда React, Angular, жана Vue.js сыяктуу технологияларды колдонот. UI/UX дизайн принциптерин колдонуп, колдонуучуга ыңгайлуу интерфейстерди түзөт.',
        'fees': 49,
        'address': {'line1': 'discord', 'line2': 'Community Server'}},
       {'_id': 'tut14',
        'name': 'Студент 8',
        'image': tut14,
        'speciality': 'Компьютер инженериясы',
        'degree': '3.97 GPA',
        'experience': '1 жылдык тажрыйба',
        'about': 'Оюн иштеп чыгуу жана виртуалдык чындык: Студент Unity жана Unreal Engine менен оюндарды иштеп чыгат. Виртуалдык чындык (VR) жана кеңейтилген чындык (AR) технологияларын колдонуп, интерактивдүү тажрыйбаларды түзөт.',
        'fees': 33,
        'address': {'line1': 'discord', 'line2': 'Community Server'}},
       {'_id': 'tut18',
        'name': 'Студент 9',
        'image': tut18,
        'speciality': 'Компьютер инженериясы',
        'degree': '3.98 GPA',
        'experience': '3 жылдык тажрыйба',
        'about': 'Программалаштыруу тилдери жана алгоритмдер: Студент C++, Python жана Java сыяктуу программалоо тилдеринде адис. Алгоритмдерди оптималдаштыруу, маалыматтык структураларды колдонуу жана чечүүчү код жазуу боюнча күчтүү жөндөмдөрү бар.',
        'fees': 36,
        'address': {'line1': 'zoom', 'line2': 'Online Meeting Room'}},
       {'_id': 'tut10',
        'name': 'Студент 10',
        'image': tut10,
        'speciality': 'Компьютер инженериясы',
        'degree': '2.98 GPA',
        'experience': '1 жылдык тажрыйба',
        'about': 'Булуттуу эсептөө жана DevOps: Студент булуттук кызматтарды (AWS, Azure, Google Cloud) жана DevOps куралдарын (Docker, Kubernetes, Jenkins) колдонуп, инфраструктураны автоматташтырат жана CI/CD процессин оптималдаштырат.',
        'fees': 47,
        'address': {'line1': 'teams', 'line2': 'Virtual Classroom'}},
       {'_id': 'tut1',
        'name': 'Студент 11',
        'image': tut1,
        'speciality': 'Компьютер инженериясы',
        'degree': '2.34 GPA',
        'experience': '1 жылдык тажрыйба',
        'about': 'Оюн иштеп чыгуу жана виртуалдык чындык: Студент Unity жана Unreal Engine менен оюндарды иштеп чыгат. Виртуалдык чындык (VR) жана кеңейтилген чындык (AR) технологияларын колдонуп, интерактивдүү тажрыйбаларды түзөт.',
        'fees': 95,
        'address': {'line1': 'zoom', 'line2': 'Community Server'}},
       {'_id': 'tut12',
        'name': 'Студент 12',
        'image': tut12,
        'speciality': 'Компьютер инженериясы',
        'degree': '3.62 GPA',
        'experience': '1 жылдык тажрыйба',
        'about': 'Веб иштеп чыгуу жана интерфейс дизайн: Студент веб тиркемелерди иштеп чыгууда React, Angular, жана Vue.js сыяктуу технологияларды колдонот. UI/UX дизайн принциптерин колдонуп, колдонуучуга ыңгайлуу интерфейстерди түзөт.',
        'fees': 98,
        'address': {'line1': 'teams', 'line2': 'Virtual Classroom'}},
       {'_id': 'tut13',
        'name': 'Студент 13',
        'image': tut13,
        'speciality': 'Компьютер инженериясы',
        'degree': '3.85 GPA',
        'experience': '1 жылдык тажрыйба',
        'about': 'Мобилдик тиркемелерди иштеп чыгуу: Студент iOS жана Android платформаларында мобилдик тиркемелерди Flutter жана React Native колдонуусу менен иштеп чыгат. APIлер менен иштөө жана колдонмонун өндүрүмдүүлүгүн оптималдаштырат.',
        'fees': 98,
        'address': {'line1': 'google meet', 'line2': 'Virtual Classroom'}},
       {'_id': 'tut14',
        'name': 'Студент 14',
        'image': tut14,
        'speciality': 'Компьютер инженериясы',
        'degree': '2.90 GPA',
        'experience': '1 жылдык тажрыйба',
        'about': 'Маалыматтар инженериясы жана анализ: Студент чоң маалыматтар менен иштөөдө тажрыйбалуу. Python, R жана SQL менен маалыматтарды анализдеп, бизнес чечимдерди кабыл алуу үчүн аналитикалык инструменттерди колдонот.',
        'fees': 32,
        'address': {'line1': 'google meet', 'line2': 'Corporate Teams Room'}},
       {'_id': 'tut19',
        'name': 'Студент 15',
        'image': tut19,
        'speciality': 'Компьютер инженериясы',
        'degree': '3.12 GPA',
        'experience': '2 жылдык тажрыйба',
        'about': 'Веб иштеп чыгуу жана интерфейс дизайн: Студент веб тиркемелерди иштеп чыгууда React, Angular, жана Vue.js сыяктуу технологияларды колдонот. UI/UX дизайн принциптерин колдонуп, колдонуучуга ыңгайлуу интерфейстерди түзөт.',
        'fees': 46,
        'address': {'line1': 'discord', 'line2': 'Online Meeting Room'}},
       {'_id': 'tut31',
        'name': 'Студент 16',
        'image': tut31,
        'speciality': 'Компьютер инженериясы',
        'degree': '2.85 GPA',
        'experience': '3 жылдык тажрыйба',
        'about': 'Булуттуу эсептөө жана DevOps: Студент булуттук кызматтарды (AWS, Azure, Google Cloud) жана DevOps куралдарын (Docker, Kubernetes, Jenkins) колдонуп, инфраструктураны автоматташтырат жана CI/CD процессин оптималдаштырат.',
        'fees': 60,
        'address': {'line1': 'teams', 'line2': 'Virtual Classroom'}},
       {'_id': 'tut17',
        'name': 'Студент 17',
        'image': tut17,
        'speciality': 'Компьютер инженериясы',
        'degree': '2.29 GPA',
        'experience': '3 жылдык тажрыйба',
        'about': 'Машиналык окутуу жана жасалма интеллект: Студент ар кандай машиналык окутуу алгоритмдерин жана жасалма интеллект ыкмаларын колдонот. Нейрондук тармактарды үйрөтүү, маалыматтарды алдын ала иштетүү жана класстердик анализ жүргүзүү боюнча терең билими бар.',
        'fees': 43,
        'address': {'line1': 'discord', 'line2': 'Virtual Classroom'}},
       {'_id': 'tut18',
        'name': 'Студент 18',
        'image': tut18,
        'speciality': 'Компьютер инженериясы',
        'degree': '2.47 GPA',
        'experience': '3 жылдык тажрыйба',
        'about': 'Машиналык окутуу жана жасалма интеллект: Студент ар кандай машиналык окутуу алгоритмдерин жана жасалма интеллект ыкмаларын колдонот. Нейрондук тармактарды үйрөтүү, маалыматтарды алдын ала иштетүү жана класстердик анализ жүргүзүү боюнча терең билими бар.',
        'fees': 58,
        'address': {'line1': 'discord', 'line2': 'Corporate Teams Room'}},
        {'_id': 'tut19',
            'name': 'Студент 19',
            'image': tut19,
            'speciality': 'Компьютер инженериясы',
            'degree': '3.53 GPA',
            'experience': '5 жылдык тажрыйба',
            'about': 'Булуттуу эсептөө жана DevOps: Студент булуттук кызматтарды (AWS, Azure, Google Cloud) жана DevOps куралдарын (Docker, Kubernetes, Jenkins) колдонуп, инфраструктураны автоматташтырат жана CI/CD процессин оптималдаштырат.',
            'fees': 64,
            'address': {'line1': 'google meet', 'line2': 'Corporate Teams Room'}},
            {'_id': 'tut20',
                'name': 'Студент 20',
                'image': tut20,
                'speciality': 'Компьютер инженериясы',
                'degree': '3.62 GPA',
                'experience': '1 жылдык тажрыйба',
                'about': 'Веб иштеп чыгуу жана интерфейс дизайн: Студент веб тиркемелерди иштеп чыгууда React, Angular, жана Vue.js сыяктуу технологияларды колдонот. UI/UX дизайн принциптерин колдонуп, колдонуучуга ыңгайлуу интерфейстерди түзөт.',
                'fees': 98,
                'address': {'line1': 'teams', 'line2': 'Virtual Classroom'}},
                {'_id': 'tut23',
                    'name': 'Студент 8',
                    'image': tut23,
                    'speciality': 'Компьютер инженериясы',
                    'degree': '3.97 GPA',
                    'experience': '1 жылдык тажрыйба',
                    'about': 'Оюн иштеп чыгуу жана виртуалдык чындык: Студент Unity жана Unreal Engine менен оюндарды иштеп чыгат. Виртуалдык чындык (VR) жана кеңейтилген чындык (AR) технологияларын колдонуп, интерактивдүү тажрыйбаларды түзөт.',
                    'fees': 33,
                    'address': {'line1': 'discord', 'line2': 'Community Server'}},
                    {'_id': 'tut31',
                        'name': 'Студент 31',
                        'image': tut31,
                        'speciality': 'Компьютер инженериясы',
                        'degree': '2.90 GPA',
                        'experience': '1 жылдык тажрыйба',
                        'about': 'Маалыматтар инженериясы жана анализ: Студент чоң маалыматтар менен иштөөдө тажрыйбалуу. Python, R жана SQL менен маалыматтарды анализдеп, бизнес чечимдерди кабыл алуу үчүн аналитикалык инструменттерди колдонот.',
                        'fees': 32,
                        'address': {'line1': 'google meet', 'line2': 'Corporate Teams Room'}},
]