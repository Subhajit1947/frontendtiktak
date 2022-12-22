import Firstpage from "./component/Firstpage";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Feed1 from "./component/Feed1";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Ghome from "./component/game/Ghome";
import Femail from "./component/game/Femail";

import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";

function App() {
  
  const [u,setu]=useState('')
  
  

  
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          {u==''?
          <>
          <Route path="/" element={<Firstpage/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login setu={setu}/>}/>
          </>:
          <>
          <Route path='/ghome' element={<Ghome u={u}/>}/>
          <Route path='/femail' element={<Femail u={u}/>}/>
          
          </> }
        </Routes>
        
      </BrowserRouter>
      
      
    </>
    
      
    
  );
}

export default App;
