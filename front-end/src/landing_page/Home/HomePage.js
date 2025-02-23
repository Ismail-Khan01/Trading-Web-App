import React from 'react'
import Education from './Education';
import Hero from './Hero';
import Navbar from '../Navbar';
import Pricing from './pricing';
import Stats from './Stats';
import Openaccount from '../OpenAccount';



function HomePage() {
    return (
        <>
            <Hero />
            <Stats />
            <Pricing />
            <Education />
            <Openaccount />


        </>
    )
}
export default HomePage;