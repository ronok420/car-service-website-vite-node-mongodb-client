import React from "react";
import img1 from "../../../src/assets/images/homeCarousel/1.jpg";
import img2 from "../../../src/assets/images/homeCarousel/2.jpg";
import img3 from "../../../src/assets/images/homeCarousel/3.jpg";
import img4 from "../../../src/assets/images/homeCarousel/4.jpg";

const Banner = () => {
  return (
    <div className= "">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-fit">
          <img  src={img1} className="w-full h-fit rounded-xl" />
          <div className="absolute flex md:justify-end justify-between transform -translate-y-1/2 left-5 right-5 md:bottom-44 bottom-1 ">
         
            <a href="#slide4" className="btn btn-circle md:mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>

              {/* text  div */}
          <div className="absolute rounded-xl flex items-center justify-between transform  left-0 top-0 md:bottom-44 bottom-1 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full ">
          <div className='space-y-7 w-1/2  items-center pl-20'>
            <h2 className="text-6xl text-bold">Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
           
            <button className="btn btn-sm btn-error mr-2">Discover More</button>
            <button className="btn btn-sm btn-outline btn-secondary">Latest Project</button>
          </div>
          </div>


        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute flex md:justify-end justify-between transform -translate-y-1/2 left-5 right-5 md:bottom-0 bottom-1">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className="absolute flex md:justify-end justify-between transform -translate-y-1/2 left-5 right-5 md:bottom-0 bottom-1">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          <div className="absolute flex md:justify-end justify-between transform -translate-y-1/2 left-5 right-5 md:bottom-0 bottom-1">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
