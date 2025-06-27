
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center bg-barberia-black">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-8xl font-oswald font-bold text-barberia-red mb-4">
            404
          </div>
          <h1 className="text-3xl font-oswald font-bold text-white mb-4">
            Página no encontrada
          </h1>
          <p className="text-gray-300 mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-barberia-red hover:bg-barberia-red-dark text-white font-oswald">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Volver al Inicio
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-barberia-red text-barberia-red hover:bg-barberia-red hover:text-white font-oswald">
              <Link to="#" onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver Atrás
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
