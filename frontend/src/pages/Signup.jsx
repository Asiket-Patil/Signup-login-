import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {

  const [name , setName]  = useState('')
  const [email , setEmail]= useState('')
  const [password , setPassword] =useState('')
  const navigate = useNavigate()


  const handleSubmit=(e)=>{
    e.preventDefault();

    axios.post("http://localhost:3000/register",{name , email, password})
    .then(res=>{
      console.log(res),
    
      toast.success("signup sucessful")

      setTimeout(()=>{
        navigate("/login")
      },3000)

    })
    .catch(err=>{
      console.log(err),
      toast.error("Signup fail")
    })
  }

  return (
    <>
     <div className='container'>
       <form onSubmit={handleSubmit} >
           <div>
             <p  className='label' >Name</p>
            <input className='text' type="text" placeholder='enter the name' 
            onChange={(e)=>setName(e.target.value)}/>

           </div>
           <div>
             <p className='label'>Email</p>
            <input  className='text'  type="email" placeholder='enter the email' 
            onChange={(e)=>setEmail(e.target.value)}/>
           </div>
           <div>
             <p className='label'>Password</p>
            <input  className='text' type="Password" placeholder='enter the password'
            onChange={(e)=>setPassword(e.target.value)} />
           </div>
           <button className='btn'>Signup</button>
       </form>
       <div>
        <p>have an account ? <Link to={"/login"}><span>Login</span></Link></p>
       </div>
     </div>
     <Toaster/>
    </>
  )
}

export default Signup
