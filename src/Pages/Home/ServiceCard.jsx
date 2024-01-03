import React from "react";

const ServiceCard = ({sCard}) => {
    const {title,img, price} = sCard;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img  src={img} alt="Shoes" className="rounded-xl w-[80%]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
   
    <p>Price:{price}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Get Service</button>
    </div>
  </div>
</div>
  );
};

export default ServiceCard;
