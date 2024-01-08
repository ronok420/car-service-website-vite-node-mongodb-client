import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Provider";
import BTabel from "./BTabel";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
  const navigate =useNavigate();
  const url = `http://localhost:7000/checkout?email=${user?.email}`;
  useEffect(() => {
    fetch(url,{
      method:'GET',
      headers:{
        authorization: `Bearer ${localStorage.getItem('car-access-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if(!data.error){
           setBooking(data)
        }
        else{
          navigate('/')

        }
  });
  }, [url,navigate]);
 
  return (
    <div>
      <h2>booking:{booking.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Title</th>
              <th>Date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
                booking.map(book => <BTabel
                key={book._id}  book={book} booking={booking} setBooking={setBooking}
                ></BTabel>)
            }
         
          </tbody>
          
        
        </table>
      </div>
    </div>
  );
};

export default Booking;
