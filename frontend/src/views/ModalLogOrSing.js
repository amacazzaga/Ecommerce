import React from "react";

const ModalLogOrSing = () => {
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title m-1" id="exampleModalLabel">
              You Must Be User To Shopping
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class=" modal-body">
            <div className=" container d-flex row"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLogOrSing;
