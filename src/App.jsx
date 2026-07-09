import React from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Publications from './components/Publications'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Publications />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  )
}

export default App
