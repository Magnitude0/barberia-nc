
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Navigation
    home: 'Inicio',
    about: 'Nosotros',
    services: 'Servicios',
    academy: 'Academia',
    contact: 'Contacto',
    
    // Home page
    heroTitle: 'Bienvenidos a La Barbería NC',
    heroSubtitle: 'Donde el estilo y la técnica se encuentran',
    bookAppointment: 'Reserva tu cita',
    ourServices: 'Nuestros Servicios',
    
    // Services
    classicCut: 'Corte Clásico',
    modernCut: 'Corte Moderno',
    beardShave: 'Barba y Afeitado',
    professionalColor: 'Color Profesional',
    hairDiagnosis: 'Diagnóstico Capilar',
    
    // About
    aboutTitle: 'Sobre Nosotros',
    aboutText: 'Nicolás Centurión, fundador de La Barbería NC, ha dedicado su carrera a perfeccionar el arte de la barbería y el color profesional.',
    location: 'Ubicados en Brown 692, Quilmes Centro',
    
    // Academy
    academyTitle: 'Escuela Profesional de Color y Barbería NC',
    courses: 'Cursos Disponibles',
    anatomy: 'Anatomía y Tricología',
    visagism: 'Visagismo',
    cuttingTechniques: 'Técnicas de Corte',
    requestInfo: 'Solicita información',
    
    // Contact
    contactTitle: 'Contactanos',
    address: 'Brown 692, Quilmes Centro, Buenos Aires',
    whatsapp: 'WhatsApp',
    followUs: 'Síguenos'
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    academy: 'Academy',
    contact: 'Contact',
    
    // Home page
    heroTitle: 'Welcome to La Barbería NC',
    heroSubtitle: 'Where style and technique meet',
    bookAppointment: 'Book Appointment',
    ourServices: 'Our Services',
    
    // Services
    classicCut: 'Classic Cut',
    modernCut: 'Modern Cut',
    beardShave: 'Beard & Shave',
    professionalColor: 'Professional Color',
    hairDiagnosis: 'Hair Diagnosis',
    
    // About
    aboutTitle: 'About Us',
    aboutText: 'Nicolás Centurión, founder of La Barbería NC, has dedicated his career to perfecting the art of barbering and professional coloring.',
    location: 'Located at Brown 692, Quilmes Centro',
    
    // Academy
    academyTitle: 'Professional Color & Barbering School NC',
    courses: 'Available Courses',
    anatomy: 'Anatomy & Trichology',
    visagism: 'Visagism',
    cuttingTechniques: 'Cutting Techniques',
    requestInfo: 'Request Information',
    
    // Contact
    contactTitle: 'Contact Us',
    address: 'Brown 692, Quilmes Centro, Buenos Aires',
    whatsapp: 'WhatsApp',
    followUs: 'Follow Us'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
