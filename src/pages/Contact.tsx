
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
      title: t('addressTitle'),
      content: t('address'),
      subtitle: t('addressSubtitle')
    },
    {
      icon: Phone,
      title: t('phoneTitle'),
      content: '+54 9 11 2345-6789',
      subtitle: t('phoneSubtitle')
    },
    {
      icon: Clock,
      title: t('scheduleTitle'),
      content: t('scheduleContent'),
      subtitle: t('scheduleSubtitle')
    },
    {
      icon: Instagram,
      title: t('socialMediaTitle'),
      content: '@labarberainc',
      subtitle: t('socialMediaSubtitle')
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1920&h=800"
            alt={t('shopInterior')}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-oswald font-bold text-white mb-6">
            {t('contactTitle')}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            {t('contactSubtitle')}
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

      {/* Contact Form & Location */}
      <section className="section-padding bg-barberia-grey">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-oswald font-bold text-white mb-8">
              {t('sendUsMessage')}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    {t('name')}
                  </label>
                  <Input
                    type="text"
                    className="bg-barberia-black border-barberia-grey-light text-white"
                    placeholder={t('yourName')}
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">
                    {t('phone')}
                  </label>
                  <Input
                    type="tel"
                    className="bg-barberia-black border-barberia-grey-light text-white"
                    placeholder={t('yourPhone')}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">
                  {t('email')}
                </label>
                <Input
                  type="email"
                  className="bg-barberia-black border-barberia-grey-light text-white"
                  placeholder={t('yourEmail')}
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">
                  {t('serviceInterest')}
                </label>
                <Input
                  type="text"
                  className="bg-barberia-black border-barberia-grey-light text-white"
                  placeholder={t('serviceInterestPlaceholder')}
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">
                  {t('message')}
                </label>
                <Textarea
                  className="bg-barberia-black border-barberia-grey-light text-white"
                  placeholder={t('messagePlaceholder')}
                  rows={4}
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full bg-barberia-red hover:bg-barberia-red-dark text-white font-oswald text-lg py-6"
              >
                {t('sendMessage')}
              </Button>
            </form>
          </div>

          {/* Location & Shop Images */}
          <div>
            <h2 className="text-3xl font-oswald font-bold text-white mb-8">
              {t('ourLocation')}
            </h2>
            
            {/* Shop Exterior */}
            <div className="aspect-video rounded-lg overflow-hidden border border-barberia-grey-light mb-6">
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&h=600"
                alt={t('shopExterior')}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Map Placeholder */}
            <div className="aspect-video bg-barberia-black rounded-lg border border-barberia-grey-light flex items-center justify-center mb-6">
              <div className="text-center text-gray-400">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p>{t('googleMap')}</p>
                <p className="text-sm mt-2">{t('address')}</p>
              </div>
            </div>
            
            <Card className="bg-barberia-black border-barberia-grey-light">
              <CardContent className="p-6">
                <h3 className="text-lg font-oswald font-semibold text-white mb-4">
                  {t('howToGetHere')}
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>{t('stationBlocks')}</li>
                  <li>{t('multipleBusLines')}</li>
                  <li>{t('parkingAvailable')}</li>
                  <li>{t('easyHighwayAccess')}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instagram Gallery Preview */}
      <section className="section-padding bg-barberia-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-oswald font-bold text-center text-white mb-12">
            {t('followInstagram')}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=300&h=300',
              'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=300&h=300',
              'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=300&h=300',
              'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=300&h=300'
            ].map((image, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden border border-barberia-grey-light hover-scale cursor-pointer">
                <img 
                  src={image}
                  alt={`Post de Instagram de La Barbería NC - trabajo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button
              onClick={handleInstagram}
              size="lg"
              className="bg-barberia-red hover:bg-barberia-red-dark text-white font-oswald text-lg px-8 py-6"
            >
              <Instagram className="w-5 h-5 mr-2" />
              @labarberainc
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-barberia-grey">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-oswald font-bold text-white mb-6">
            {t('readyNextCut')}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('readyNextCutDesc')}
          </p>
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="bg-barberia-red hover:bg-barberia-red-dark text-white font-oswald text-lg px-8 py-6"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            {t('bookWhatsApp')}
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
