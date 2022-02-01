import './App.css'
import Navbar from './components/Navbar'
import Frontpage from './components/pages/Frontpage'
import Projectpage from './components/pages/Projectpage'
import Contact from './components/pages/Contact'
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/parts/Footer'

const history = useRouterHistory(createHistory)({
  basename: '/projectFolder'
})

const App = () => {
  return (
    <Router history={history}>
      <div className="App">
        
        <Routes>
          <Route path='/' element={<Frontpage />} />
          <Route path='/projects' element={<Projectpage />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
        <Navbar />
      </div>
      
    </Router>
  );
}

export default App
