import axios from "axios";
import React, { useEffect, useState } from "react";

function CatalogPage() {
  const [products, setProducts] = useState([]); // Ürünler için state

  useEffect(() => {
    axios
      .get("api/cart")
      .then((response) => setProducts(response.data.items))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>Yükleniyor...</p>
      ) : (
        products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "100px" }}
            />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>
              <strong>Fiyat: ${product.price}</strong>
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default CatalogPage;
