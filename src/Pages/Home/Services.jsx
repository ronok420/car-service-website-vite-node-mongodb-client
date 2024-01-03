import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div>
      <div className="space-y-5 text-center mt-4">
        <h2 className="text-[#FF3811] text-2xl">Service</h2>
        <h1 className="text-5xl  font-bold">our Service Area</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-7">
        {
            service.map(sCard => <ServiceCard  key={sCard._id} sCard={sCard}
            ></ServiceCard>)
           
        }
      </div>
    </div>
  );
};

export default Services;
