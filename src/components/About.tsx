import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center">{t.about.title}</h2>
        <p className="justificado">{t.about.p1}</p>
        <p className="justificado">{t.about.p2}</p>
        <p className="justificado">{t.about.p3}</p>
        <p className="justificado">{t.about.p4}</p>
        <div className="row text-center">
          <div className="col-md-4">
            <i className="fas fa-code fa-3x mb-3"></i>
            <h4>{t.about.programming}</h4>
            <p className="justificado">{t.about.programmingText}</p>
          </div>
          <div className="col-md-4">
            <i className="fas fa-pencil-alt fa-3x mb-3"></i>
            <h4>{t.about.design}</h4>
            <p className="justificado">{t.about.designText}</p>
          </div>
          <div className="col-md-4">
            <i className="fas fa-users fa-3x mb-3"></i>
            <h4>{t.about.teamwork}</h4>
            <p className="justificado">{t.about.teamworkText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;