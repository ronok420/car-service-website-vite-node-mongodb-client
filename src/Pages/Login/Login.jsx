import React, { useContext } from 'react';
import img from '../../../src/assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/Provider';

const Login = () => {
  const {signIn} =useContext(AuthContext);
    const handleLogin= (event)=>{
        event.preventDefault();
        const form =event.target;
        const email =form.email.value;
        const pass=form.pass.value;
        console.log(email,pass);
        signIn(email,pass)
        .then(rs=>{
          const user =rs.user;
          console.log(user);

        })
        .then(error=>{
          console.log(error);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/2 mr-6">
        
           <img src={img} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 w-1/2">
            <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl font-bold">Login now!</h1> 
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="pass" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
               
              </div>

              <input type="submit" value="Login" className="btn btn-primary"/>
              <p>new to car service?<Link className='text-3xl text-amber-600' to="/signup">SignUp</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;