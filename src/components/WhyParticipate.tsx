import React, { useEffect, useRef } from 'react';
import { TrendingUp, DollarSign, Users2, Smartphone, Award, Target } from 'lucide-react';

const WhyParticipate: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.scroll-reveal');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('revealed');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Riduzione Costi Significativa",
      description: "Strategie pratiche e collaudate per ottimizzare le spese operative e aumentare la redditività della tua farmacia."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Aumento Fatturato Rapido",
      description: "Metodi comprovati per incrementare vendite e margini attraverso tecniche di cross-selling e up-selling efficaci."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Leadership in Dermocosmesi",
      description: "Approcci innovativi per differenziarti nel settore benessere e diventare il punto di riferimento del territorio."
    },
    {
      icon: <Users2 className="h-8 w-8" />,
      title: "Team ad Alta Performance",
      description: "Tecniche avanzate di gestione e motivazione del personale per creare un ambiente di lavoro produttivo."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Marketing Digitale Vincente",
      description: "Strategie social media e digitali semplici ma potenti per generare vendite concrete in farmacia."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Visione Strategica",
      description: "Mindset e strumenti per trasformare la tua farmacia in un'impresa di successo orientata al futuro."
    }
  ];

  return (
    <section ref={sectionRef} id="perche-partecipare" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Perché <span className="gradient-text">Partecipare?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Non si tratta solo di formazione. È una trasformazione completa del tuo approccio al business farmaceutico.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 scroll-reveal">
          <img src="/images/farmacisti_sessione_1.jpg" alt="Farmacisti in sessione" className="w-full aspect-[2/1] object-cover object-top rounded-2xl shadow-lg" style={{objectPosition: 'top'}} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="scroll-reveal bg-white rounded-2xl p-8 shadow-lg card-hover border border-gray-100"
            >
              <div className="bg-gradient-to-r from-primary-100 to-secondary-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-primary-600">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 scroll-reveal">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Sei pronto a rivoluzionare il tuo business?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Unisciti ai farmacisti titolari che stanno già trasformando le loro farmacie in imprese vincenti.
            </p>
            <button 
              onClick={() => document.getElementById('iscrizione')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-300"
            >
              Richiedi la tua partecipazione
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyParticipate;