import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const technicalSkills = [
    t.skills.linux,
    t.skills.hardware,
    t.skills.fullstack,
    t.skills.webdev,
    t.skills.networking,
    t.skills.security,
    t.skills.databases,
    t.skills.cloud
  ];

  const softSkills = [
    t.skills.teamwork,
    t.skills.communication,
    t.skills.problem,
    t.skills.adaptability,
    t.skills.leadership
  ];

  return (
    <section id="habilidades" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">{t.skills.title}</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">{t.skills.technical}</h4>
                <div className="d-flex flex-wrap">
                  {technicalSkills.map((skill, index) => (
                    <span key={index} className="badge bg-primary skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">{t.skills.soft}</h4>
                <div className="d-flex flex-wrap">
                  {softSkills.map((skill, index) => (
                    <span key={index} className="badge bg-success skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sección de Idiomas - Ahora con el mismo tamaño que las tarjetas */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="card h-100">
              <div className="card-body text-center">
                <h4 className="card-title">{t.skills.languages}</h4>
                <div className="d-flex flex-column align-items-center">
                  <p className="mb-2 fs-5">{t.skills.english}</p>
                  <img 
                    src="../imagenes/uk.png"
                    alt="UK Flag"
                    style={{ width: '50px', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;