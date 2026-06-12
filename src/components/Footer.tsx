import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <div>
          <a 
            href="https://es.linkedin.com/in/antonio-jes%C3%BAs-alguacil-espejo-72a090416" 
            className="text-white mx-2" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/ajrepos"
            className="text-white mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <p className="mt-3">
          &copy; 2026 Antonio Jesús Alguacil Espejo. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;