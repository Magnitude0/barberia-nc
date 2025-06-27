
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Scissors, Palette, GraduationCap, Star, Play } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();

  const services = [
    { 
      icon: Scissors, 
      title: t('classicCut'), 
      description: 'Cortes tradicionales con técnica moderna',
      image: 'https://images.unsplash.com/photo-1581605405669-fcca9c777e7c?auto=format&fit=crop&w=400&h=300'
    },
    { 
      icon: Scissors, 
      title: t('modernCut'), 
      description: 'Estilos contemporáneos y tendencias',
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=400&h=300'
    },
    { 
      icon: Scissors, 
      title: t('beardShave'), 
      description: 'Cuidado profesional de barba',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=400&h=300'
    },
    { 
      icon: Palette, 
      title: t('professionalColor'), 
      description: 'Coloración y técnicas avanzadas',
      image: 'https://images.unsplash.com/photo-1560975286-5c4d2e8e5e96?auto=format&fit=crop&w=400&h=300'
    }
  ];

  const handleBooking = () => {
    window.open('https://wa.me/5491123456789?text=Hola! Me gustaría reservar una cita en La Barbería NC', '_blank');
  };

  return (
    <Layout>
      {/* Hero Section with Video/Image */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1920&h=1080"
            alt="Cliente recibiendo corte profesional en La Barbería NC"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Video Placeholder */}
        <div className="absolute bottom-20 right-8 bg-barberia-grey border border-barberia-grey-light rounded-lg p-4 flex items-center space-x-3 animate-fade-in">
          <div className="w-16 h-16 bg-barberia-red rounded-full flex items-center justify-center cursor-pointer hover:bg-barberia-red-dark transition-colors">
            <Play className="w-6 h-6 text-white ml-1" />
          </div>
          <div>
            <p className="text-white font-semibold">Ver nuestro trabajo</p>
            <p className="text-gray-300 text-sm">Video de barbería en acción</p>
          </div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-oswald font-bold text-white mb-6 animate-fade-in">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('heroSubtitle')}
          </p>
          <Button
            onClick={handleBooking}
            size="lg"
            className="bg-barberia-red hover:bg-barberia-red-dark text-white font-oswald font-semibold text-lg px-8 py-6 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            {t('bookAppointment')}
          </Button>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-barberia-black to-transparent"></div>
      </section>

      {/* Services Section with Images */}
      <section className="section-padding bg-barberia-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center text-white mb-12">
            {t('ourServices')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-barberia-grey border-barberia-grey-light hover-scale overflow-hidden">
                <div className="aspect-video relative">
                  <img 
                    src={service.image}
                    alt={`Servicio de ${service.title.toLowerCase()} en La Barbería NC`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <service.icon className="w-12 h-12 text-barberia-red" />
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-oswald font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section with Team Image */}
      <section className="section-padding bg-barberia-grey">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-oswald font-bold text-white mb-6">
              {t('aboutTitle')}
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {t('aboutText')}
            </p>
            <p className="text-barberia-red font-semibold mb-8">
              {t('location')}
            </p>
            <Button
              onClick={handleBooking}
              className="bg-barberia-red hover:bg-barberia-red-dark text-white font-oswald"
            >
              {t('bookAppointment')}
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden border border-barberia-grey-light">
              <img 
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&h=600"
                alt="Equipo de barberos profesionales de La Barbería NC"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Academy Preview with Classroom Image */}
      <section className="section-padding bg-barberia-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden border border-barberia-grey-light">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&h=600"
                  alt="Aula de la Academia NC con estudiantes aprendiendo técnicas de barbería"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <GraduationCap className="w-16 h-16 text-barberia-red mx-auto lg:mx-0 mb-6" />
              <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-6">
                {t('academyTitle')}
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Formamos a los barberos del futuro con técnicas profesionales y conocimiento especializado.
              </p>
              <Button
                onClick={handleBooking}
                size="lg"
                className="bg-barberia-red hover:bg-barberia-red-dark text-white font-oswald"
              >
                {t('requestInfo')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with Client Photos */}
      <section className="section-padding bg-barberia-grey">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-oswald font-bold text-center text-white mb-12">
            Lo que dicen nuestros clientes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150",
                name: "Carlos M.",
                text: "Excelente servicio y profesionalismo. Los mejores cortes de Quilmes."
              },
              {
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
                name: "Diego R.",
                text: "Nicolás es un artista con las tijeras. Siempre salgo renovado."
              },
              {
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
                name: "Mateo L.",
                text: "La academia me cambió la vida. Ahora soy barbero profesional."
              }
            ].map((testimonial, i) => (
              <Card key={i} className="bg-barberia-black border-barberia-grey-light">
                <CardContent className="p-6 text-center">
                  <img 
                    src={testimonial.image}
                    alt={`Cliente satisfecho: ${testimonial.name}`}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="flex justify-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-barberia-red fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">
                    "{testimonial.text}"
                  </p>
                  <p className="text-barberia-red font-semibold">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
