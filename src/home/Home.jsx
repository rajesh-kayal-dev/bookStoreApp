import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Freebook from '../components/Freebook'

export const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Freebook />
            <Footer />
        </>
    )
}
