import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      className="d-flex justify-content-center align-items-center text-center position-relative"
      style={{
        height: '100vh',
        background: "url('/imagenes/wallpaper.png') no-repeat center center",
        backgroundSize: 'cover'
      }}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
      <div className="position-relative z-index-1 text-white">
        <h1>{t.hero.title}</h1>
        <p className="lead">{t.hero.subtitle}</p>
        <div className="d-flex justify-content-center mt-4">
          <div
            className="rounded-circle border border-light border-3 d-flex justify-content-center align-items-center overflow-hidden"
            style={{
              width: '350px',
              height: '350px',
              backgroundColor: 'rgba(0,0,0,0.2)',
              boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
            }}
          >
            <img
              src="/imagenes/perfil.jpg"
              alt="Presentation image"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;