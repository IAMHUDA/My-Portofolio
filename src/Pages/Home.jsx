import React from 'react';
import Navbar from '../Components/Navbar';
import AboutUs from '../Components/AboutUs';
import Footer from '../Components/Footer';
import '../App.css'
 // Pastikan Anda mengimpor komponen AboutUs

const Home = () => {
    return (
        <div className='main'>
            <Navbar /> 
            <AboutUs />
            <Footer />
        </div>
    )
}

export default Home;
