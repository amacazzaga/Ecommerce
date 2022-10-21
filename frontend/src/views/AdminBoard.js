import React, { useState, useEffect } from "react";
import axios from "axios";
import LayoutLoggedAdm from "../components/LayoutLoggedAdm";
import ProductsTable from "./ProductsTable";
import TableHead from "./TableHead";
import FormPostProduct from "./FormPostProduct";

const AdminBoard = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/product").then((response) => {
      setProducts(response.data);
      console.log(response.data);
    });
  }, [products]);

  return (
    <div>
      <LayoutLoggedAdm>
      <FormPostProduct/>
        <TableHead />
        {products.map((m) => (
          <ProductsTable
            name={m.name}
            price={m.price}
            description={m.description}
            image ={m.image}
          />
        ))}
      </LayoutLoggedAdm>
    </div>
  );
};

export default AdminBoard;
