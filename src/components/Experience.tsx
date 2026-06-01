import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experiencia" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">{t.experience.title}</h2>
        <div className="row">
          {/* IMIBIC */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <img
                  src="/imagenes/logoimibic.png"
                  alt="Logo IMIBIC"
                  className="img-fluid mb-3"
                  style={{ maxHeight: '80px' }}
                />
                <h4>{t.experience.imibic}</h4>
                <p className="text-muted">{t.experience.internshipDuration}</p>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="fas fa-laptop-code me-2"></i>
                    <span>{t.experience.webdev}</span>
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-shield-alt me-2"></i>
                    <span>{t.experience.pentesting}</span>
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-database me-2"></i>
                    <span>{t.experience.databases}</span>
                  </li>
                  <li>
                    <i className="fas fa-server me-2"></i>
                    <span>{t.experience.servers}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* AÑADE ESTO - Carrier Montilla */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <img
                  src="/imagenes/carrier.png"
                  alt="Logo Carrier Montilla"
                  className="img-fluid mb-3"
                  style={{ maxHeight: '80px' }}
                />
                <h4>{t.experience.carrier}</h4>
                <p className="text-muted">{t.experience.carrierDuration}</p>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="fas fa-code me-2"></i>
                    <span>{t.experience.simulator}</span>
                  </li>
                  <li className="mb-2">
                    <i className="fab fa-react me-2"></i>
                    <span>React</span>
                  </li>
                  <li>
                    <i className="fab fa-laravel me-2"></i>
                    <span>Laravel</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Clases Particulares */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <img
                  src="/imagenes/profesor.jpg"
                  alt="Logo profesor"
                  className="img-fluid mb-3"
                  style={{ maxHeight: '80px' }}
                />
                <h4>{t.experience.tutoring}</h4>
                <p className="text-muted">{t.experience.tutoringDuration}</p>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="fas fa-chalkboard-teacher me-2"></i>
                    <span>{t.experience.subjects}</span>
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-users me-2"></i>
                    <span>{t.experience.students}</span>
                  </li>
                  <li>
                    <i className="fas fa-certificate me-2"></i>
                    <span>{t.experience.preparation}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;