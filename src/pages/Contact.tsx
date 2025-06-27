
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { MapPin, Phone, Clock, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    window.open('https://wa.me/5491123456789?text=Hola! Me gustaría contactar con La Barbería NC', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/labarberainc', '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      content: t('address'),
      subtitle: 'Quilmes Centro, Buenos Aires'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+54 9 11 2345-6789',
      subtitle: 'También disponible por WhatsApp'
    },
    {
      icon: Clock,
      title: 'Horarios',
      content: 'Lun - Sáb: 9:00 - 20:00',
      subtitle: 'Domingos: 10:00 - 18:00'
    },
    {
      icon: Instagram,
      title: 'Redes Sociales',
      content: '@labarberainc',
      subtitle: 'Síguenos para ver nuestro trabajo'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-oswald font-bold text-white mb-6">
            {t('contactTitle')}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Estamos aquí para ayudarte. Reserva tu cita o consulta sobre nuestros servicios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-oswald text-lg px-8 py-6"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t('whatsapp')}
            </Button>
            <Button
              onClick={handleInstagram}
              size="lg"
              variant="outline"
              className="border-barberia-red text-barberia-red hover:bg-barberia-red hover:text-white font-oswald text-lg px-8 py-6"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-barberia-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-barberia-grey border-barberia-grey-light text-center hover-scale">
                <CardContent className="p-6">
                  <info.icon className="w-12 h-12 text-barberia-red mx-auto mb-4" />
                  <h3 className="text-lg font-oswald font-semibold text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-barberia-red font-semibold mb-1">
                    {info.content}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {info.subtitle}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-barberia-grey">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-oswald font-bold text-white mb-8">
              Envíanos un mensaje
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Nombre
                  </label>
                  <Input
                    type="text"
                    className="bg-barberia-black border-barberia-grey-light text-white"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Teléfono
                  </label>
                  <Input
                    type="tel"
                    className="bg-barberia-black border-barberia-grey-light text-white"
                    placeholder="Tu teléfono"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  className="bg-barberia-black border-barberia-grey-light text-white"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">
                  Servicio de interés
                </label>
                <Input
                  type="text"
                  className="bg-barberia-black border-barberia-grey-light text-white"
                  placeholder="Corte, Color, Academia, etc."
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">
                  Mensaje
                </label>
                <Textarea
                  className="bg-barberia-black border-barberia-grey-light text-white"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  rows={4}
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full bg-barberia-red hover:bg-barberia-red-dark text-white font-oswald text-lg py-6"
              >
                Enviar Mensaje
              </Button>
            </form>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-3xl font-oswald font-bold text-white mb-8">
              Nuestra Ubicación
            </h2>
            
            <div className="aspect-video bg-barberia-black rounded-lg border border-barberia-grey-light flex items-center justify-center mb-6">
              <div className="text-center text-gray-400">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p>Mapa de Google</p>
                <p className="text-sm mt-2">Brown 692, Quilmes Centro</p>
              </div>
            </div>
            
            <Card className="bg-barberia-black border-barberia-grey-light">
              <CardContent className="p-6">
                <h3 className="text-lg font-oswald font-semibold text-white mb-4">
                  ¿Cómo llegar?
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• A 2 cuadras de la estación Quilmes</li>
                  <li>• Múltiples líneas de colectivo</li>
                  <li>• Estacionamiento disponible en la zona</li>
                  <li>• Fácil acceso desde autopista</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-barberia-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-oswald font-bold text-white mb-6">
            ¿Listo para tu próximo corte?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Reserva tu cita ahora y experimenta el mejor servicio de barbería en Quilmes.
          </p>
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="bg-barberia-red hover:bg-barberia-red-dark text-white font-oswald text-lg px-8 py-6"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Reservar por WhatsApp
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
