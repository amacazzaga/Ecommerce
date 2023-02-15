import React from "react";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import CartProduct from "./CartProduct";
import ButtonPurchase from "./ButtonPurchase";

const ShoppingCartLogOut = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  ///////
  const getTotalPrices = (products) => {
    const arrayOfProductPrices = products.map((m) => {
      const prices = m.price;
      return prices;
    });
    const total = arrayOfProductPrices.reduce(
      (acc, value) => acc + value /**amount*/,
      0
    );
    setTotalPrice(total);
  };
  ///
  const getProductsOnCart = async () => {
    const fromLocaleStorage = localStorage.getItem("product");
    const parsed = JSON.parse(fromLocaleStorage);
    const arrayOfIds = parsed.map((m) => {
      //map here to send as params an only string of ids
      return m.id;
    });
    if (parsed.length === 0) {
      setCartProducts([]);
      getTotalPrices([]);
    } else {
      await axios
        .get(`http://localhost:4000/product/many?ids=${arrayOfIds.join(",")}`)
        .then((response) => {
          console.log(response);
          setCartProducts(response.data);
          getTotalPrices(response.data);
        });
    }
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
