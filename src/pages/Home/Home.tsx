import { useState } from 'react'
import Hero from './sections/Hero/Hero'
import Navbar from '../../components/Nav-Bar/NavBar'
import About from './sections/About/About'


const Home = () => {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
    </>
  )
}

export default Home
