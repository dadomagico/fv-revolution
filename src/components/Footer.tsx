import React from 'react';
import { MapPin, Phone, Mail, Calendar, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Event Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-2 rounded-lg">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Farmacia Vincente</h3>
                <p className="text-gray-400">Revolution 2025</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              L'evento esclusivo che trasforma il business dei farmacisti titolari attraverso 
              strategie innovative e networking di alto livello.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contatti</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">+39 02 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">info@farmaciavincente.it</span>
              </div>
              <div className="text-sm text-gray-400">
                Lun-Ven: 9:00 - 18:00
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Dettagli Evento</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-primary-400 mt-0.5" />
                <div>
                  <div className="text-gray-300">29 Novembre 2025</div>
                  <div className="text-sm text-gray-400">Sabato, 09:00 - 19:30</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5" />
                <div>
                  <div className="text-gray-300">Acquario Romano</div>
                  <div className="text-sm text-gray-400">Roma, Italia</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Link Utili</h4>
            <div className="space-y-3">
              <button 
                onClick={() => document.getElementById('perche-partecipare')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Perché Partecipare
              </button>
              <button 
                onClick={() => document.getElementById('programma')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Programma
              </button>
              <button 
                onClick={() => document.getElementById('relatori')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Relatori
              </button>
              <button 
                onClick={() => document.getElementById('iscrizione')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Iscrizioni
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              © 2025 Farmacia Vincente Revolution. Tutti i diritti riservati.
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Heart className="h-4 w-4 text-red-500" />
            <span>Sosteniamo AIRC nella ricerca contro il cancro</span>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Non perdere questa opportunità!</h3>
            <p className="text-lg mb-6 opacity-90">
              I posti sono limitati e ogni anno l'evento registra il sold-out
            </p>
            <button 
              onClick={() => document.getElementById('iscrizione')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-300"
            >
              Prenota Subito il Tuo Posto
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;