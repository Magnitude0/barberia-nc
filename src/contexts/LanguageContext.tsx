
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
    
    // Common Actions
    bookAppointment: 'Reserva tu cita',
    requestInfo: 'Solicita información',
    learnMore: 'Más información',
    viewMore: 'Ver más',
    sendMessage: 'Enviar Mensaje',
    reserve: 'Reservar',
    
    // Home page
    heroTitle: 'Bienvenidos a La Barbería NC',
    heroSubtitle: 'Donde el estilo y la técnica se encuentran',
    ourServices: 'Nuestros Servicios',
    watchOurWork: 'Ver nuestro trabajo',
    videoInAction: 'Video de barbería en acción',
    whatClientsSay: 'Lo que dicen nuestros clientes',
    satisfiedClients: 'Clientes satisfechos',
    
    // Services
    classicCut: 'Corte Clásico',
    modernCut: 'Corte Moderno',
    beardShave: 'Barba y Afeitado',
    professionalColor: 'Color Profesional',
    hairDiagnosis: 'Diagnóstico Capilar',
    completePackage: 'Paquete Completo',
    
    // Service descriptions
    classicCutDesc: 'Cortes tradicionales ejecutados con precisión y técnica profesional',
    modernCutDesc: 'Estilos contemporáneos y tendencias actuales adaptados a tu personalidad',
    beardShaveDesc: 'Cuidado profesional de barba con técnicas de afeitado tradicional',
    professionalColorDesc: 'Coloración profesional y técnicas avanzadas de pigmentación',
    hairDiagnosisDesc: 'Análisis completo del cabello y cuero cabelludo',
    completePackageDesc: 'Experiencia completa: corte, barba, color y tratamiento',
    
    // Service features
    washIncluded: 'Lavado incluido',
    finalStyling: 'Peinado final',
    styleTips: 'Consejos de estilo',
    styleConsultation: 'Consulta de estilo',
    modernTechniques: 'Técnicas modernas',
    premiumProducts: 'Productos premium',
    hotTowels: 'Toallas calientes',
    specialOils: 'Aceites especiales',
    completeHydration: 'Hidratación completa',
    scalpAnalysis: 'Diagnóstico capilar',
    premiumColors: 'Colores premium',
    postColorTreatment: 'Tratamiento post-color',
    professionalAnalysis: 'Análisis profesional',
    recommendations: 'Recomendaciones',
    carePlan: 'Plan de cuidado',
    allServices: 'Todos los servicios',
    specialDiscount: 'Descuento especial',
    vipAttention: 'Atención VIP',
    
    // About
    aboutTitle: 'Sobre Nosotros',
    aboutText: 'Nicolás Centurión, fundador de La Barbería NC, ha dedicado su carrera a perfeccionar el arte de la barbería y el color profesional.',
    location: 'Ubicados en Brown 692, Quilmes Centro',
    founderMasterBarber: 'Fundador y Maestro Barbero',
    aboutDetailedText: 'Con más de 5 años de experiencia en el arte de la barbería, Nicolás se ha especializado en técnicas de color profesional y educación barbera.',
    aboutPassionText: 'Su pasión por perfeccionar cada detalle y enseñar las mejores técnicas ha convertido a La Barbería NC en un referente de calidad en Quilmes Centro.',
    ourTeam: 'Nuestro Equipo',
    seniorSpecialist: 'Especialista Senior',
    classicModernCuts: 'Cortes clásicos y modernos',
    expertColorist: 'Colorista Experto',
    colorTreatments: 'Color profesional y tratamientos',
    academyInstructor: 'Instructor Academia',
    educationAdvanced: 'Educación y técnicas avanzadas',
    ourTrajectory: 'Nuestra Trayectoria',
    satisfiedClientsCount: 'Clientes satisfechos',
    yearsExperience: 'Años de experiencia',
    cutsCompleted: 'Cortes realizados',
    premiumLocation: 'Ubicación premium',
    ourVision: 'Nuestra Visión',
    visionText1: 'En La Barbería NC creemos que cada corte es una obra de arte. Nuestro compromiso es brindar un servicio excepcional, combinando técnicas tradicionales con las últimas tendencias en barbería y color profesional.',
    visionText2: 'Más que una barbería, somos un espacio donde los hombres pueden relajarse, renovar su estilo y sentirse seguros de su imagen. También formamos a la próxima generación de barberos profesionales a través de nuestra academia especializada.',
    
    // Academy
    academyTitle: 'Escuela Profesional de Color y Barbería NC',
    courses: 'Cursos Disponibles',
    anatomy: 'Anatomía y Tricología',
    visagism: 'Visagismo',
    cuttingTechniques: 'Técnicas de Corte',
    professionalColorCourse: 'Color Profesional',
    whyChooseAcademy: '¿Por qué elegir nuestra Academia?',
    academyDesc1: 'La Academia NC se distingue por su enfoque práctico y personalizado. Nuestros instructores son profesionales activos con años de experiencia en el sector.',
    academyDesc2: 'Ofrecemos formación integral que combina técnica, teoría y experiencia real con clientes, preparándote para una carrera exitosa en barbería profesional.',
    graduatedStudents: 'Estudiantes graduados',
    employabilityRate: 'Tasa de empleabilidad',
    ourInstructors: 'Nuestros Instructores',
    academicDirector: 'Director Académico',
    colorAdvancedSpecialist: 'Especialista en color y técnicas avanzadas',
    classicTechniques: 'Técnicas Clásicas',
    barberExperience: '10+ años de experiencia en barbería',
    visagismSpecialist: 'Visagismo',
    facialAnalysisExpert: 'Experto en análisis facial y asesoría',
    
    // Course descriptions
    anatomyDesc: 'Fundamentos de anatomía capilar y tricología profesional',
    visagismDesc: 'Arte de adaptar cortes según la forma del rostro y personalidad',
    cuttingTechniquesDesc: 'Técnicas avanzadas de corte y manejo de herramientas',
    professionalColorDesc2: 'Especialización en colorimetría y técnicas de color',
    
    // Course modules
    hairStructure: 'Estructura del cabello',
    scalpTypes: 'Tipos de cuero cabelludo',
    scalpPathologies: 'Patologías capilares',
    professionalDiagnosis: 'Diagnóstico profesional',
    facialAnalysis: 'Análisis facial',
    faceGeometry: 'Geometría del rostro',
    clientPsychology: 'Psicología del cliente',
    imageConsulting: 'Asesoría de imagen',
    classicTechniquesModule: 'Técnicas clásicas',
    modernCuts: 'Cortes modernos',
    clipperUse: 'Uso de maquinillas',
    professionalFinishing: 'Acabados profesionales',
    colorTheory: 'Teoría del color',
    applicationTechniques: 'Técnicas de aplicación',
    colorCorrection: 'Corrección de color',
    currentTrends: 'Tendencias actuales',
    
    // Academy benefits
    certifiedCertification: 'Certificación profesional reconocida',
    realModelPractice: 'Práctica con modelos reales',
    toolsKitIncluded: 'Kit de herramientas incluido',
    personalizedFollowUp: 'Seguimiento personalizado',
    jobOpportunities: 'Oportunidades laborales',
    constantUpdates: 'Actualizaciones constantes',
    studyBenefits: 'Beneficios de estudiar con nosotros',
    startCareerToday: 'Comienza tu carrera profesional hoy',
    joinNextCohort: 'Únete a nuestra próxima cohorte y conviértete en un barbero profesional certificado.',
    viewSchedule: 'Ver cronograma',
    
    // Contact
    contactTitle: 'Contactanos',
    contactSubtitle: 'Estamos aquí para ayudarte. Reserva tu cita o consulta sobre nuestros servicios.',
    address: 'Brown 692, Quilmes Centro, Buenos Aires',
    whatsapp: 'WhatsApp',
    followUs: 'Síguenos',
    sendUsMessage: 'Envíanos un mensaje',
    name: 'Nombre',
    yourName: 'Tu nombre',
    phone: 'Teléfono',
    yourPhone: 'Tu teléfono',
    email: 'Email',
    yourEmail: 'tu@email.com',
    serviceInterest: 'Servicio de interés',
    serviceInterestPlaceholder: 'Corte, Color, Academia, etc.',
    message: 'Mensaje',
    messagePlaceholder: 'Cuéntanos cómo podemos ayudarte...',
    ourLocation: 'Nuestra Ubicación',
    googleMap: 'Mapa de Google',
    howToGetHere: '¿Cómo llegar?',
    stationBlocks: '• A 2 cuadras de la estación Quilmes',
    multipleBusLines: '• Múltiples líneas de colectivo',
    parkingAvailable: '• Estacionamiento disponible en la zona',
    easyHighwayAccess: '• Fácil acceso desde autopista',
    followInstagram: 'Síguenos en Instagram',
    readyNextCut: '¿Listo para tu próximo corte?',
    readyNextCutDesc: 'Reserva tu cita ahora y experimenta el mejor servicio de barbería en Quilmes.',
    bookWhatsApp: 'Reservar por WhatsApp',
    
    // Contact info
    addressTitle: 'Dirección',
    addressSubtitle: 'Quilmes Centro, Buenos Aires',
    phoneTitle: 'Teléfono',
    phoneSubtitle: 'También disponible por WhatsApp',
    scheduleTitle: 'Horarios',
    scheduleContent: 'Lun - Sáb: 9:00 - 20:00',
    scheduleSubtitle: 'Domingos: 10:00 - 18:00',
    socialMediaTitle: 'Redes Sociales',
    socialMediaSubtitle: 'Síguenos para ver nuestro trabajo',
    
    // Services page specific
    ourWork: 'Nuestro Trabajo',
    notSureService: '¿No estás seguro qué servicio elegir?',
    notSureServiceDesc: 'Nuestros expertos te ayudarán a encontrar el servicio perfecto para tu estilo y necesidades.',
    freeConsultation: 'Consulta Gratuita',
    
    // Common durations and prices
    duration45min: '45 min',
    duration60min: '60 min',
    duration30min: '30 min',
    duration90min: '90 min',
    duration20min: '20 min',
    duration2_5hrs: '2.5 hrs',
    weeks4: '4 semanas',
    weeks3: '3 semanas',
    weeks6: '6 semanas',
    weeks8: '8 semanas',
    
    // Footer
    footerCopyright: '© 2024 La Barbería NC. Todos los derechos reservados.',
    
    // 404 Page
    pageNotFound: 'Página no encontrada',
    pageNotFoundDesc: 'Lo sentimos, la página que buscas no existe o ha sido movida.',
    backToHome: 'Volver al Inicio',
    goBack: 'Volver Atrás',
    
    // Alt texts for images
    clientReceivingCut: 'Cliente recibiendo corte profesional en La Barbería NC',
    professionalBarberService: 'Servicios profesionales de barbería en La Barbería NC',
    professionalTeam: 'Equipo de barberos profesionales de La Barbería NC',
    academyStudents: 'Estudiantes aprendiendo técnicas de barbería en la Academia NC',
    shopInterior: 'Interior de La Barbería NC mostrando el ambiente profesional y acogedor',
    nicolasCenturion: 'Nicolás Centurión, fundador y maestro barbero de La Barbería NC',
    shopExterior: 'Fachada de La Barbería NC en Brown 692, Quilmes Centro',
    satisfiedClient: 'Cliente satisfecho'
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    academy: 'Academy',
    contact: 'Contact',
    
    // Common Actions
    bookAppointment: 'Book Appointment',
    requestInfo: 'Request Information',
    learnMore: 'Learn More',
    viewMore: 'View More',
    sendMessage: 'Send Message',
    reserve: 'Reserve',
    
    // Home page
    heroTitle: 'Welcome to La Barbería NC',
    heroSubtitle: 'Where style and technique meet',
    ourServices: 'Our Services',
    watchOurWork: 'Watch our work',
    videoInAction: 'Barbershop in action video',
    whatClientsSay: 'What our clients say',
    satisfiedClients: 'Satisfied clients',
    
    // Services
    classicCut: 'Classic Cut',
    modernCut: 'Modern Cut',
    beardShave: 'Beard & Shave',
    professionalColor: 'Professional Color',
    hairDiagnosis: 'Hair Diagnosis',
    completePackage: 'Complete Package',
    
    // Service descriptions
    classicCutDesc: 'Traditional cuts executed with precision and professional technique',
    modernCutDesc: 'Contemporary styles and current trends adapted to your personality',
    beardShaveDesc: 'Professional beard care with traditional shaving techniques',
    professionalColorDesc: 'Professional coloring and advanced pigmentation techniques',
    hairDiagnosisDesc: 'Complete hair and scalp analysis',
    completePackageDesc: 'Complete experience: cut, beard, color and treatment',
    
    // Service features
    washIncluded: 'Wash included',
    finalStyling: 'Final styling',
    styleTips: 'Style tips',
    styleConsultation: 'Style consultation',
    modernTechniques: 'Modern techniques',
    premiumProducts: 'Premium products',
    hotTowels: 'Hot towels',
    specialOils: 'Special oils',
    completeHydration: 'Complete hydration',
    scalpAnalysis: 'Scalp analysis',
    premiumColors: 'Premium colors',
    postColorTreatment: 'Post-color treatment',
    professionalAnalysis: 'Professional analysis',
    recommendations: 'Recommendations',
    carePlan: 'Care plan',
    allServices: 'All services',
    specialDiscount: 'Special discount',
    vipAttention: 'VIP attention',
    
    // About
    aboutTitle: 'About Us',
    aboutText: 'Nicolás Centurión, founder of La Barbería NC, has dedicated his career to perfecting the art of barbering and professional coloring.',
    location: 'Located at Brown 692, Quilmes Centro',
    founderMasterBarber: 'Founder and Master Barber',
    aboutDetailedText: 'With over 5 years of experience in the art of barbering, Nicolás has specialized in professional color techniques and barber education.',
    aboutPassionText: 'His passion for perfecting every detail and teaching the best techniques has made La Barbería NC a quality reference in Quilmes Centro.',
    ourTeam: 'Our Team',
    seniorSpecialist: 'Senior Specialist',
    classicModernCuts: 'Classic and modern cuts',
    expertColorist: 'Expert Colorist',
    colorTreatments: 'Professional color and treatments',
    academyInstructor: 'Academy Instructor',
    educationAdvanced: 'Education and advanced techniques',
    ourTrajectory: 'Our Trajectory',
    satisfiedClientsCount: 'Satisfied clients',
    yearsExperience: 'Years of experience',
    cutsCompleted: 'Completed cuts',
    premiumLocation: 'Premium location',
    ourVision: 'Our Vision',
    visionText1: 'At La Barbería NC we believe that every cut is a work of art. Our commitment is to provide exceptional service, combining traditional techniques with the latest trends in barbering and professional color.',
    visionText2: 'More than a barbershop, we are a space where men can relax, renew their style and feel confident in their image. We also train the next generation of professional barbers through our specialized academy.',
    
    // Academy
    academyTitle: 'Professional Color & Barbering School NC',
    courses: 'Available Courses',
    anatomy: 'Anatomy & Trichology',
    visagism: 'Visagism',
    cuttingTechniques: 'Cutting Techniques',
    professionalColorCourse: 'Professional Color',
    whyChooseAcademy: 'Why choose our Academy?',
    academyDesc1: 'Academy NC stands out for its practical and personalized approach. Our instructors are active professionals with years of experience in the sector.',
    academyDesc2: 'We offer comprehensive training that combines technique, theory and real experience with clients, preparing you for a successful career in professional barbering.',
    graduatedStudents: 'Graduated students',
    employabilityRate: 'Employability rate',
    ourInstructors: 'Our Instructors',
    academicDirector: 'Academic Director',
    colorAdvancedSpecialist: 'Color and advanced techniques specialist',
    classicTechniques: 'Classic Techniques',
    barberExperience: '10+ years of barbering experience',
    visagismSpecialist: 'Visagism',
    facialAnalysisExpert: 'Facial analysis and consulting expert',
    
    // Course descriptions
    anatomyDesc: 'Hair anatomy and professional trichology fundamentals',
    visagismDesc: 'Art of adapting cuts according to face shape and personality',
    cuttingTechniquesDesc: 'Advanced cutting techniques and tool handling',
    professionalColorDesc2: 'Specialization in colorimetry and color techniques',
    
    // Course modules
    hairStructure: 'Hair structure',
    scalpTypes: 'Scalp types',
    scalpPathologies: 'Scalp pathologies',
    professionalDiagnosis: 'Professional diagnosis',
    facialAnalysis: 'Facial analysis',
    faceGeometry: 'Face geometry',
    clientPsychology: 'Client psychology',
    imageConsulting: 'Image consulting',
    classicTechniquesModule: 'Classic techniques',
    modernCuts: 'Modern cuts',
    clipperUse: 'Clipper use',
    professionalFinishing: 'Professional finishing',
    colorTheory: 'Color theory',
    applicationTechniques: 'Application techniques',
    colorCorrection: 'Color correction',
    currentTrends: 'Current trends',
    
    // Academy benefits
    certifiedCertification: 'Recognized professional certification',
    realModelPractice: 'Practice with real models',
    toolsKitIncluded: 'Tools kit included',
    personalizedFollowUp: 'Personalized follow-up',
    jobOpportunities: 'Job opportunities',
    constantUpdates: 'Constant updates',
    studyBenefits: 'Benefits of studying with us',
    startCareerToday: 'Start your professional career today',
    joinNextCohort: 'Join our next cohort and become a certified professional barber.',
    viewSchedule: 'View schedule',
    
    // Contact
    contactTitle: 'Contact Us',
    contactSubtitle: 'We are here to help you. Book your appointment or inquire about our services.',
    address: 'Brown 692, Quilmes Centro, Buenos Aires',
    whatsapp: 'WhatsApp',
    followUs: 'Follow Us',
    sendUsMessage: 'Send us a message',
    name: 'Name',
    yourName: 'Your name',
    phone: 'Phone',
    yourPhone: 'Your phone',
    email: 'Email',
    yourEmail: 'your@email.com',
    serviceInterest: 'Service of interest',
    serviceInterestPlaceholder: 'Cut, Color, Academy, etc.',
    message: 'Message',
    messagePlaceholder: 'Tell us how we can help you...',
    ourLocation: 'Our Location',
    googleMap: 'Google Map',
    howToGetHere: 'How to get here?',
    stationBlocks: '• 2 blocks from Quilmes station',
    multipleBusLines: '• Multiple bus lines',
    parkingAvailable: '• Parking available in the area',
    easyHighwayAccess: '• Easy highway access',
    followInstagram: 'Follow us on Instagram',
    readyNextCut: 'Ready for your next cut?',
    readyNextCutDesc: 'Book your appointment now and experience the best barbering service in Quilmes.',
    bookWhatsApp: 'Book via WhatsApp',
    
    // Contact info
    addressTitle: 'Address',
    addressSubtitle: 'Quilmes Centro, Buenos Aires',
    phoneTitle: 'Phone',
    phoneSubtitle: 'Also available via WhatsApp',
    scheduleTitle: 'Schedule',
    scheduleContent: 'Mon - Sat: 9:00 - 20:00',
    scheduleSubtitle: 'Sundays: 10:00 - 18:00',
    socialMediaTitle: 'Social Media',
    socialMediaSubtitle: 'Follow us to see our work',
    
    // Services page specific
    ourWork: 'Our Work',
    notSureService: 'Not sure which service to choose?',
    notSureServiceDesc: 'Our experts will help you find the perfect service for your style and needs.',
    freeConsultation: 'Free Consultation',
    
    // Common durations and prices
    duration45min: '45 min',
    duration60min: '60 min',
    duration30min: '30 min',
    duration90min: '90 min',
    duration20min: '20 min',
    duration2_5hrs: '2.5 hrs',
    weeks4: '4 weeks',
    weeks3: '3 weeks',
    weeks6: '6 weeks',
    weeks8: '8 weeks',
    
    // Footer
    footerCopyright: '© 2024 La Barbería NC. All rights reserved.',
    
    // 404 Page
    pageNotFound: 'Page not found',
    pageNotFoundDesc: 'Sorry, the page you are looking for does not exist or has been moved.',
    backToHome: 'Back to Home',
    goBack: 'Go Back',
    
    // Alt texts for images
    clientReceivingCut: 'Client receiving professional cut at La Barbería NC',
    professionalBarberService: 'Professional barbering services at La Barbería NC',
    professionalTeam: 'Professional barber team at La Barbería NC',
    academyStudents: 'Students learning barbering techniques at Academy NC',
    shopInterior: 'Interior of La Barbería NC showing professional and welcoming atmosphere',
    nicolasCenturion: 'Nicolás Centurión, founder and master barber of La Barbería NC',
    shopExterior: 'Facade of La Barbería NC at Brown 692, Quilmes Centro',
    satisfiedClient: 'Satisfied client'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem('barberia-language');
    return (saved as Language) || 'es';
  });

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLang = prev === 'es' ? 'en' : 'es';
      localStorage.setItem('barberia-language', newLang);
      return newLang;
    });
  };

  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations['es']];
    if (!translation) {
      console.warn(`Translation missing for key: ${key} in language: ${language}`);
      return translations['es'][key as keyof typeof translations['es']] || key;
    }
    return translation;
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
