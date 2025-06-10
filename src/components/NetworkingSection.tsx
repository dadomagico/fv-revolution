import React, { useEffect, useRef } from 'react';
import { Wine, Users, Award, Heart } from 'lucide-react';

const NetworkingSection: React.FC = () => {
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

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Networking & <span className="gradient-text">Celebrazione</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La giornata si conclude con momenti di condivisione, premiazione e networking di alto livello
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Networking Image */}
          <div className="scroll-reveal h-full flex items-stretch">
            <img 
              src="/images/location_acquario_romano.jpg"
              alt="New image 3"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
              style={{height: '100%'}}
            />
          </div>

          {/* Content */}
          <div className="space-y-8 h-full flex flex-col justify-between">
            <div className="scroll-reveal">
              <div className="flex items-start space-x-4">
                <div className="bg-accent-100 p-3 rounded-xl">
                  <Award className="h-8 w-8 text-accent-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Premiazione "Impresa di Visione"
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Riconoscimento speciale per le farmacie che si sono distinte per innovazione, 
                    visione strategica e risultati eccellenti nel loro territorio.
                  </p>
                </div>
              </div>
            </div>

            <div className="scroll-reveal">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-xl">
                  <Wine className="h-8 w-8 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Cena di Gala con Buffet
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Cena elegante con buffet di alta qualità in un'atmosfera raffinata, 
                    perfetta per consolidare i rapporti professionali nati durante la giornata.
                  </p>
                </div>
              </div>
            </div>

            <div className="scroll-reveal">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary-100 p-3 rounded-xl">
                  <Users className="h-8 w-8 text-secondary-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Networking Strategico
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Opportunità uniche di confronto con colleghi di successo, creazione di partnership 
                    e condivisione di best practice in un ambiente informale e stimolante.
                  </p>
                </div>
              </div>
            </div>

            <div className="scroll-reveal">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-xl">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Donazione Benefica AIRC
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Parte dei proventi dell'evento sarà devoluta ad AIRC per sostenere la ricerca 
                    nella lotta contro il cancro, unendo business e impegno sociale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 scroll-reveal">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Un Evento che Fa la Differenza
              </h3>
              <p className="text-gray-600">
                Networking di qualità con professionisti selezionati
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">250</div>
                <div className="text-gray-600">Partecipanti Selezionati</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600 mb-2">4h</div>
                <div className="text-gray-600">Networking Dedicato</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 mb-2">100%</div>
                <div className="text-gray-600">Farmacisti Titolari</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">€€€</div>
                <div className="text-gray-600">Donazione AIRC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkingSection;