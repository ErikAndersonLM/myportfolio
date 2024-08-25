import { useState } from 'react'
import Hero from './sections/Hero/Hero'
import Navbar from '../../components/Nav-Bar/NavBar'
import About from './sections/About/About'
import Projects from './sections/Projects/Projects'


const Home = () => {

  return (
    <>
      <Navbar/>
      <Hero/>
      <div id="about">
        <About/>
      </div>
      <div id="projects">
        <Projects/>
      </div>
    </>
  )
}

export default Home
