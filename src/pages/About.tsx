
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { MapPin, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const handleBooking = () => {
    window.open('https://wa.me/5491123456789?text=Hola! Me gustaría reservar una cita en La Barbería NC', '_blank');
  };

  const stats = [
    { icon: Users, number: '500+', label: 'Clientes satisfechos' },
    { icon: Award, number: '5', label: 'Años de experiencia' },
    { icon: Clock, number: '1000+', label: 'Cortes realizados' },
    { icon: MapPin, number: '1', label: 'Ubicación premium' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-oswald font-bold text-white mb-6">
            {t('aboutTitle')}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Conoce la historia detrás de La Barbería NC y nuestro compromiso con la excelencia.
          </p>
        </div>
      </section>

      {/* Main About Section with Portrait */}
      <section className="section-padding bg-barberia-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-oswald font-bold text-white mb-6">
              Nicolás Centurión
            </h2>
            <h3 className="text-xl text-barberia-red font-semibold mb-4">
              Fundador y Maestro Barbero
            </h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {t('aboutText')} Con más de 5 años de experiencia en el arte de la barbería, 
              Nicolás se ha especializado en técnicas de color profesional y educación barbera.
            </p>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Su pasión por perfeccionar cada detalle y enseñar las mejores técnicas ha convertido 
              a La Barbería NC en un referente de calidad en Quilmes Centro.
            </p>
            <p className="text-barberia-red font-semibold text-lg mb-8">
              {t('location')} - Brown 692, Buenos Aires
            </p>
            <Button
              onClick={handleBooking}
              size="lg"
              className="bg-barberia-red hover:bg-barberia-red-dark text-white font-oswald"
            >
              {t('bookAppointment')}
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden border border-barberia-grey-light">
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&h=600"
                alt="Nicolás Centurión, fundador y maestro barbero de La Barbería NC"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-barberia-red p-4 rounded-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-barberia-grey">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-oswald font-bold text-center text-white mb-12">
            Nuestro Equipo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="aspect-square rounded-lg overflow-hidden border border-barberia-grey-light mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400"
                  alt="Barbero especialista en cortes clásicos"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-oswald text-white mb-2">Especialista Senior</h3>
              <p className="text-gray-300">Cortes clásicos y modernos</p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square rounded-lg overflow-hidden border border-barberia-grey-light mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&h=400"
                  alt="Especialista en color y tratamientos capilares"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-oswald text-white mb-2">Colorista Experto</h3>
              <p className="text-gray-300">Color profesional y tratamientos</p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square rounded-lg overflow-hidden border border-barberia-grey-light mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=400&h=400"
                  alt="Instructor de la Academia NC"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-oswald text-white mb-2">Instructor Academia</h3>
              <p className="text-gray-300">Educación y técnicas avanzadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-barberia-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-oswald font-bold text-center text-white mb-12">
            Nuestra Trayectoria
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-barberia-grey border-barberia-grey-light text-center hover-scale">
                <CardContent className="p-6">
                  <stat.icon className="w-12 h-12 text-barberia-red mx-auto mb-4" />
                  <div className="text-3xl font-oswald font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-300">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section with Workshop Image */}
      <section className="section-padding bg-barberia-grey">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-oswald font-bold text-white mb-8">
              Nuestra Visión
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              En La Barbería NC creemos que cada corte es una obra de arte. Nuestro compromiso es brindar 
              un servicio excepcional, combinando técnicas tradicionales con las últimas tendencias en 
              barbería y color profesional.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Más que una barbería, somos un espacio donde los hombres pueden relajarse, renovar su estilo 
              y sentirse seguros de su imagen. También formamos a la próxima generación de barberos 
              profesionales a través de nuestra academia especializada.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden border border-barberia-grey-light">
              <img 
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&h=600"
                alt="Interior de La Barbería NC mostrando el ambiente profesional y acogedor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
