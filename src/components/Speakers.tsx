import React, { useEffect, useRef } from 'react';
import { Award, Star, Users, Building2 } from 'lucide-react';

const Speakers: React.FC = () => {
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

  const speakers = [
    {
      name: "Dr. Filippo Ongaro",
      role: "Specialista in Medicina Anti-Aging e Longevità",
      image: "/images/relatore_f_ongaro.jpg",
      description: "Primo medico italiano certificato in medicina anti-aging, ex medico degli astronauti ESA. Pioniere nell'approccio preventivo e nella medicina della longevità.",
      expertise: ["Medicina Preventiva", "Anti-Aging", "Performance Optimization"],
      icon: <Star className="h-6 w-6" />
    },
    {
      name: "Dr. Attilio Speciani",
      role: "Immunologo e Nutrizionista",
      image: "/public/images/images/evento_sala_2.jpg",
      description: "Specialista in allergologia e immunologia clinica, leader nei protocolli anti-infiammatori. Autore di numerose pubblicazioni scientifiche.",
      expertise: ["Immunologia", "Nutrizione", "Protocolli Anti-infiammatori"],
      icon: <Award className="h-6 w-6" />
    },
    {
      name: "Dott. Massimo Slaviero",
      role: "CEO di Unifarco",
      image: "/images/relatore_unifarco.jpg",
      description: "Leader nell'industria dermocosmética per farmacia. Visionario nell'innovazione di prodotti per il benessere e la cura della persona.",
      expertise: ["Dermocosmesi", "Business Strategy", "Innovation"],
      icon: <Building2 className="h-6 w-6" />
    },
    {
      name: "Arch. Luca Sartoretto Verna",
      role: "CEO Sartoretto Verna - Innovatore Design Farmacie",
      image: "/images/relatore_lsv.jpg",
      description: "Architetto visionario specializzato nel design innovativo di farmacie. Pioniere nell'ottimizzazione degli spazi commerciali farmaceutici.",
      expertise: ["Design Innovation", "Retail Strategy", "Space Optimization"],
      icon: <Users className="h-6 w-6" />
    }
  ];

  return (
    <section ref={sectionRef} id="relatori" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            I Nostri <span className="gradient-text">Relatori</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I migliori esperti del settore condivideranno con te strategie concrete e comprovate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {speakers.map((speaker, index) => (
            <div 
              key={index}
              className="scroll-reveal bg-white rounded-3xl shadow-xl overflow-hidden card-hover"
            >
              <div className="relative">
                <img 
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full aspect-[2/1] object-contain bg-white"
                  style={{maxHeight: '290px', minHeight: '290px'}}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 text-primary-600">
                  {speaker.icon}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {speaker.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-4">
                  {speaker.role}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {speaker.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {speaker.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 scroll-reveal">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Formazione di Alto Livello
            </h3>
            <p className="text-xl mb-6 opacity-90 max-w-3xl mx-auto">
              I nostri relatori hanno formato migliaia di professionisti del settore farmaceutico, 
              generando risultati concreti e misurabili per le loro attività.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-sm opacity-90">Anni di Esperienza Combinata</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">5000+</div>
                <div className="text-sm opacity-90">Farmacisti Formati</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-sm opacity-90">Pubblicazioni Scientifiche</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;