const cloudFrontBaseUrl = "https://d3tlwzcpumxs2b.cloudfront.net/";
const productArrayToStorage = JSON.parse(localStorage.getItem("product")) || [];

const CardProduct = ({ name, imageNameArray, id ,price}) => {
  return (
    <div>
      <div class="card m-2">
        <img
          src={cloudFrontBaseUrl + imageNameArray[0]}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="d-flex justify-content-start ps-3 fw-bolder">{"$"+price}</div>
        <div className="container d-flex justify-content-between">          
          <button type="button" class="btn btn-primary  m-1">
            Buy It!
          </button>
          <button
            class="nav-link border border-white"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Add To Shopping Cart"
            onClick={() => {
              if (productArrayToStorage.includes(id)) return;
              productArrayToStorage.push(id);
              localStorage.setItem(
                "product",
                JSON.stringify(productArrayToStorage)
              );
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-cart3"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
