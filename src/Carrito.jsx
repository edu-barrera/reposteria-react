import Header from "../components/Header";
import Footer from "../components/Footer";

function Carrito() {
  return (
    <div>
      <Header />
      <header id="navbar-header"></header>

      <div className="container">
        <h1
          style={{
            textAlign: "center",
            fontFamily: `'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif`,
          }}
        >
          Carrito en construcción 🍪 🍪 🍪
        </h1>
        <div style={{ textAlign: "center" }}>
          <img
            style={{ width: "auto", height: "auto" }}
            src="../recursos/productos/Carrito1.png"
            alt="Carrito Kawai"
          />
        </div>
      </div>

      <footer id="footer"></footer>
      <Footer />
    </div>
  );
}

export default Carrito;
