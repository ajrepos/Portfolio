import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">{t.contact.title}</h2>
        <div className="row justify-content-center">
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h4><i className="fas fa-envelope me-2"></i>Email</h4>
                <p className="mb-0">{t.contact.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;