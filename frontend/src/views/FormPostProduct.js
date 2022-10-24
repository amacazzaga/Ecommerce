import React from "react";

const FormPostProduct = () => {
  return (
    <div class="accordion-item m-2">
      <h2 class="accordion-header" id="headingOne">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Add a Product
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          {/*here goes the form*/}
          <div className="container">
            <form>
              {/*name*/}
              <div class="mb-3 row">
                <div class="col-sm-12">
                  <input type="text" readonly class="form-control" placeholder="Name"></input>
                </div>
              </div>
              {/*category*/}
              <select class="form-select" aria-label="Default select example">
                <option selected>Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </form>
          </div>
          {/*end of the form*/}
        </div>
      </div>
    </div>
  );
};

export default FormPostProduct;
