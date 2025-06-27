
import { Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-barberia-grey border-t border-barberia-grey-light">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-oswald font-bold text-white mb-4">
              LA BARBERÍA <span className="text-barberia-red">NC</span>
            </div>
            <p className="text-gray-300">
              {t('location')}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-oswald font-semibold text-white mb-4">
              {t('followUs')}
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/labarberainc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-barberia-red transition-colors duration-200"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-oswald font-semibold text-white mb-4">
              {t('contactTitle')}
            </h3>
            <p className="text-gray-300">
              {t('address')}
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-barberia-grey-light text-center text-gray-400">
          <p>&copy; 2024 La Barbería NC. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
