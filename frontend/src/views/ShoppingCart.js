import React from "react";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import CartProduct from "./CartProduct";
import ButtonPurchase from "./ButtonPurchase";
import ModalLogOrSing from "./ModalLogOrSing";
import ButtonPurchaseLogIn from "./ButtonPurchaseLogIn";

const ShoppingCart = () => {
  const [cookie] = useCookies();
  const token = cookie.token;
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  ///////
  const getTotalPrices = () => {
    const fromLocaleStorage = localStorage.getItem("product");
    const parsed = JSON.parse(fromLocaleStorage);
    const arrayOfProductPrices = parsed.map((m) => {
      const prices = m.price;
      const amount = m.amount;
     // console.log(amount);
      return prices;
    });

    const total = arrayOfProductPrices.reduce((acc, value) => acc + value, 0);
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
        //  console.log(response);
          setCartProducts(response.data);
          getTotalPrices(response.data);
        });
    }
  };
  useEffect(() => {
    getProductsOnCart();
  }, []);

  return (
    <div className="min-vh-100">
      <ModalLogOrSing />
      <div className="container d-flex flex-column ">
        <div className="container">
          {cartProducts.length > 0 ? (
            cartProducts.map((m) => (
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
            ))
          ) : (
            <h1 className="min-vh-100">Shopping Cart Is Empty</h1>
          )}
        </div>
        <div className="d-flex justify-content-center">
          {token ? (
            <ButtonPurchaseLogIn totalPrice={totalPrice} />
          ) : (
            <ButtonPurchase totalPrice={totalPrice} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
