import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, Award, Clock } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-11-29T09:00:00');
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToRegistration = () => {
    const element = document.getElementById('iscrizione');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>
      
      {/* Hero Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="/images/location_sala_2.jpg"
          alt="New image 2"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-gray-900">Non sei qui per</span>
            <br />
            <span className="gradient-text">aggiornarti.</span>
            <br />
            <span className="text-gray-900">Sei qui per</span>
            <br />
            <span className="bg-gradient-to-r from-accent-600 to-accent-700 bg-clip-text text-transparent">
              cambiare tutto.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto animate-slide-up leading-relaxed">
            L'evento esclusivo che trasformerà concretamente il tuo business farmaceutico. 
            <strong className="text-primary-700"> Strategie rivoluzionarie, risultati immediati.</strong>
          </p>

          {/* CTA Button */}
          <div className="mb-16 animate-bounce-gentle">
            <button 
              onClick={scrollToRegistration}
              className="btn-primary text-xl px-12 py-6 inline-flex items-center space-x-3"
            >
              <span>Prenota il tuo posto ora!</span>
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg card-hover">
            <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">250</div>
            <div className="text-gray-600">Posti Esclusivi</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg card-hover">
            <Clock className="h-12 w-12 text-secondary-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">8h</div>
            <div className="text-gray-600">Formazione Intensiva</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg card-hover">
            <Award className="h-12 w-12 text-accent-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">Top</div>
            <div className="text-gray-600">Esperti del Settore</div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-center text-2xl font-bold text-gray-900 mb-6">
            Mancano solo:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-primary-600 text-white rounded-xl p-6">
              <div className="text-3xl font-bold">{timeLeft.days}</div>
              <div className="text-sm opacity-90">Giorni</div>
            </div>
            <div className="bg-secondary-600 text-white rounded-xl p-6">
              <div className="text-3xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm opacity-90">Ore</div>
            </div>
            <div className="bg-accent-600 text-white rounded-xl p-6">
              <div className="text-3xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm opacity-90">Minuti</div>
            </div>
            <div className="bg-gray-700 text-white rounded-xl p-6">
              <div className="text-3xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm opacity-90">Secondi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;