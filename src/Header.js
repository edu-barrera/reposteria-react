import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar fixed-top navbar-expand-sm bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="../recursos/fotos-team/logo.png"
            className="logo"
            alt="logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              {
                <Link className="nav-link" to={"/Inicio"}>
                  Inicio
                </Link>
              }
            </li>
            <li className="nav-item">
              {
                <Link className="nav-link" to={"/Productos"}>
                  Productos
                </Link>
              }
            </li>
            <li className="nav-item"></li>
            <li className="nav-item">
              {
                <Link className="nav-link" to={"/Contactanos"}>
                  Contactanos
                </Link>
              }
            </li>
            <li className="nav-item dropdown">
              {
                <Link className="nav-link" to={"/Acerca"}>
                  Acerca de nosotros
                </Link>
              }
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="productsForm.html">
                    Mel repostería
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="acerca.html">
                    Cookie Coding
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav flew-row flex-wrap navbar-icons">
            <li className="nav-item">
              {
                <Link className="nav-link" to={"/Login"}>
                  <img src="../recursos/Iconos/usuario.png" alt="usuario" />
                </Link>
              }
            </li>
            <li className="nav-item">
              {
                <Link className="nav-link" to={"/Carrito"}>
                  <img src="../recursos/Iconos/bolsa.png" alt="carrito" />
                </Link>
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
