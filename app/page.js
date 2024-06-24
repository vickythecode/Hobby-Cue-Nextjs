"use client"
import Home from '@/component/Home'
import Navbar from '@/component/Navbar'
import Features from '@/component/Features'
import YourExp from '@/component/YourExp'
import Testimonials from '@/component/Testimonials'
import End from '@/component/End'
import Footer from '@/component/Footer'
import React from 'react'


const page = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Features/>
      <YourExp/>
      <Testimonials/>
      <End/>
      <Footer/>
    </>
  )
}

export default page