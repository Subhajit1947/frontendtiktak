import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login({setu}) {
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [error1,seterror1]=useState('')
  const [suc,setsuc]=useState(false)
  const navigate=useNavigate()

  const user={
    email,password
  }
  const handlelogin=async()=>{
    try{
      let user1=await axios.post('https://kind-pink-trunks.cyclic.app/login',user)
      //console.log(user1.data['user1'])
      setu(user1.data['user1'])
      
      navigate('/ghome')
      
    }
    catch(err){
      seterror1(err.message)
      setTimeout(()=>{
        seterror1('')
      },1000)
    }
    
  }
  console.log(error1)
  return (
    <div>
        <div style={{height:'20vh',width:'100vw',paddingLeft:'1rem'}}>
            <p><span style={{fontWeight:'bold'}}>Login</span><br/>
            <span style={{fontWeight:'bold',fontSize:'1.7rem'}}>Please enter your<br/> datails</span></p>
        </div>
        <div style={{height:'55vh',width:'100vw',padding:'1rem'}}>
            
            <label>
               <span style={{fontWeight:'bold'}}>Username</span><br/> 
               <input style={{fontSize:'0.95rem',height:'12%',
               width:'90%',backgroundColor:'#F4F4F4',borderRadius:'8px',border:'none',paddingLeft:'1rem'}} 
               placeholder={'Type your username here'}
               value={email} onChange={(e)=>setemail(e.target.value)}/>
            </label>
            <br/>
            <br/>
            
            <label>
               <span style={{fontWeight:'bold'}}>Password</span><br/> 
               <input style={{fontSize:'0.95rem',height:'12%',width:'90%',
               backgroundColor:'#F4F4F4',borderRadius:'8px',border:'none',
               paddingLeft:'1rem'}} type={'password'}
                placeholder={'Type your Password here'}
                value={password} onChange={(e)=>setpassword(e.target.value)}/>
            </label>
        </div>
        {error1!=''?
        <div style={{height:'10vh',width:'100vw',textAlign:'center'}}><button style={{height:'95%',width:'95%',borderRadius:'1rem',backgroundColor:'red',border:'none',fontWeight:'bold',color:'white'}}>{error1}</button></div>:<></>}
        <div style={{height:'10vh',width:'100vw',textAlign:'center'}}><button onClick={handlelogin} style={{height:'95%',width:'95%',borderRadius:'1rem',backgroundColor:'#F2C94C',border:'none',fontWeight:'bold',color:'white'}}>Login</button></div>
    </div>
  )
}

export default Login