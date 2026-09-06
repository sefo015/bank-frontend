import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Security from '../components/Security';
import Calculator from '../components/Calculator';
import About from '../components/About';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen bg-bankPrimary text-bankLight font-sans selection:bg-bankAccent selection:text-bankPrimary">
            <Navbar />
            <Hero />
            <Services />
            <Security />
            <Calculator />
            <About />
            <Footer />
        </div>
    );
};

export default Home;