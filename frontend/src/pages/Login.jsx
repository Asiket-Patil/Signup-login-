import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/login", { email, password });
      console.log(res);
      if (res.data === "success") {
        toast.success("Login successful");

        setTimeout(()=>{
          navigate('/')
        },3000)
      
      } else {
        toast.error("Login failed");
      }
    } catch (err) {
      console.log(err);
      toast.error("Login failed");
    }
  }

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div>
            <p className='label'>Email</p>
            <input className='text' type="email" placeholder='Enter your email'
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <p className='label'>Password</p>
            <input className='text' type="password" placeholder='Enter your password'
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className='btn'>Login</button>
        </form>
        <div>
          <p>Don't have an account? <Link to={"/"}><span>Signup</span></Link></p>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default Login;
