import { useState } from 'react';
import type { FC } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects: FC = () => {
  const { t } = useLanguage();
  
  // Estados individuales para cada proyecto
  const [expandedLyra, setExpandedLyra] = useState(false);
  const [expandedFenix, setExpandedFenix] = useState(false);
  const [expandedSpectre, setExpandedSpectre] = useState(false);
  const [expandedArpvenom, setExpandedArpvenom] = useState(false);
  const [expandedSupply, setExpandedSupply] = useState(false); // Nuevo estado

  const toggleLyra = () => setExpandedLyra(!expandedLyra);
  const toggleFenix = () => setExpandedFenix(!expandedFenix);
  const toggleSpectre = () => setExpandedSpectre(!expandedSpectre);
  const toggleArpvenom = () => setExpandedArpvenom(!expandedArpvenom);
  const toggleSupply = () => setExpandedSupply(!expandedSupply); // Nuevo toggle

  return (
    <section id="proyectos" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">{t.projects.title}</h2>
        <div className="row">
          {/* LYRA - Proyecto 1 */}
          <div className="col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
            <div className="card w-100 d-flex flex-column">
              <img
                src="/imagenes/lyra.jpg"
                className="card-img-top"
                alt="LYRA"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{t.projects.lyraTitle}</h5>
                <p className="card-text flex-grow-1">{t.projects.lyraDesc}</p>
                <button
                  className="btn btn-primary mt-2"
                  onClick={toggleLyra}
                >
                  {expandedLyra ? t.see_less : t.see_more}
                </button>
                {expandedLyra && (
                  <p className="card-text mt-3">{t.projects.lyraExtended}</p>
                )}
              </div>
            </div>
          </div>

          {/* FENIX Framework - Proyecto 2 */}
          <div className="col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
            <div className="card w-100 d-flex flex-column">
              <img
                src="/imagenes/fenix.png"
                className="card-img-top"
                alt="FENIX Framework"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{t.projects.fenixTitle}</h5>
                <p className="card-text flex-grow-1">{t.projects.fenixDesc}</p>
                <button
                  className="btn btn-primary mt-2"
                  onClick={toggleFenix}
                >
                  {expandedFenix ? t.see_less : t.see_more}
                </button>
                {expandedFenix && (
                  <p className="card-text mt-3">{t.projects.fenixExtended}</p>
                )}
              </div>
            </div>
          </div>

          {/* SPECTRE - Proyecto 3 */}
          <div className="col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
            <div className="card w-100 d-flex flex-column">
              <img
                src="/imagenes/spectre.png"
                className="card-img-top"
                alt="SPECTRE"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{t.projects.spectreTitle}</h5>
                <p className="card-text flex-grow-1">{t.projects.spectreDesc}</p>
                <button
                  className="btn btn-primary mt-2"
                  onClick={toggleSpectre}
                >
                  {expandedSpectre ? t.see_less : t.see_more}
                </button>
                {expandedSpectre && (
                  <p className="card-text mt-3">{t.projects.spectreExtended}</p>
                )}
              </div>
            </div>
          </div>

          {/* ARPVENOM - Proyecto 4 */}
          <div className="col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
            <div className="card w-100 d-flex flex-column">
              <img
                src="/imagenes/arpvenom.png"
                className="card-img-top"
                alt="ARPVENOM"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{t.projects.arpvenomTitle}</h5>
                <p className="card-text flex-grow-1">{t.projects.arpvenomDesc}</p>
                <button
                  className="btn btn-primary mt-2"
                  onClick={toggleArpvenom}
                >
                  {expandedArpvenom ? t.see_less : t.see_more}
                </button>
                {expandedArpvenom && (
                  <p className="card-text mt-3">{t.projects.arpvenomExtended}</p>
                )}
              </div>
            </div>
          </div>

          {/* SUPPLY CHAIN SIMULATOR - Proyecto 5 (NUEVO) */}
          <div className="col-md-6 col-lg-4 mb-4 d-flex align-items-stretch">
            <div className="card w-100 d-flex flex-column">
              <img
                src="/imagenes/carriersimulador.png"
                className="card-img-top"
                alt="Supply Chain Simulator"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{t.projects.supplyTitle}</h5>
                <p className="card-text flex-grow-1">{t.projects.supplyDesc}</p>
                <button
                  className="btn btn-primary mt-2"
                  onClick={toggleSupply}
                >
                  {expandedSupply ? t.see_less : t.see_more}
                </button>
                {expandedSupply && (
                  <p className="card-text mt-3">{t.projects.supplyExtended}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;