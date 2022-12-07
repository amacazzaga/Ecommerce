import React from "react";

const CardImage = ({ imageName }) => {
  const cloudFrontBaseUrl = "https://d3tlwzcpumxs2b.cloudfront.net/";
  return (
    <div class="card align-items-center border border-5 m-1 ">
      <img
        src={cloudFrontBaseUrl + imageName}
        className="img-fluid m-5 "
        width="400"
       
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{imageName}</h5>
      </div>
    </div>
  );
};

export default CardImage;
