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
      .get(`https://www.amacazzaga-ecommerce.store/product?page=${pagination}`)
      .then((response) => {
        if (response.data.length == 0) return;
        setProducts(response.data);
      });
  };
  useEffect(() => {
    fetchProducts();
  }, [pagination]);

  return (
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
      <div className="container-xxl">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <button
                class="page-link"
                onClick={() =>
                  setPagination(
                    pagination < 0 ? pagination === 0 : pagination - 1
                  )
                }
              >
                Previous
              </button>
            </li>
            <li class="page-item">
              <button class="page-link" onClick={() => setPagination(0)}>
                1
              </button>
            </li>
            <li class="page-item">
              <button class="page-link" onClick={() => setPagination(1)}>
                2
              </button>
            </li>
            <li class="page-item">
              <button class="page-link" onClick={() => setPagination(2)}>
                3
              </button>
            </li>
            <li class="page-item">
              <button class="page-link" onClick={() => setPagination(3)}>
                4
              </button>
            </li>
            <li class="page-item">
              <button class="page-link" onClick={() => setPagination(4)}>
                5
              </button>
            </li>
            <li class="page-item">
              <button
                class="page-link"
                value=""
                onClick={() => setPagination((pagination) => pagination + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </LayoutLoggedAdm>
  );
};

export default AdminBoardHome;
