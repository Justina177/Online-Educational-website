import React, { Fragment } from 'react'
import Header from '../../Components/Header/Header'
import HeroSection from '../../Components/Hero-Section/HeroSection'
import Company from '../../Components/Company/Company'
import AboutUs from '../../Components/About/AboutUs'
import Courses from '../../Components/Courses-section/Courses'

const Homepage = () => {
  return (
    <Fragment>
        <Header />
        <HeroSection />
        <Company />
        <AboutUs />
        <Courses />
    </Fragment>
  )
}

export default Homepage