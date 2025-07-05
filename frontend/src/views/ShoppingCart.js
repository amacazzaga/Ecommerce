import React from "react";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";
import axios from "axios";
import CartProduct from "./CartProduct";
import ButtonPurchase from "./ButtonPurchase";
import ModalLogOrSing from "./ModalLogOrSing";
import ButtonPurchaseLogIn from "./ButtonPurchaseLogIn";

const ShoppingCart = () => {
  const [cookie] = useCookies();
  const token = cookie.token;
  const [successMessage, setSuccessMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [cartProducts, setCartProducts] = useState([]);
  
  ////
  const getProductsOnCart = async () => {
    const fromLocaleStorage = localStorage.getItem("product");
    const parsed = JSON.parse(fromLocaleStorage);
    const arrayOfIds = parsed.map((m) => {
      //map here to send as params an only string of ids
      return m.id;
    });
    if (parsed.length === 0) {
      setCartProducts([]);
    //  getTotalPrices([]);
    } else {
      await axios
        .get(`http://localhost:4000/product/many?ids=${arrayOfIds.join(",")}`)
        .then((response) => {
          //  console.log(response);
          setCartProducts(response.data);
         // getTotalPrices(response.data);
        });
    }
  };
  ///////

  ///
  const buyProducts = async () => {
    const decoded = jwt_decode(token);
    const idUser = decoded.id;
    const fromLocaleStorage = localStorage.getItem("product");
    const parsed = JSON.parse(fromLocaleStorage);
    try {
      const itemsToBuy = parsed.map((m) => {
        return { idProduct: m.id, amount: m.amount, unitPrice: m.price };
      });
      const resp = await axios.post(
        `http://localhost:4000/sales`,
        {
          idUser: idUser,
          details: itemsToBuy,
        },
        {
          headers: { Authorization: token },
        }
      );
      console.log(resp);
      // show notification//
      setSuccessMessage("success");
      // empty localstorage//
      const emptyCart = [];
      localStorage.setItem("product", JSON.stringify(emptyCart));
      //scroll to top
      window.scroll({
        top: 0,
      });
      getProductsOnCart();
      //error
    } catch (err) {
      setErrorMessage("error");

    }
  };
  //
  useEffect(() => {
    getProductsOnCart();
  }, []);
  ///////
  return (
    <div >
      <ModalLogOrSing />
      {successMessage ? (
        <div class="alert alert-success" role="alert">
          Purchase has been succesfull, you can see your shopping history :
          <a href="/myshopping" class="alert-link">
            My Shopping
          </a>
        </div>
      ) : (
        ""
      )}
      {errorMessage ? ( <div class="alert alert-danger" role="alert">
          Purchase has been fail, you can see your shopping history :
          <a href="/myshopping" class="alert-link">
            My Shopping
          </a>
        </div>) :( "")}
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
            <div>
              
            </div>
          )}
        </div>
        <div className="d-flex justify-content-center">
          {token ? (
            <ButtonPurchaseLogIn
              buyProducts={buyProducts}
      
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
