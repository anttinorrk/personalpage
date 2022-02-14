import './App.scss'
import Navbar from './components/Navbar'
import Frontpage from './components/pages/Frontpage'
import Projectpage from './components/pages/Projectpage'
import Contact from './components/pages/Contact'
import React, {useEffect, useState, useCallback} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/parts/Footer'
import { ParallaxProvider } from 'react-scroll-parallax'



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
  const handlePath = useCallback(
    () => {
    setPathState(window.location.pathname)
  }, [window.location.pathname])
    
  const comparision = () => setBlack(pathState === '/' && window.pageYOffset < landingState - 50)
  
  useEffect(() => {
    window.addEventListener('scroll', () =>
        comparision
    )
})
  //Kun sivu vaihtuu, muutetaan tarvittaessa navbarin väriä
  useEffect(() => {
    comparision
  }, [pathState])


  return (
    <ParallaxProvider>
      <Router>
        <div className="App">
          
          <Routes>
            <Route path='/' element={<Frontpage appCallback={handleCallback} pathCallback={handlePath} />} />
            <Route path='/projects' element={<Projectpage pathCallback={handlePath} />} />
            <Route path='/contact' element={<Contact pathCallback={handlePath} />} />
          </Routes>
          <Footer />
          <Navbar black={black} pathCallback={handlePath} />
        </div>
      </Router>
    </ParallaxProvider>
  );
}

export default App
