import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { t, currentLang, toggleLanguage } = useLanguage();

  return (
    <header className="bg-primary text-white py-4">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand text-white" href="#">
            {t.name}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="#inicio">
                  {t.nav.home}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#sobre-mi">
                  {t.nav.about}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#formacion">
                  {t.nav.education}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#habilidades">
                  {t.nav.skills}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#proyectos">
                  {t.nav.projects}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#contacto">
                  {t.nav.contact}
                </a>
              </li>
              <li className="nav-item">
                <button 
                  className="nav-link text-white btn btn-link" 
                  onClick={toggleLanguage}
                  style={{ cursor: 'pointer' }}
                >
                  {currentLang === 'es' ? 'English' : 'Español'}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;