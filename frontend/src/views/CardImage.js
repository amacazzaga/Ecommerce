import React from "react";

const CardImage = ({ imageName }) => {
  const cloudFrontBaseUrl = "https://d3tlwzcpumxs2b.cloudfront.net/";
  return (
    <div class="container">
      <div class="col">
        <div class="col-12">
          <div class="card">
            <img
              src={cloudFrontBaseUrl + imageName}
              className="img-fluid"
              width="300"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardImage;
