import React from "react";

const CardImage = ({imageName}) => {
    const cloudFrontBaseUrl = "https://d3tlwzcpumxs2b.cloudfront.net/";
  return (
    <div class="card" >
      <img src={cloudFrontBaseUrl+imageName} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
      </div>
    </div>
  );
};

export default CardImage;
