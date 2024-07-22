import React from 'react'
import { Home } from './home/Home'
import { Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Singnup from './components/Singnup'
import Contacts from './components/contacts/Contacts'
import Abouts from './components/about/Abouts'

const App = () => {
  return (<>
 
 <div >
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course' element={<Courses/>}/>
    <Route path='/contact' element={<Contacts/>}/>
    <Route path='/about' element={<Abouts/>}/>
    <Route path='/signup' element={<Singnup/>}/>
  </Routes>
  </div>
  </>
    
  )
}

export default App