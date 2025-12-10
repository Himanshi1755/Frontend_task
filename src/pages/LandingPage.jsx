import { useState } from 'react'
import OurProjects from '../components/ourProjects'
import HappyClients from '../components/happyClients';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';
import ContactSection from '../components/ContactSection';
import AboutUs from '../components/AboutUs';

function LandingPage() {


  return (
    <>
      <Header />
      <ContactSection/>
      <AboutUs/>
      <OurProjects />
      <HappyClients />
      <Subscribe />
    </>
  )
}

export default LandingPage;
