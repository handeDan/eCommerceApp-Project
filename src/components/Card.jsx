import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Card() {
  const [products, setProducts] = useState([]); // Ürünler için state
  const [cart, setCart] = useState([]); //sepete eklemekle alakalı kısım..

  useEffect(() => {
    axios
      .get("api/cart")
      .then((response) => setProducts(response.data.items))
      .catch((error) => console.log(error));
  }, []);

  const history = useHistory();

  //butona tıklayınca sepette sayı artsın:
  const addToCart = (product) => {
    // Sepete ekleme fonksiyonu
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Ürün zaten sepetteyse, miktarı arttır
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Ürün sepette yoksa, ekle
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            className="max-w-xs rounded overflow-hidden shadow-lg  min-w-[300px] min-h-[450px] flex flex-col justify-between"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[200px] object-contain"
            />
            <div className="p-4 flex flex-col flex-grow text-center">
              <div className="m-5">
                <h2 className="text-lg font-semibold text-center">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-600 text-center">
                  {product.description}
                </p>
                <p>
                  <strong>Fiyat: ${product.price}</strong>
                </p>
              </div>
              <button
                onClick={addToCart}
                className="bg-gray-950 hover:bg-gray-500 text-s text-white font-bold py-1 px-3 rounded-full m-3 h-10"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Card;
