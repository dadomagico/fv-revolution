import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyParticipate from './components/WhyParticipate';
import Program from './components/Program';
import Speakers from './components/Speakers';
import NetworkingSection from './components/NetworkingSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <WhyParticipate />
      <Program />
      <Speakers />
      <NetworkingSection />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;