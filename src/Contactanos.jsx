import Header from "../components/Header";
import Footer from "../components/Footer";

function Contactanos() {
  return (
    <div className="body_index">
      <Header />
      <header id="navbar-header"></header>

      <main className="imagenFondo" style={{ position: "relative" }}>
        <div className="row justify-content-center">
          <div className="col-md-6 d-md-block d-none"></div>
          <div className="col-md-6 d-md-block d-none"></div>
        </div>

        <div className="container" id="container">
          <div
            className="row justify-content-center"
            style={{ marginInline: "10%" }}
          >
            <div
              className="col-md-7 mt-3 mb-3"
              style={{
                border: "4px solid #FF2E73",
                backgroundColor: "aliceblue",
              }}
            >
              <h4
                style={{
                  textAlign: "center",
                  fontSize: "large",
                  color: "#FF2E73",
                  marginTop: "20px",
                }}
              >
                ¡¡Contáctanos!!
              </h4>
              <div className="mb-3">
                <form id="contact-form">
                  <label htmlFor="name" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="inputNombre"
                    placeholder="Escribe tu nombre completo."
                  />
                </form>
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="inputCorreo"
                  placeholder="Escribe tu correo."
                />
              </div>

              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">
                  Celular
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="telefono"
                  name="inputCelular"
                  placeholder="Escribe tu número de celular a 10 dígitos."
                />
              </div>

              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">
                  Mensaje
                </label>
                <textarea
                  className="form-control"
                  name="inputMensaje"
                  id="mensaje"
                  placeholder="Escribe detalladamente en qué podemos ayudarte."
                  rows="3"
                ></textarea>
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  className="btn btn-primary mb-3"
                  style={{
                    width: "50%",
                    height: "auto",
                    color: "white",
                    backgroundColor: "#FF2E73",
                  }}
                  id="btnEnviar"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contactanos;
