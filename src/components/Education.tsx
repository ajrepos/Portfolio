import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Education: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="formacion" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">{t.education.title}</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">{t.education.formal}</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{t.education.eso}</li>
                  <li className="list-group-item">{t.education.cfgm}</li>
                  <li className="list-group-item">{t.education.cfgs}</li>
                  <li className="list-group-item">{t.education.cybersecuritySpecialization}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">{t.education.complementary}</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{t.education.complementaryItems.linux}</li>
                  <li className="list-group-item">{t.education.complementaryItems.hardware}</li>
                  <li className="list-group-item">{t.education.complementaryItems.cisco}</li>
                  <li className="list-group-item">{t.education.complementaryItems.ethicalHacking}</li>
                  <li className="list-group-item">{t.education.complementaryItems.docker}</li>
                  <li className="list-group-item">{t.education.complementaryItems.aws}</li>
                  <li className="list-group-item">{t.education.complementaryItems.cloudflare}</li>
                  <li className="list-group-item">{t.education.complementaryItems.mysql}</li>
                  <li className="list-group-item">{t.education.complementaryItems.java}</li>
                  <li className="list-group-item">{t.education.complementaryItems.python}</li>
                  <li className="list-group-item">{t.education.complementaryItems.cLang}</li>
                  <li className="list-group-item">{t.education.complementaryItems.frameworks}</li>
                  <li className="list-group-item">{t.education.complementaryItems.forensics}</li>
                  <li className="list-group-item">{t.education.complementaryItems.burp}</li>
                  <li className="list-group-item">{t.education.complementaryItems.metasploit}</li>
                  <li className="list-group-item">{t.education.complementaryItems.socialEngineering}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;