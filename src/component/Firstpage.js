import React from 'react'
import { Link } from 'react-router-dom'

function Firstpage() {
  return (
    <div>
        <div style={{height:'80vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div style={{textAlign:'center'}}>
                <p>
                    <span style={{fontFamily:'Bilbo',fontWeight:'400',fontSize:'25px'}}>async</span>
                    <br/>
                    <span style={{fontFamily:'Bilbo',fontStyle:'normal',fontWeight:'400',fontSize:'60px'}}>tic tak <br/>toe</span> 
                </p>
            </div>
            
        </div>
        <div style={{height:'10vh',width:'100vw',textAlign:'center'}}><Link to='/login'><button style={{height:'95%',width:'95%',borderRadius:'1rem',backgroundColor:'#F2C94C',border:'none',fontWeight:'bold'}}>Login</button></Link></div>
        <div style={{height:'10vh',width:'100vw',textAlign:'center'}}><Link to='/signup'><button style={{height:'95%',width:'95%',borderRadius:'1rem',backgroundColor:'#2F80ED',border:'none',fontWeight:'bold',color:'white'}}>Registor</button></Link></div>
    </div>
  )
}

export default Firstpage