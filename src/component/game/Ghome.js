import React, { useEffect,useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
function Ghome({u}) {
  const [winobj,setwinobj]=useState([])
  const navigate=useNavigate()
  
  useEffect(()=>{
    axios.post('https://kind-pink-trunks.cyclic.app/feed11',{email:u.email}).then((res)=>{
      
      setwinobj([...winobj,...res.data])
    }).catch((err)=>{
      console.log(err)
      navigate('/login')
    })
    
  },[])
  winobj.sort((x, y)=>{
    return new Date(y.createdAt) - new Date(x.createdAt)
  })
  console.log(winobj)
  return (
    <div style={{width:'100vw',backgroundColor:'#f0f8ff'}}>
        <div style={{height:'6vh',width:'100vw',fontWeight:'bold',padding:'1rem'}} >
            Your Games
        </div>
        {winobj.length==0?
        <div style={{height:'95vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div style={{textAlign:'center'}}>
            <p><span style={{fontSize:'30px'}}>No Games<br/>Found</span><br/><Link to='/femail'><button style={{height:'2rem',width:'90vw',borderRadius:'0.5rem',marginTop:'1rem',
            backgroundColor:'#F2C94C',border:'none',fontWeight:'bold',
            color:'white'}} 
            >Start a new game</button></Link></p>
            </div>
        </div>:

        <div style={{width:'100vw',display:'flex',flexDirection:'column',alignItems:'center'}}>
          <Link to='/femail'><button style={{height:'2rem',width:'90vw',borderRadius:'0.5rem',marginTop:'1rem',
            backgroundColor:'#F2C94C',border:'none',fontWeight:'bold',
            color:'white'}} 
            >Start a new game</button></Link>
          {winobj.map((obj)=>(
            <div style={{height:'14rem',margin:'1rem',width:'90%',backgroundColor:'white',textAlign:'center',borderRadius:'1rem'}}>
              <p><span style={{fontSize:'30px',fontWeight:'bold'}}>Game with {obj.title}</span><br/>
              <span style={{fontSize:'20px',fontWeight:'bold'}}>{obj.winer12}</span><br/>
              <span>{new Date(obj.createdAt).toString('YYYY-MM-dd').slice(0,24)}</span></p>
              <button style={{height:'2.5rem',width:'90%',borderRadius:'0.5rem',border:'none',
              backgroundColor:'#F2C94C'}}>View Game</button>
            </div>
            ))}
            
            
        </div>
          
          }
    </div>
  )
}

export default Ghome