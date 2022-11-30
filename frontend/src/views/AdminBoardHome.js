import React, { useState, useEffect } from "react";
import axios from "axios";
import LayoutLoggedAdm from "../components/LayoutLoggedAdm";
import ProductsTable from "./ProductsTable";
import ProductsTableHead from "./ProductsTableHead";
import FormPostProduct from "./FormPostProduct";

const AdminBoardHome = () => {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(0);
  const fetchProducts = () => {
    axios
      .get(`http://localhost:4000/product?page=${pagination}&limit=4`)
      .then((response) => {
        setProducts(response.data);
      });
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <LayoutLoggedAdm>
        <FormPostProduct reloadProducts={fetchProducts} />
        <ProductsTableHead />
        {products.map((m) => (
          <ProductsTable
            reloadProducts={fetchProducts}
            key={m._id}
            id={m._id}
            name={m.name}
            price={m.price}
            description={m.description}
            image={m.image}
            category={m.category}
          />
        ))}
        <div className="container-xxl mt-2">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <button
                  class="page-link"
                  value={pagination - 1}
                  onClick={(e) => setPagination(e.target.value)}
                >
                  Previous
                </button>
              </li>
              <li class="page-item">
                <button
                  class="page-link"
                  value="0"
                  onClick={(e) => setPagination(e.target.value)}
                >
                  1
                </button>
              </li>
              <li class="page-item">
                <button
                  class="page-link"
                  value="1"
                  onClick={(e) => setPagination(e.target.value)}
                >
                  2
                </button>
              </li>
              <li class="page-item">
                <button
                  class="page-link"
                  value="2"
                  onClick={(e) => setPagination(e.target.value)}
                >
                  3
                </button>
              </li>
              <li class="page-item">
                <button class="page-link" value="">
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </LayoutLoggedAdm>
    </div>
  );
};

export default AdminBoardHome;
