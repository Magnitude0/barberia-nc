
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
      features: ['Lavado incluido', 'Peinado final', 'Consejos de estilo']
    },
    {
      icon: Scissors,
      title: t('modernCut'),
      description: 'Estilos contemporáneos y tendencias actuales adaptados a tu personalidad',
      price: '$4,000',
      duration: '60 min',
      features: ['Consulta de estilo', 'Técnicas modernas', 'Productos premium']
    },
    {
      icon: Scissors,
      title: t('beardShave'),
      description: 'Cuidado profesional de barba con técnicas de afeitado tradicional',
      price: '$2,500',
      duration: '30 min',
      features: ['Toallas calientes', 'Aceites especiales', 'Hidratación completa']
    },
    {
      icon: Palette,
      title: t('professionalColor'),
      description: 'Coloración profesional y técnicas avanzadas de pigmentación',
      price: '$6,000',
      duration: '90 min',
      features: ['Diagnóstico capilar', 'Colores premium', 'Tratamiento post-color']
    },
    {
      icon: Eye,
      title: t('hairDiagnosis'),
      description: 'Análisis completo del cabello y cuero cabelludo',
      price: '$1,500',
      duration: '20 min',
      features: ['Análisis profesional', 'Recomendaciones', 'Plan de cuidado']
    },
    {
      icon: Sparkles,
      title: 'Paquete Completo',
      description: 'Experiencia completa: corte, barba, color y tratamiento',
      price: '$10,000',
      duration: '2.5 hrs',
      features: ['Todos los servicios', 'Descuento especial', 'Atención VIP']
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
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
              <Card key={index} className="bg-barberia-grey border-barberia-grey-light hover-scale h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="w-12 h-12 text-barberia-red" />
                    <div className="text-right">
                      <div className="text-2xl font-oswald font-bold text-barberia-red">
                        {service.price}
                      </div>
                      <div className="text-sm text-gray-400">
                        {service.duration}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-oswald text-white">
                    {service.title}
                  </CardTitle>
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

      {/* CTA Section */}
      <section className="section-padding bg-barberia-grey">
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
