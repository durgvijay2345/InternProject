import React from 'react'
import CryptoJS from 'crypto-js'
import { Link } from 'react-router-dom';
export default function FacultyLogin() {
  const handlesubmit = async()=>{
    try {
      const response = await fetch("",{
        method:"GET"
      });
      const result = response.json;
      if(!response.ok){
        console.log("problem in faculty fetch",result);
      }
      else{
        console.log("Working perfect",result);
      }
    } catch (error) {
      console.log("error in try catch");
    }
  }
  return (
    <div className='faculty-login-body'>
      <div className="faculty-login-card">
        <span className="login-card-head">FACULTY LOGIN</span>
        <div className="input-collection">
        <label htmlFor="faculty-id" className='faculty-input-label'>Faculty ID</label>
        <input type="text" className='faculty-login-input' placeholder='Enter here' autoFocus/>
        <label htmlFor="password" className='faculty-input-label'>Password</label>
        <input type="text" className='faculty-login-input' placeholder='Enter here'/>
        </div>
        <Link to={"/faculty-applications"}>
        <button className='faculty-login-button' to="/modules" onClick={handlesubmit}>Login</button>
        </Link>
      </div>
    </div>
  )
}
