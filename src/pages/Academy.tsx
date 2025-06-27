
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { GraduationCap, BookOpen, Users, Award, Clock, CheckCircle } from 'lucide-react';

const Academy = () => {
  const { t } = useLanguage();

  const handleContact = () => {
    window.open('https://wa.me/5491123456789?text=Hola! Me gustaría información sobre los cursos de la Academia NC', '_blank');
  };

  const courses = [
    {
      title: t('anatomy'),
      duration: '4 semanas',
      description: 'Fundamentos de anatomía capilar y tricología profesional',
      modules: [
        'Estructura del cabello',
        'Tipos de cuero cabelludo',
        'Patologías capilares',
        'Diagnóstico profesional'
      ]
    },
    {
      title: t('visagism'),
      duration: '3 semanas',
      description: 'Arte de adaptar cortes según la forma del rostro y personalidad',
      modules: [
        'Análisis facial',
        'Geometría del rostro',
        'Psicología del cliente',
        'Asesoría de imagen'
      ]
    },
    {
      title: t('cuttingTechniques'),
      duration: '6 semanas',
      description: 'Técnicas avanzadas de corte y manejo de herramientas',
      modules: [
        'Técnicas clásicas',
        'Cortes modernos',
        'Uso de maquinillas',
        'Acabados profesionales'
      ]
    },
    {
      title: 'Color Profesional',
      duration: '8 semanas',
      description: 'Especialización en colorimetría y técnicas de color',
      modules: [
        'Teoría del color',
        'Técnicas de aplicación',
        'Corrección de color',
        'Tendencias actuales'
      ]
    }
  ];

  const benefits = [
    'Certificación profesional reconocida',
    'Práctica con modelos reales',
    'Kit de herramientas incluido',
    'Seguimiento personalizado',
    'Oportunidades laborales',
    'Actualizaciones constantes'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <GraduationCap className="w-20 h-20 text-barberia-red mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-oswald font-bold text-white mb-6">
            {t('academyTitle')}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Formamos profesionales con las mejores técnicas y conocimientos del sector
          </p>
          <Button
            onClick={handleContact}
            size="lg"
            className="bg-barberia-red hover:bg-barberia-red-dark text-white font-oswald text-lg px-8 py-6"
          >
            {t('requestInfo')}
          </Button>
        </div>
      </section>

      {/* About Academy */}
      <section className="section-padding bg-barberia-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-oswald font-bold text-white mb-6">
              ¿Por qué elegir nuestra Academia?
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              La Academia NC se distingue por su enfoque práctico y personalizado. Nuestros 
              instructores son profesionales activos con años de experiencia en el sector.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Ofrecemos formación integral que combina técnica, teoría y experiencia real 
              con clientes, preparándote para una carrera exitosa en barbería profesional.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-oswald font-bold text-barberia-red mb-2">
                  50+
                </div>
                <p className="text-gray-300">Estudiantes graduados</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-oswald font-bold text-barberia-red mb-2">
                  95%
                </div>
                <p className="text-gray-300">Tasa de empleabilidad</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video bg-barberia-grey rounded-lg border border-barberia-grey-light flex items-center justify-center">
              <div className="text-center text-gray-400">
                <BookOpen className="w-16 h-16 mx-auto mb-4" />
                <p>Aula de la Academia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section-padding bg-barberia-grey">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-oswald font-bold text-center text-white mb-12">
            {t('courses')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="bg-barberia-black border-barberia-grey-light hover-scale">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-xl font-oswald text-white">
                      {course.title}
                    </CardTitle>
                    <div className="flex items-center text-barberia-red">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="text-sm font-semibold">{course.duration}</span>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    {course.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-white mb-3">Módulos incluidos:</h4>
                  <ul className="space-y-2">
                    {course.modules.map((module, moduleIndex) => (
                      <li key={moduleIndex} className="text-gray-300 text-sm flex items-center">
                        <CheckCircle className="w-4 h-4 text-barberia-red mr-2" />
                        {module}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-barberia-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-oswald font-bold text-center text-white mb-12">
            Beneficios de estudiar con nosotros
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <Award className="w-6 h-6 text-barberia-red mr-3" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-barberia-grey">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-oswald font-bold text-white mb-6">
            Comienza tu carrera profesional hoy
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Únete a nuestra próxima cohorte y conviértete en un barbero profesional certificado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleContact}
              size="lg"
              className="bg-barberia-red hover:bg-barberia-red-dark text-white font-oswald text-lg px-8 py-6"
            >
              {t('requestInfo')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-barberia-red text-barberia-red hover:bg-barberia-red hover:text-white font-oswald text-lg px-8 py-6"
            >
              Ver cronograma
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Academy;
