import React, { useContext } from 'react';
import img from '../../../src/assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/Provider';

const SignUp = () => {
    const {createUser} =useContext(AuthContext);
    const handleSignUp= (event)=>{
        event.preventDefault();
        const form =event.target;
        const email =form.email.value;
        const name=form.name.value;
        const pass=form.pass.value;
        console.log(email,pass,name);
        createUser(email,pass)
        .then(result=>{
            const user =result.user;
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
            <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-3xl font-bold">SignUp now!</h1> 
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input type="text" placeholder="enter name" name="name" className="input input-bordered" required />
              </div>
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

              <input type="submit" value="SignUp" className="btn btn-primary"/>
              <p>already have an account?<Link className='text-3xl text-orange-500' to="/login">login</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;