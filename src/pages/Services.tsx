
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Scissors, Palette, Eye, Sparkles } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();

  const handleBooking = () => {
    window.open('https://wa.me/5491123456789?text=Hola! Me gustaría reservar una cita en La Barbería NC', '_blank');
  };

  const services = [
    {
      icon: Scissors,
      title: t('classicCut'),
      description: 'Cortes tradicionales ejecutados con precisión y técnica profesional',
      price: '$3,500',
      duration: '45 min',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=400&h=300',
      features: ['Lavado incluido', 'Peinado final', 'Consejos de estilo']
    },
    {
      icon: Scissors,
      title: t('modernCut'),
      description: 'Estilos contemporáneos y tendencias actuales adaptados a tu personalidad',
      price: '$4,000',
      duration: '60 min',
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=400&h=300',
      features: ['Consulta de estilo', 'Técnicas modernas', 'Productos premium']
    },
    {
      icon: Scissors,
      title: t('beardShave'),
      description: 'Cuidado profesional de barba con técnicas de afeitado tradicional',
      price: '$2,500',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&h=300',
      features: ['Toallas calientes', 'Aceites especiales', 'Hidratación completa']
    },
    {
      icon: Palette,
      title: t('professionalColor'),
      description: 'Coloración profesional y técnicas avanzadas de pigmentación',
      price: '$6,000',
      duration: '90 min',
      image: 'https://images.unsplash.com/photo-1560975286-5c4d2e8e5e96?auto=format&fit=crop&w=400&h=300',
      features: ['Diagnóstico capilar', 'Colores premium', 'Tratamiento post-color']
    },
    {
      icon: Eye,
      title: t('hairDiagnosis'),
      description: 'Análisis completo del cabello y cuero cabelludo',
      price: '$1,500',
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1629896844013-b9bee9c5f5e0?auto=format&fit=crop&w=400&h=300',
      features: ['Análisis profesional', 'Recomendaciones', 'Plan de cuidado']
    },
    {
      icon: Sparkles,
      title: 'Paquete Completo',
      description: 'Experiencia completa: corte, barba, color y tratamiento',
      price: '$10,000',
      duration: '2.5 hrs',
      image: 'https://images.unsplash.com/photo-1587046983062-4b6c5e9ecf8e?auto=format&fit=crop&w=400&h=300',
      features: ['Todos los servicios', 'Descuento especial', 'Atención VIP']
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1920&h=800"
            alt="Servicios profesionales de barbería en La Barbería NC"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-oswald font-bold text-white mb-6">
            {t('ourServices')}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Servicios profesionales de barbería y color adaptados a tu estilo personal
          </p>
          <Button
            onClick={handleBooking}
            size="lg"
            className="bg-barberia-red hover:bg-barberia-red-dark text-white font-oswald text-lg px-8 py-6"
          >
            {t('bookAppointment')}
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-barberia-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-barberia-grey border-barberia-grey-light hover-scale h-full overflow-hidden">
                <div className="aspect-video relative">
                  <img 
                    src={service.image}
                    alt={`Servicio de ${service.title.toLowerCase()} - ejemplo de trabajo profesional`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-end flex-col p-4">
                    <div className="text-right text-white">
                      <div className="text-2xl font-oswald font-bold text-barberia-red">
                        {service.price}
                      </div>
                      <div className="text-sm">
                        {service.duration}
                      </div>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-barberia-red mr-3" />
                    <CardTitle className="text-xl font-oswald text-white">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                        <div className="w-2 h-2 bg-barberia-red rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={handleBooking}
                    className="w-full bg-barberia-red hover:bg-barberia-red-dark text-white font-oswald"
                  >
                    Reservar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="section-padding bg-barberia-grey">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-oswald font-bold text-center text-white mb-12">
            Nuestro Trabajo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=400&h=400',
              'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&h=400',
              'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=400&h=400',
              'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=400&h=400',
              'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&h=400',
              'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400'
            ].map((image, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden border border-barberia-grey-light hover-scale">
                <img 
                  src={image}
                  alt={`Ejemplo de trabajo profesional - cliente ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-barberia-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-oswald font-bold text-white mb-6">
            ¿No estás seguro qué servicio elegir?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Nuestros expertos te ayudarán a encontrar el servicio perfecto para tu estilo y necesidades.
          </p>
          <Button
            onClick={handleBooking}
            size="lg"
            className="bg-barberia-red hover:bg-barberia-red-dark text-white font-oswald text-lg px-8 py-6"
          >
            Consulta Gratuita
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
