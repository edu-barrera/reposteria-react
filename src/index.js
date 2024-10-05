import Header from "../components/Header";
import Footer from "../components/Footer";

function Inicio() {
  return (
    <div>
      <Header />
      <div>
        <div className="body_index">
          <div className="container mt-12">
            <div className="row align-items-center">
              {/* Primera columna */}
              <div className="col-sm-6 col-md-4 col-lg-4 text-center mb-4">
                <h2 className="titulos">
                  Platícanos tu idea y conviértela en realidad
                </h2>
                <img
                  src="../recursos/Iconos/galletas_prin.png"
                  alt="galletas festejo"
                  className="img-fluid rounded"
                />
                <p className="pregunta">
                  ¿Necesitas algo especial? ¡Nosotros te lo hacemos!
                </p>
                <a href="productos.html#cards-etiquetas">
                  <button className="btn" id="botonGalletas">
                    Descubre nuestras galletas
                  </button>
                </a>
              </div>

              {/* Segunda columna */}
              <div className="col-sm-6 col-md-4 col-lg-4 text-center mb-4">
                <img
                  src="../recursos/Iconos/enam.jpg"
                  alt="galleta_con_corazones"
                  className="img-fluid rounded"
                />
              </div>

              {/* Tercera columna */}
              <div className="col-sm-6 col-md-4 col-lg-4 text-center mb-4">
                <h2 className="titulos">
                  ¿Te gustaría aprender a hacer tus propias galletas?
                </h2>
                <img
                  src="../recursos/Iconos/cocinando.png"
                  alt="Persona horneando"
                  className="img-fluid rounded"
                />
                <p>Aprende con nuestros cursos</p>
                <a href="productos.html">
                  <button className="btn" id="botonCursos">
                    ¡Empieza a hornear!
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Inicio;
