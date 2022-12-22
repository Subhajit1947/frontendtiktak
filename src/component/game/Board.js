import React,{useState} from 'react'
import Board1 from './Board1'

import c from './cross1.png'
import s from './osymbol.png'
function Board({email,channel,u}) {
 
    const [playerjoin,setplayerjoin]=useState(channel.state.watcher_count==2)
    channel.on('user.watching.start',(e)=>{
        setplayerjoin(e.watcher_count==2)
    })
  return (
    <>
    {!playerjoin?<h2>waiting for other plyer</h2>:
    <div>
        <div style={{height:'13vh',width:'100vw',padding:'1rem'}}>
            <p>
                <span style={{fontSize:'26px',fontWeight:'bold'}}>Game with {email.split('@gmail.com')}</span><br/>
                <span>Your piece</span>
                
            </p>
        </div>
        <div style={{height:'86vh',width:'100vw',padding:'4px',display:'flex',flexDirection:'column',alignItems:'center'}}><Board1 channel={channel} u={u}  email={email.split('@gmail.com')[0]}/></div>
        
    </div>}
    </>
  )
}

export default Board