import React, { useEffect } from 'react';

const LandingPage = () => {
    useEffect(() => {
        document.title = "ValoraTuNegocio | Potencia tu presencia en línea con reseñas auténticase";
      }, []);

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      <header className="text-center p-8">
        <h1 className="text-4xl font-bold text-blue-700">ValoraTuNegocio: Potencia tu presencia en línea con reseñas auténticas</h1>
        <p className="text-xl mt-2">La mejor herramienta para recibir feedback reales de tus clientes.</p>
      </header>

      <section className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FeatureCard
            icon="chart-bar"
            title="Análisis en Tiempo Real"
            description="Visualiza y analiza el feedback de tus clientes en tiempo real."
          />
          <FeatureCard
            icon="users"
            title="Para Todos los Negocios"
            description="Ideal para cualquier tipo de negocio que busque mejorar su servicio al cliente."
          />
          <FeatureCard
            icon="hand-pointer"
            title="Fácil de Usar"
            description="Interfaz sencilla y amigable para gestionar y entender fácilmente."
          />
        </div>
      </section>

      <section className="bg-blue-100 text-center p-8">
        <h2 className="text-3xl font-bold text-blue-700">Únete a los cientos de negocios que ya usan Valoratunegocio.click</h2>
        <button className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
          Regístrate Ahora
        </button>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <i className={`fas fa-${icon} fa-3x text-blue-500`}></i>
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default LandingPage;
