import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Signup() {
   const [name,setname]=useState('')
   const [email,setemail]=useState('')
   const [password,setpassword]=useState('')
   const [suc,setsuc]=useState(false)
   const navigate=useNavigate()
   let user={
      Name:name,
      email:email,
      password:password
   }
   const handlesignup=async()=>{
      try{
         await axios.post('https://kind-pink-trunks.cyclic.app',user)
         setsuc(true)
         setTimeout(()=>{
            setsuc(false)
            navigate('/ghome')
         },1000)
         
      }
      catch(err){
         alert(err.message)
      }
      
   }
  return (
    <div>
        <div style={{height:'20vh',width:'100vw',paddingLeft:'1rem'}}>
            <p><span style={{fontWeight:'bold'}}>Create account</span><br/>
            <span style={{fontWeight:'bold',fontSize:'1.7rem'}}>Let's get to know<br/> you better!</span></p>
        </div>
        <div style={{height:'60vh',width:'100vw',padding:'1rem'}}>
            <label >
               <span style={{fontWeight:'bold'}}>Your Name</span><br/> 
               <input style={{fontSize:'0.95rem',margin:'4px',height:'12%',
                  width:'90%',backgroundColor:'#F4F4F4',borderRadius:'8px',border:'none',paddingLeft:'1rem'}} 
                  placeholder={'Type your Yourname here'}
                  value={name} onChange={(e)=>setname(e.target.value)}
               />
            </label>
            <br/>
            
            <label>
               <span style={{fontWeight:'bold'}}>Username</span><br/> 
               <input style={{margin:'4px',fontSize:'0.95rem',height:'12%',
                  width:'90%',backgroundColor:'#F4F4F4',borderRadius:'8px',
                  border:'none',paddingLeft:'1rem'}}
                  placeholder={'Type your username here'}
                  
               />
            </label>
            <br/>
            
            <label>
               <span style={{fontWeight:'bold'}}>Email</span><br/> 
               <input style={{margin:'4px',fontSize:'0.95rem',height:'12%',
               width:'90%',backgroundColor:'#F4F4F4',borderRadius:'8px',
               border:'none',paddingLeft:'1rem'}}  
               placeholder={'Type your Email here'}
               value={email} onChange={(e)=>setemail(e.target.value)}
               />
            </label>
            <br/>
            
            <label>
               <span style={{fontWeight:'bold'}}>Password</span><br/> 
               <input style={{margin:'4px',fontSize:'0.95rem',height:'12%',
               width:'90%',backgroundColor:'#F4F4F4',borderRadius:'8px',
               border:'none',paddingLeft:'1rem'}} type={'password'}
               placeholder={'Type your Password here'}
               value={password} onChange={(e)=>setpassword(e.target.value)}
               />
            </label>
        </div>
        {suc?
        <div style={{height:'10vh',width:'100vw',textAlign:'center'}}>
         <button style={{height:'95%',width:'95%',borderRadius:'1rem',
            backgroundColor:'green',border:'none',fontWeight:'bold',
            color:'white'}} 
         >Successfully signup</button></div>:<></>}

        <div style={{height:'10vh',width:'100vw',textAlign:'center'}}>
         <button style={{height:'95%',width:'95%',borderRadius:'1rem',
            backgroundColor:'#F2C94C',border:'none',fontWeight:'bold',
            color:'white'}} onClick={handlesignup}
         >Registor</button></div>
    </div>
  )
}

export default Signup