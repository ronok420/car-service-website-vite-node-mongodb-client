import React from "react";

const BTabel = ({ book ,setBooking,booking}) => {
  const { _id,email, name, service_id, title, img, date, price,status } = book;
  const handleDelete = (id) => {
    fetch(`http://localhost:7000/checkout/${id}`, {
      method: 'DELETE',  // Corrected spelling here
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.deletedCount){
          alert(" deleted successful")
          const remaining =booking.filter(remainigBook=>remainigBook._id !== id);
          setBooking(remaining);
          console.log(remaining);


        }
      })
      // .catch((error) => {
      //   console.error('Error:', error);
      // });

  };
  
      const handleUpdate =(id)=>{
        fetch(`http://localhost:7000/checkout/${id}`,{
          method:'PATCH',
          headers:{
            'Content-type': 'application/json'
          },
          body:JSON.stringify({status:"confirm"})
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.modifiedCount>0){
            const remaining = booking.filter(bk=> bk._id !== id);
            const  updateLast = booking.find(bk=>bk._id === id);
            updateLast.status ='confirm'   ;
            const newUpdate = [updateLast,...remaining];
            setBooking(newUpdate);
          }
        })

      }
  return (
    <tr>
      <th>
              <button onClick={()=>handleDelete(_id)} className="btn btn-square btn-outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-24 rounded">
              <img src={img} />
            </div>
          </div>
          <div>
            <div className="font-bold">Hart Hagerty</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        {title}
        <br />
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span>
      </td>
      <td>{date}</td>
      <td>{price}</td>
      <th>
       {  status== 'confirm' ? <>  <span className="tex-xl text-red-400"> confirmed</span>  </> :
        <button onClick={()=>handleUpdate(_id)} className="btn btn-ghost btn-xs">Please confirm</button>}
      </th>
    </tr>
  );
};

export default BTabel;
