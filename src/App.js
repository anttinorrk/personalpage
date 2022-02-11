import './App.scss'
import Navbar from './components/Navbar'
import Frontpage from './components/pages/Frontpage'
import Projectpage from './components/pages/Projectpage'
import Contact from './components/pages/Contact'
import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/parts/Footer'



const App = () => {
  //path
  const [pathState, setPathState] = useState('')
  //landingpagen korkeus
  const [landingState, setLandingState] = useState(0)
  //tallentaa, pitääkö navbarin olla musta
  const  [black, setBlack] = useState(true)
  //asettaa landingpagen korkeuden
  const handleCallback = (landingData) => {
      setLandingState(landingData)
      console.log('in App:', landingData)
  }
  //tallentaa, millä sivulla ollaan
  const handlePath = () => {
    setPathState(window.location.pathname)
  }
  
  useEffect(() => {
    window.addEventListener('scroll', () =>
        setBlack(pathState === '/' && window.pageYOffset < landingState + 70)
    )
})
  //Kun sivu vaihtuu, muutetaan tarvittaessa navbarin väriä
  useEffect(() => {
    setBlack(pathState === '/' && window.pageYOffset < landingState + 70)
  }, [pathState])
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path='/' element={<Frontpage appCallback={handleCallback} pathCallback={handlePath} />} />
          <Route path='/projects' element={<Projectpage pathCallback={handlePath} />} />
          <Route path='/contact' element={<Contact pathCallback={handlePath} />} />
        </Routes>
        <Footer />
        <Navbar black={black} />
      </div>
    </Router>
   
  );
}

export default App
