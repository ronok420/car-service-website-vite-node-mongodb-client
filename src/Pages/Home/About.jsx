import React from "react";
import parts from "../../../src/assets/images/about_us/parts.jpg";
import person from "../../../src/assets/images/about_us/person.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="w-1/2 relative">
          <img src={person} className="max-w-sm rounded-lg shadow-2xl pr-10 w-10/12" />
          <img
            src={parts}
            alt=""
            className="absolute w-1/2 top-1/2 left-40 rounded-lg border-8 border-red-200"
          />
        </div>

        <div className="w-1/2">
          <h3 className="text-[#FF3811] py-6 text-2xl">About Us</h3>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-outline btn-secondary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
