import React from "react";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import CartProduct from "./CartProduct";
import ButtonPurchase from "./ButtonPurchase";

const ShoppingCartLogOut = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const fromLocaleStorage = localStorage.getItem("product");
  const parsed = JSON.parse(fromLocaleStorage);
  ///////
  const getTotalPrices = () => {
    const arrayOfProductPrices = cartProducts.map((m) => {
      const prices = m.price;
      return prices;
    });
    const total = arrayOfProductPrices.reduce((acc, value) => acc + value, 0);
    setTotalPrice(total);
  };
///
  const getProductsOnCart = async () => {
    await axios
      .get(`http://localhost:4000/product/many?ids=${parsed.join(",")}`)
      .then((response) => {
        console.log(response);
        setCartProducts(response.data);
        getTotalPrices();
      });
  };
  useEffect(() => {
    getProductsOnCart();
  }, []);

  return (
    <Layout>
      <div className="container d-flex flex-column ">
        <div className="container">
          {cartProducts.map((m) => (
            <div className="col-xl-6 col-lg-4 col-md-6">
              <CartProduct
                key={m._id}
                name={m.name}
                imageNameArray={m.imageNameArray}
                id={m._id}
                price={m.price}
                description={m.description}
                reloadProducts={getProductsOnCart}
              />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center">
          <ButtonPurchase totalPrice={totalPrice} />
        </div>
      </div>
    </Layout>
  );
};

export default ShoppingCartLogOut;