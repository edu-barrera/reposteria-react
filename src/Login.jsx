import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/login.css";

export default function Login() {
  return (
    <div>
      <Header />
      <header id="navbar-header"></header>
      <br />
      <main className="imagenFondo" style={{ position: "relative" }}>
        <div className="container-registro">
          <div className="form-container">
            <h2 className="text-center text-large" style={{ color: "#FF2E73" }}>
              Iniciar sesión
            </h2>
            <form id="loginForm">
              <div className="mb-3">
                <label htmlFor="emailLogin" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailLogin"
                  placeholder="Ingresar correo electrónico"
                  required
                />
                <div
                  id="emailLoginAlert"
                  className="alert alert-warning"
                  role="alert"
                  style={{ display: "none" }}
                ></div>
              </div>
              <div className="mb-3">
                <label htmlFor="passwordLogin" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordLogin"
                  placeholder="Ingresar contraseña"
                  required
                />
                <div
                  id="passwordLoginAlert"
                  className="alert alert-warning"
                  role="alert"
                  style={{ display: "none" }}
                ></div>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary mb-3"
                  style={{
                    width: "50%",
                    color: "white",
                    backgroundColor: "#FF2E73",
                  }}
                >
                  Ingresar
                </button>
              </div>
            </form>
          </div>

          <div className="form-container">
            <h2 className="text-center text-large" style={{ color: "#FF2E73" }}>
              Registro
            </h2>
            <form id="registroFormulario">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Ingresar nombre"
                  required
                  autoFocus
                />
                <div
                  id="nameAlert"
                  className="alert alert-warning"
                  role="alert"
                  style={{ display: "none" }}
                ></div>
              </div>
              <div className="mb-3">
                <label htmlFor="emailRegistro" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailRegistro"
                  placeholder="Ingresar correo electrónico"
                  required
                />
                <div
                  id="emailRegistroAlert"
                  className="alert alert-warning"
                  role="alert"
                  style={{ display: "none" }}
                ></div>
              </div>
              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">
                  Teléfono
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="telefono"
                  placeholder="Ingresar teléfono"
                  required
                />
                <div
                  id="telefonoAlert"
                  className="alert alert-warning"
                  role="alert"
                  style={{ display: "none" }}
                ></div>
              </div>
              <div className="mb-3">
                <label htmlFor="passwordRegistro" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordRegistro"
                  placeholder="Ingresar contraseña"
                  required
                />
                <div
                  id="passwordRegistroAlert"
                  className="alert alert-warning"
                  role="alert"
                  style={{ display: "none" }}
                ></div>
              </div>
              <div className="mb-3">
                <label htmlFor="passwordConfirm" className="form-label">
                  Confirmar Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordConfirm"
                  placeholder="Confirmar contraseña"
                  required
                />
                <div
                  id="passwordConfirmAlert"
                  className="alert alert-warning"
                  role="alert"
                  style={{ display: "none" }}
                ></div>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary mb-3"
                  style={{
                    width: "50%",
                    color: "white",
                    backgroundColor: "#FF2E73",
                  }}
                >
                  Registrar
                </button>
              </div>
              <div
                id="registroSuccessAlert"
                className="alert alert-success"
                role="alert"
                style={{ display: "none" }}
              ></div>
            </form>
          </div>
        </div>
      </main>
      <br />
      <Footer />
    </div>
  );
}
