import React from 'react'
import Header from '../components/Header'
import DepartmentsMenu from '../components/DepartmentsMenu'
import TopTutors from '../components/TopTutors'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <DepartmentsMenu />
      <TopTutors />
      <Banner />
    </div>
  )
}

export default Home