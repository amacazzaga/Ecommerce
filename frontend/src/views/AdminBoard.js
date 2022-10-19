import React, { useState, useEffect } from "react";
import axios from "axios";
import LayoutLoggedAdm from "../components/LayoutLoggedAdm";
import ProductsTable from "./ProductsTable";

const AdminBoard = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/product").then((response) => {
      setProducts(response.data);
      console.log(response.data);
    });
  }, [products]);

  return (
    <LayoutLoggedAdm>
      {products.map((m) => (
        <ProductsTable
          name={m.name}
          price={m.price}
          description={m.description}
        />
      ))}
    </LayoutLoggedAdm>
  );
};

export default AdminBoard;
