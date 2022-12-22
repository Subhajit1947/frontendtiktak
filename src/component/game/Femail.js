import React,{useState} from 'react'
import { Link } from 'react-router-dom'


import { StreamChat } from "stream-chat";
import Board from './Board';
function Femail({u}) {
  const [fm,setfm]=useState(true)
  const [email,setemail]=useState('')
  const client = StreamChat.getInstance("mjsea3pnsdxh");
  const [channel, setChannel] = useState(null);
  //const server_client =StreamChat.getInstance("mjsea3pnsdxh","rw9998rez8knuw9cucc4kcksuqeyvs3wqfn9gnr3qnh96efk9vkefaqwgd5hhygj")
  
  const token =client.devToken(u._id)
  
  client.connectUser(
    {
        id: u._id,
        name: u.Name,
        email:u.email
         
    },token)

  const createChannel = async () => {
    const response = await client.queryUsers({ email: { $eq: email } });

    if (response.users.length === 0) {
      alert("User not found");
      return;
    }

    const newChannel = await client.channel("messaging", {
      members: [u._id,response.users[0].id],
    });

    await newChannel.watch();
    setChannel(newChannel);
    setfm(false)
  }
  return (
    <>
    {fm?
    <div>
        <div style={{height:'20vh',width:'100vw',paddingLeft:'1rem'}}>
            <p><span style={{fontWeight:'bold'}}>Start a new game</span><br/>
            <span style={{fontWeight:'bold',fontSize:'1.7rem'}}>Whome do you want<br/> to play with?</span></p>
        </div>
        <div style={{height:'60vh',width:'100vw',paddingLeft:'1rem',paddingTop:'3rem'}}>
        <label >
               <span style={{fontWeight:'bold'}}>Email</span><br/> 
               <input style={{margin:'4px',fontSize:'0.95rem',height:'17%',
               width:'80%',backgroundColor:'#F4F4F4',borderRadius:'8px',
               border:'none',paddingLeft:'1rem'}}  
               placeholder={'Type your Email here'}
               value={email} onChange={(e)=>setemail(e.target.value)}
               />
            </label>
        </div>
        <div style={{height:'10vh',marginBottom:'0.5rem',width:'100vw',textAlign:'center'}}>
         <button style={{height:'95%',width:'95%',borderRadius:'0.6rem',
            backgroundColor:'#F2C94C',border:'none',fontWeight:'bold',
            color:'white'}} onClick={createChannel}
         >Start game</button></div>
    </div>
    :
    <Board email={email} channel={channel} u={u}/>
    
    }
    </>
  )
}

export default Femail