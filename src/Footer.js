import React from "react";

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
      <div className="col-md-4 d-flex align-items-center">
        <a
          href="/"
          className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
        >
          <img src="../recursos/Iconos/oso.png" className="logo" alt="Logo" />
        </a>
        <span className="mb-3 mb-md-0 text-muted">
          Mel Repostería Proyecto VII
        </span>
      </div>

      <ul className="nav col-md-4 justify-content-center list-unstyled">
        <li className="ms-3">
          <a
            className="text-muted"
            href="https://www.instagram.com/melreposteriamx/"
          >
            <i className="bi bi-instagram"></i> <span>Instagram</span>
          </a>
        </li>
        <li className="ms-3">
          <a
            className="text-muted"
            href="https://www.facebook.com/profile.php?id=100067550652660"
          >
            <i className="bi bi-facebook"></i> <span>Facebook</span>
          </a>
        </li>
        <li className="ms-3">
          <a className="text-muted" href="https://wa.me/5217714758375">
            <i className="bi bi-whatsapp"></i> <span>Whatsapp</span>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
