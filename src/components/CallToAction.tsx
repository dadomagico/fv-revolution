import React, { useState } from 'react';
import { CheckCircle, Clock, MapPin, Calendar, Phone, Mail, AlertCircle } from 'lucide-react';

const CallToAction: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    farmacia: '',
    citta: '',
    email: '',
    telefono: '',
    messaggio: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="iscrizione" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Urgency Banner */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-6 mb-12 text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <AlertCircle className="h-6 w-6" />
            <span className="font-bold text-lg">ATTENZIONE: POSTI LIMITATI!</span>
          </div>
          <p className="text-lg">
            Solo <strong>250 posti disponibili</strong> - Le iscrizioni si chiudono rapidamente ogni anno
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Registration Form */}
          <div>
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Prenota il Tuo <span className="gradient-text">Posto Ora!</span>
                </h2>
                <p className="text-gray-600">
                  Compila il form per ricevere tutte le informazioni e riservare la tua partecipazione
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Richiesta Inviata!</h3>
                  <p className="text-gray-600">
                    Ti contatteremo entro 24 ore con tutte le informazioni per completare l'iscrizione.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nome *
                      </label>
                      <input
                        type="text"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Il tuo nome"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Cognome *
                      </label>
                      <input
                        type="text"
                        name="cognome"
                        required
                        value={formData.cognome}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Il tuo cognome"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome Farmacia *
                    </label>
                    <input
                      type="text"
                      name="farmacia"
                      required
                      value={formData.farmacia}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Nome della tua farmacia"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Città *
                    </label>
                    <input
                      type="text"
                      name="citta"
                      required
                      value={formData.citta}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Città della farmacia"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="la-tua-email@esempio.it"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Telefono *
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        required
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Il tuo numero di telefono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Messaggio (opzionale)
                    </label>
                    <textarea
                      name="messaggio"
                      rows={4}
                      value={formData.messaggio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Raccontaci brevemente delle tue aspettative per l'evento..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-lg"
                  >
                    Richiedi Informazioni e Prenota
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    * Campi obbligatori. I tuoi dati sono protetti e utilizzati solo per l'organizzazione dell'evento.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Event Details */}
          <div className="space-y-8">
            {/* Key Info */}
            <div className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Dettagli dell'Evento</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-6 w-6" />
                  <div>
                    <div className="font-semibold">Data</div>
                    <div className="opacity-90">Sabato 29 Novembre 2025</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6" />
                  <div>
                    <div className="font-semibold">Orario</div>
                    <div className="opacity-90">09:00 - 19:30</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6" />
                  <div>
                    <div className="font-semibold">Sede</div>
                    <div className="opacity-90">Acquario Romano, Roma</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="text-sm opacity-90 mb-2">Include:</div>
                <ul className="text-sm space-y-1 opacity-90">
                  <li>• Formazione intensiva di 8 ore</li>
                  <li>• Materiali didattici esclusivi</li>
                  <li>• Pranzo e coffee break</li>
                  <li>• Cena di gala e networking</li>
                  <li>• Certificato di partecipazione</li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Hai domande?
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="h-5 w-5 text-primary-600" />
                  <span>+39 02 1234 5678</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="h-5 w-5 text-primary-600" />
                  <span>info@farmaciavincente.it</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Il nostro team è disponibile dal lunedì al venerdì dalle 9:00 alle 18:00
              </p>
            </div>

            {/* Social Responsibility */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 border border-red-100">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-red-100 p-2 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Solidarietà e Ricerca
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Parte dei proventi di questo evento sarà devoluta ad <strong>AIRC</strong> per 
                sostenere la ricerca nella lotta contro il cancro. La tua partecipazione contribuisce 
                anche a una causa importante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;