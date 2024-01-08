import React, { useContext } from 'react';
import logo from '../../../assets/logo.svg';
import { AuthContext } from '../../../Provider/Provider';
import { Link } from 'react-router-dom';
import SocialLogin from '../../Login/SocialLogin';

const Navbar = () => {
  const {user,logOut} =useContext(AuthContext);

  const handleLogout=()=>{
    logOut()
    .then(result => {
      console.log(result.user)
      localStorage.removeItem('car-access-token');
    })
    .catch(error=>console.log(error))
  }


    const navitems = <>
     <Link to="/"><li><a>Item 1</a></li></Link>
    
    <li><a>Item 2</a></li>
    <li><a>Item 2</a></li>
    {user?  <>  <li onClick={handleLogout}><a>logout</a></li>
       <Link to="/booking"><li ><a>booking</a></li></Link> 
    
    </> :
    <Link to="/login">
          <li><a>login</a></li>
    </Link>
   
    
    
    }
    
    
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navitems}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img style={{width:'50px'}} src={logo} alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navitems}
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-sm btn-outline btn-accent">Appointment</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;