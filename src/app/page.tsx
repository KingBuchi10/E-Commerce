import React from 'react'
import NavBar from './components/navbar/NavBar'
import Hero from './components/hero/Hero'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Services from './components/Services/Services'
import Banner from './components/banner/Banner'



const page = () => {
  return (
    <div className="bg-white dark:bg-gray-900 duration-200 dark:text-white">
      <NavBar/>
      <Hero/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner />
    </div>
  )
}

export default page
