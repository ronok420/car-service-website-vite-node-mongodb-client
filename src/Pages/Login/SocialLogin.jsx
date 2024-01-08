import React, { useContext } from "react";
import { FaGoogle,FaSquareFacebook  } from "react-icons/fa6";
import { AuthContext } from "../../Provider/Provider";

const SocialLogin = () => {
    const {googleSignin} = useContext(AuthContext);
    const  handleGoogleLogin =()=>{
        googleSignin()
        .then((result)=>console.log(result.user))
        .catch(error=>console.log(error))
      }
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center ">
        <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline "><FaGoogle /></button>
        <button className="btn btn-circle btn-outline "><FaSquareFacebook />
</button>
        
      </div>
    </div>
  );
};

export default SocialLogin;
