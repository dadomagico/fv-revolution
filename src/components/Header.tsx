import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-2 rounded-lg">
              <Calendar className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Farmacia Vincente</h1>
              <p className="text-sm text-gray-600">Revolution 2025</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('perche-partecipare')}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Perché Partecipare
            </button>
            <button 
              onClick={() => scrollToSection('programma')}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Programma
            </button>
            <button 
              onClick={() => scrollToSection('relatori')}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Relatori
            </button>
            <button 
              onClick={() => scrollToSection('iscrizione')}
              className="btn-secondary"
            >
              Iscriviti Ora
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('perche-partecipare')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Perché Partecipare
              </button>
              <button 
                onClick={() => scrollToSection('programma')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Programma
              </button>
              <button 
                onClick={() => scrollToSection('relatori')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Relatori
              </button>
              <div className="px-4 py-2">
                <button 
                  onClick={() => scrollToSection('iscrizione')}
                  className="btn-secondary w-full"
                >
                  Iscriviti Ora
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Event Info Bar */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-1 sm:space-y-0 sm:space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>29 Novembre 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Acquario Romano, Roma</span>
            </div>
            <div className="font-semibold">
              Solo 250 posti disponibili!
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;