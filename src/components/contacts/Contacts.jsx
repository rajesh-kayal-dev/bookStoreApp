import React from 'react'
import Navbar from "../../components/Navbar"
import Footer from '../../components/Footer'
import ContactForm from '../../components/ContactForm'

const Contacts = () => {
  return (
    <>
    <Navbar/>
    <div className=' min-h-screen '>
    <ContactForm/>
    </div>
    
    <Footer/>
    </>
  )
}

export default Contacts