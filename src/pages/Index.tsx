
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Scissors, Palette, GraduationCap, Star } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Scissors, title: t('classicCut'), description: 'Cortes tradicionales con técnica moderna' },
    { icon: Scissors, title: t('modernCut'), description: 'Estilos contemporáneos y tendencias' },
    { icon: Scissors, title: t('beardShave'), description: 'Cuidado profesional de barba' },
    { icon: Palette, title: t('professionalColor'), description: 'Coloración y técnicas avanzadas' }
  ];

  const handleBooking = () => {
    window.open('https://wa.me/5491123456789?text=Hola! Me gustaría reservar una cita en La Barbería NC', '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
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
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-barberia-black to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-barberia-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center text-white mb-12">
            {t('ourServices')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-barberia-grey border-barberia-grey-light hover-scale">
                <CardContent className="p-6 text-center">
                  <service.icon className="w-12 h-12 text-barberia-red mx-auto mb-4" />
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

      {/* About Preview Section */}
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
            <div className="aspect-video bg-barberia-black rounded-lg border border-barberia-grey-light flex items-center justify-center">
              <div className="text-center text-gray-400">
                <Scissors className="w-16 h-16 mx-auto mb-4" />
                <p>Imagen del equipo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Preview */}
      <section className="section-padding bg-barberia-black">
        <div className="max-w-7xl mx-auto text-center">
          <GraduationCap className="w-16 h-16 text-barberia-red mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-6">
            {t('academyTitle')}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
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
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-barberia-grey">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-oswald font-bold text-center text-white mb-12">
            Lo que dicen nuestros clientes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-barberia-black border-barberia-grey-light">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-barberia-red fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">
                    "Excelente servicio y profesionalismo. Los mejores cortes de Quilmes."
                  </p>
                  <p className="text-barberia-red font-semibold">
                    Cliente satisfecho
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
