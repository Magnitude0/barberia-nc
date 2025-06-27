
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { key: 'home', href: '/', spanishHref: '/' },
    { key: 'about', href: '/about', spanishHref: '/nosotros' },
    { key: 'services', href: '/services', spanishHref: '/servicios' },
    { key: 'academy', href: '/academy', spanishHref: '/academia' },
    { key: 'contact', href: '/contact', spanishHref: '/contacto' }
  ];

  const getHref = (item: typeof navItems[0]) => {
    return language === 'es' ? item.spanishHref : item.href;
  };

  const isActive = (item: typeof navItems[0]) => {
    const currentPath = location.pathname;
    const itemPath = getHref(item);
    return currentPath === itemPath;
  };

  return (
    <nav className="bg-barberia-black/95 backdrop-blur-sm border-b border-barberia-grey sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-oswald font-bold text-white">
              LA BARBERÍA <span className="text-barberia-red">NC</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={getHref(item)}
                className={`font-inter font-medium transition-colors duration-200 ${
                  isActive(item)
                    ? 'text-barberia-red'
                    : 'text-white hover:text-barberia-red'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-white hover:text-barberia-red"
            >
              <Globe className="w-4 h-4 mr-1" />
              {language.toUpperCase()}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-white hover:text-barberia-red"
            >
              <Globe className="w-4 h-4" />
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-barberia-red"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-barberia-grey">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={getHref(item)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item)
                      ? 'text-barberia-red'
                      : 'text-white hover:text-barberia-red'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
