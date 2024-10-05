import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../components/products.css";

function ProductCard({ product }) {
  return (
    <div className="card mb-4" data-id={product.id}>
      <div>
        <img
          src={product.image || product.img}
          className="card-img-top"
          alt="image"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.title || product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p style={{ fontWeight: "bold", color: "black" }}>
          ${product.price || product.precio}
        </p>
        <div className="card-info" style={{ textAlign: "center" }}>
          <a href={product.link || "#"} className="btn btn-delete">
            Añadir al carrito
          </a>
        </div>
      </div>
    </div>
  );
}

function EtiquetaCard({ etiqueta }) {
  return (
    <div className="card mb-4">
      <div>
        <a href={etiqueta.link}>
          <img src={etiqueta.img} className="card-img-top" alt="image" />
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">{etiqueta.name}</h5>
        <p className="card-text">{etiqueta.description}</p>
        <p style={{ fontWeight: "bold", color: "black" }}>${etiqueta.precio}</p>
        <div className="card-info" style={{ textAlign: "center" }}>
          <a href={etiqueta.carrito} className="btn" id="btnEnviar">
            Añadir al carrito
          </a>
        </div>
      </div>
    </div>
  );
}

function ProductsList({ products }) {
  return (
    <div id="list-items">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

function EtiquetasList({ etiquetas }) {
  return (
    <div id="etiquetas-items">
      {etiquetas.map((etiqueta, index) => (
        <EtiquetaCard key={index} etiqueta={etiqueta} />
      ))}
    </div>
  );
}

function loadProductsFromLocalStorage(addEtiquetaItem) {
  let storedProducts = JSON.parse(localStorage.getItem("productos")) || [];
  storedProducts.forEach((product) => {
    addEtiquetaItem(product);
  });
}

function Acerca() {
  const products = [
    {
      name: "Decoración estilo Acuarela",
      img: "../recursos/productos/acuarela3.jpg",
      description: "Sumérgete en el emocionante universo de la decoración...",
      precio: "250",
      link: "curso1.html",
      carrito: "carrito.html",
    },
    {
      name: "Decoración de Personajes",
      img: "../recursos/productos/bobesponjaHalloween.jpg",
      description: "Aprende a decorar deliciosos postres...",
      precio: "250",
      link: "curso2.html",
      carrito: "carrito.html",
    },
    // more products
  ];

  const etiquetas = [
    {
      name: "Navidad",
      img: "../recursos/productos/navidad.jpg",
      description: "Archivo PDF Con 5 diseños diferentes...",
      precio: "50",
      link: "#",
      carrito: "carrito.html",
    },
    {
      name: "Día de Muertos",
      img: "../recursos/productos/dia de muertos.jpg",
      description: "Archivo PDF Con 5 diseños diferentes...",
      precio: "50",
      link: "#",
      carrito: "carrito.html",
    },
    // more etiquetas
  ];

  const addEtiquetaItem = (item) => {
    const etiqueta = {
      name: item.name,
      img: item.img,
      description: item.description,
      precio: item.precio,
      link: item.link,
      carrito: item.carrito,
    };
    etiquetas.push(etiqueta);
  };

  useEffect(() => {
    loadProductsFromLocalStorage(addEtiquetaItem);
  }, []);

  return (
    <div>
      <Header />
      <ProductsList products={products} />
      <EtiquetasList etiquetas={etiquetas} />
      <Footer />
    </div>
  );
}

export default Acerca;
