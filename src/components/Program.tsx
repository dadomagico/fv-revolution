import React, { useEffect, useRef } from 'react';
import { Clock, Coffee, Award, Users } from 'lucide-react';

const Program: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.scroll-reveal');
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('revealed');
              }, index * 200);
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

  const morningProgram = [
    {
      time: "09:00 - 09:30",
      title: "Registrazione e Welcome Coffee",
      description: "Accoglienza partecipanti e networking informale"
    },
    {
      time: "09:30 - 10:30",
      title: "MINDSET REVOLUTION",
      description: "Trasforma la tua visione imprenditoriale - Tavola rotonda con casi di successo"
    },
    {
      time: "10:30 - 11:30",
      title: "OTTIMIZZAZIONE COSTI",
      description: "Strategie concrete per ridurre le spese operative senza compromettere la qualità"
    },
    {
      time: "11:30 - 11:45",
      title: "Coffee Break",
      description: "Pausa networking"
    },
    {
      time: "11:45 - 12:45",
      title: "INCREMENTO PROFITTI",
      description: "Tecniche avanzate di pricing e gestione margini per massimizzare la redditività"
    },
    {
      time: "12:45 - 13:30",
      title: "DERMOCOSMESI VINCENTE",
      description: "Come diventare leader nel settore benessere e differenziarsi dalla concorrenza"
    }
  ];

  const afternoonProgram = [
    {
      time: "15:00 - 16:00",
      title: "LONGEVITY POINT - Dr. Filippo Ongaro",
      description: "Medicina preventiva e longevità: opportunità di business per la farmacia del futuro"
    },
    {
      time: "16:00 - 17:00",
      title: "PROTOCOLLI ANTI-INFIAMMATORI - Dr. Attilio Speciani",
      description: "Approcci innovativi nella gestione dell'infiammazione: dalla teoria alla pratica"
    },
    {
      time: "17:00 - 17:15",
      title: "Pausa",
      description: "Break e networking"
    },
    {
      time: "17:15 - 18:00",
      title: "TEAM MANAGEMENT",
      description: "Gestione e motivazione del personale per creare un ambiente ad alta performance"
    },
    {
      time: "18:00 - 18:45",
      title: "DIGITAL MARKETING",
      description: "Social media e strategie digitali per generare vendite concrete"
    },
    {
      time: "18:45 - 19:30",
      title: "PREMIAZIONE & NETWORKING",
      description: "Premiazione 'Impresa di Visione' e cena di gala con buffet"
    }
  ];

  return (
    <section ref={sectionRef} id="programma" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Programma della <span className="gradient-text">Giornata</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una giornata intensiva strutturata per massimizzare l'apprendimento e il networking
          </p>
        </div>

        {/* Programma mattina e pomeriggio affiancati, ognuno con la propria immagine */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Colonna Mattina */}
          <div>
            <div className="scroll-reveal mb-4">
              <img src="/images/farmacisti_sessione_2.jpg" alt="Farmacisti in sessione" className="w-full aspect-[2/1] object-cover rounded-2xl shadow-lg object-top" style={{objectPosition: 'top'}} />
            </div>
            <div className="scroll-reveal">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8">
                <div className="flex items-center mb-8">
                  <div className="bg-primary-600 text-white p-3 rounded-xl mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">MATTINA</h3>
                    <p className="text-primary-600 font-semibold">REVOLUTION - Mindset, Visione, Performance</p>
                  </div>
                </div>
                <div className="space-y-6">
                  {morningProgram.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-primary-600">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-primary-600 font-semibold text-sm">{item.time}</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Colonna Pomeriggio */}
          <div>
            <div className="scroll-reveal mb-4">
              <img src="/images/evento_networking.jpg" alt="Networking event" className="w-full aspect-[2/1] object-cover rounded-2xl shadow-lg object-top" style={{objectPosition: 'top'}} />
            </div>
            <div className="scroll-reveal">
              <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-3xl p-8">
                <div className="flex items-center mb-8">
                  <div className="bg-secondary-600 text-white p-3 rounded-xl mr-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">POMERIGGIO</h3>
                    <p className="text-secondary-600 font-semibold">LONGEVITY TIME - Focus Specialistico</p>
                  </div>
                </div>
                <div className="space-y-6">
                  {afternoonProgram.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-secondary-600">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-secondary-600 font-semibold text-sm">{item.time}</span>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Lunch Break */}
        <div className="mt-12 scroll-reveal">
          <div className="bg-gradient-to-r from-accent-100 to-accent-200 rounded-2xl p-8 text-center">
            <Coffee className="h-12 w-12 text-accent-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              13:30 - 15:00 | PRANZO & NETWORKING
            </h3>
            <p className="text-gray-700">
              Pausa pranzo con buffet di qualità e opportunità di networking tra i partecipanti
            </p>
          </div>
        </div>
        {/* Evening Celebration */}
        <div className="mt-12 scroll-reveal">
          <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-2xl p-8 text-center">
            <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Premiazione "Impresa di Visione"
            </h3>
            <p className="text-gray-700">
              Riconoscimento alle farmacie più innovative e cena finale di networking
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;