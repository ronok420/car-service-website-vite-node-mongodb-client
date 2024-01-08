import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";

const CheckOut = () => {
  const checkOut = useLoaderData();
  const { price, service_id, title,img } = checkOut;
  const { user } = useContext(AuthContext);
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const price = form.price.value;
    const date=form.date.value;
    const bookingObject = {
      email,
      name,
      price,
      service_id,
      title,
      img,
      date
    };
    console.log(bookingObject);
    fetch("http://localhost:7000/bookings", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookingObject),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="">
      <form onSubmit={handleBooking} className="card-body  ">
        <h2 className="text-center mx-auto text-3xl text-red-400">
          Car Service:{checkOut.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 w-3/4 mx-auto gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              placeholder="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">DuePrice</span>
            </label>
            <input
              type="text"
              defaultValue={"$" + price}
              name="price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="enter name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6"></div>
        </div>

        <button className="btn btn-warning btn-block w-4/5 mx-auto">
          CheckOut
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
