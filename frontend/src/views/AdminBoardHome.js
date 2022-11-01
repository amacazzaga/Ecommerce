import React, { useState, useEffect } from "react";
import axios from "axios";
import LayoutLoggedAdm from "../components/LayoutLoggedAdm";
import ProductsTable from "./ProductsTable";
import ProductsTableHead from "./ProductsTableHead";
import FormPostProduct from "./FormPostProduct";

const AdminBoardHome = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/product").then((response) => {
      setProducts(response.data);
    });
  }, [products]);

  return (
    <div>
      <LayoutLoggedAdm>
        <FormPostProduct />
        <ProductsTableHead />
        {products.map((m) => (
          <ProductsTable
            key={m._id}
            id={m._id}
            name={m.name}
            price={m.price}
            description={m.description}
            image={m.image}
            category={m.category}
          />
        ))}
      </LayoutLoggedAdm>
    </div>
  );
};

export default AdminBoardHome;
