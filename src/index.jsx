import React from 'react'
import './style.css'
import Title from "./Title.jsx"
import MainContent from './MainContent.jsx'
import Footer from './Footer.jsx'


function TributePage() {
  return (
    <div>
      <Title />
      <img className="img" src="src/assets/sofiane-pamart.jpg"/>
      <MainContent />
      <br></br>
      <Footer />
    </div>
  )
}

export default TributePage
