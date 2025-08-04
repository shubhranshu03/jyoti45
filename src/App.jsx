import React from 'react'
import './App.css'
import Header from './Components/Header'
import Skills from './Components/Skills'
import WorkExperience from './Components/WorkExperience'
import SocialLinks from './Components/SocialLinks'

function App() {
  return (
    <div className="app">
      <main className="main-content">
        <Header />
        <Skills />
        <WorkExperience />
        <SocialLinks />
      </main>
    </div>
  )
}

export default App 