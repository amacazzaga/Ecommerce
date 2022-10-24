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
          <div className="container">
            <form
              onSubmit={() => {
                console.log("form submite");
              }}
              className="form border border-5 rounded-3 mb-1 mt-1"
            >
              <table class="table container">
                <thead>
                  <tr>
                    <th className="col-2">Name</th>
                    <th className="col-2">Price</th>
                    <th className="col-2">Description</th>
                    <th className="col-2">Category</th>
                    <th className="col-2">Image</th>
                    <th className="col-1"></th>
                    <th className="col-1"></th>
                  </tr>
                </thead>
              </table>
              <input className="col-2 m-1"></input>
              <input className="col-2 m-1"></input>
              <input className="col-2 m-1"></input>
              <input className="col-2 m-1"></input>
              <input className="col-2 m-1"></input>
              <button
                className="btn btn-primary btn-sm mb-2 col-1 m-1 "
                type="submit"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPostProduct;
