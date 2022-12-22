import React, { useState, useEffect } from 'react'
import c from './cross1.png'
import s from './osymbol.png'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function ann(a, b) {
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if (str1 === str2) {
        return true;
    } else {
        return false;
    }
}



function Board1({ channel, u, email }) {
    const [wc, setwc] = useState(false)
    const [winer, setwiner] = useState('')
    const [player, setplayer] = useState('x')
    const [turn, setturn] = useState('x')
    const [xx, setxx] = useState([])
    const [oo, setoo] = useState([])
    const [t1, sett1] = useState('')
    const [t2, sett2] = useState('')
    const [t3, sett3] = useState('')
    const [t4, sett4] = useState('')
    const [t5, sett5] = useState('')
    const [t6, sett6] = useState('')
    const [t7, sett7] = useState('')
    const [t8, sett8] = useState('')
    const [t9, sett9] = useState('')
    const [km, setkm] = useState(true)
    const [kj, setkj] = useState('')
    const [piece,setpiece]=useState('')
    const win = ['123', '147', '159', '456', '789', '753', '258', '369']
    const [mail,setmail]=useState('')
    const navigate=useNavigate()
    
    
    //let mail=email
    const userwin={
        email:u.email,
        title:mail,
        winer12:kj
    }
    useEffect(()=>{
        setmail(email)
    },[])
    useEffect(() => {
        for (let i = 2; i < xx.length; i++) {
            let ans
            ans = `${xx[i - 2]}${xx[i - 1]}${xx[i]}`
            for (let j in win) {

                if (ann(ans, win[j])) {

                    setwiner('x')
                    setwc(true)


                }

            }

        }
        for (let i = 2; i < oo.length; i++) {
            let ans
            ans = `${oo[i - 2]}${oo[i - 1]}${oo[i]}`
            for (let j in win) {

                if (ann(ans, win[j])) {

                    setwiner(`o`)
                    setwc(true)


                }

            }

        }
        if (oo.length + xx.length == 9) {
            setwc(true)
            setwiner('draw')
        }
    })
    useEffect(()=>{
        if(player=='x'){
            setpiece(c)
        }
        else{
            setpiece(s)
        }
    })
    useEffect(()=>{
        if(wc){
            
            if(winer=='x'){
                if(player=='x'){
                    setkj('you win')
                }
                else{
                    setkj(`${email} win`)
                }
                
            }
            else if(winer=='o'){
                if(player=='o'){
                    setkj('you win')
                }
                else{
                    setkj(`${email} win`)
                }
            }
            else{
                setkj('draw')
            }
        }
    },[wc])
    
    const sett11 = () => {
        if (wc == false) {
            if (turn == player && t1 == '') {

                setturn(player == 'x' ? 'o' : 'x')
                sett1(player)
                setkm(false)
                channel.sendEvent({
                    type: '1stmove',
                    data: { t1, player }
                })
                if (player == 'x') {
                    setxx([...xx, 1])
                }
                else {
                    setoo([...oo, 1])
                }
                
            }
        }
        
    }
    const sett22 = () => {
        if (wc == false) {
            if (turn == player && t2 == '') {

                setturn(player == 'x' ? 'o' : 'x')
                sett2(player)
                setkm(false)
                channel.sendEvent({
                    type: '2ndmove',
                    data: { t2, player }
                })
                if (player == 'x') {
                    setxx([...xx, 2])
                }
                else {
                    setoo([...oo, 2])
                }
                
            }
        }
        
    }
    const sett33 = () => {
        if (wc == false) {
            if (turn == player && t3 == '') {

                setturn(player == 'x' ? 'o' : 'x')
                sett3(player)
                setkm(false)
                channel.sendEvent({
                    type: '3rdmove',
                    data: { t3, player }
                })
                if (player == 'x') {
                    setxx([...xx, 3])
                }
                else {
                    setoo([...oo, 3])
                }
                
            }
        }
        
    }
    const sett44 = () => {
        if (wc == false) {
            if (turn == player && t4 == '') {

                setturn(player == 'x' ? 'o' : 'x')
                sett4(player)
                setkm(false)
                channel.sendEvent({
                    type: '4thmove',
                    data: { t4, player }
                })
                if (player == 'x') {
                    setxx([...xx, 4])
                }
                else {
                    setoo([...oo, 4])
                }
                
            }
        }
        

    }
    const sett55 = () => {
        if (wc == false) {
            if (turn == player && t5 == '') {

                setturn(player == 'x' ? 'o' : 'x')
                sett5(player)
                setkm(false)
                channel.sendEvent({
                    type: '5thmove',
                    data: { t5, player }
                })
                if (player == 'x') {
                    setxx([...xx, 5])
                }
                else {
                    setoo([...oo, 5])
                }
                
            }
        }
        
    }
    const sett66 = () => {
        if (wc == false) {
            if (turn == player && t6 == '') {

                setturn(player == 'x' ? 'o' : 'x')
                sett6(player)
                setkm(false)
                channel.sendEvent({
                    type: '6thmove',
                    data: { t6, player }
                })
                if (player == 'x') {
                    setxx([...xx, 6])
                }
                else {
                    setoo([...oo, 6])
                }
                
            }
        }
        
    }
    const sett77 = () => {
        if (wc == false) {
            if (turn == player && t7 == '') {

                setturn(player == 'x' ? 'o' : 'x')
                sett7(player)
                setkm(false)
                channel.sendEvent({
                    type: '7thmove',
                    data: { t7, player }
                })
                if (player == 'x') {
                    setxx([...xx, 7])
                }
                else {
                    setoo([...oo, 7])
                }
                
            }
        }
        
    }
    const sett88 = () => {
        if (wc == false) {
            if (turn == player && t8 == '') {

                setturn(player == 'x' ? 'o' : 'x')
                sett8(player)
                setkm(false)
                channel.sendEvent({
                    type: '8thmove',
                    data: { t8, player }
                })
                if (player == 'x') {
                    setxx([...xx, 8])
                }
                else {
                    setoo([...oo, 8])
                }
                
            }
        }
        
    }
    const sett99 = () => {
        if (wc == false) {
            if (turn == player && t9 == '') {

                setturn(player == 'x' ? 'o' : 'x')
                sett9(player)
                setkm(false)
                channel.sendEvent({
                    type: '9thmove',
                    data: { t9, player }
                })
                if (player == 'x') {
                    setxx([...xx, 9])
                }
                else {
                    setoo([...oo, 9])
                }
                
            }
        }
        
    }
    channel.on((event) => {
        if (event.type == "1stmove" && event.user.id !== u._id) {
            const currentPlayer = event.data.player === "x" ? "o" : "x";
            setplayer(currentPlayer);
            setturn(currentPlayer);
            if (event.data.t1 == '') {
                sett1(event.data.player)
                setkm(true)
            }
            if (event.data.player == 'x') {
                setxx([...xx, 1])
            }
            else {
                setoo([...oo, 1])
            }

        }
        if (event.type == "2ndmove" && event.user.id !== u._id) {
            const currentPlayer = event.data.player === "x" ? "o" : "x";
            setplayer(currentPlayer);
            setturn(currentPlayer);
            if (event.data.t2 == '') {
                sett2(event.data.player)
                setkm(true)
            }
            if (event.data.player == 'x') {
                setxx([...xx, 2])
            }
            else {
                setoo([...oo, 2])
            }
        }
        if (event.type == "3rdmove" && event.user.id !== u._id) {
            const currentPlayer = event.data.player === "x" ? "o" : "x";
            setplayer(currentPlayer);
            setturn(currentPlayer);
            if (event.data.t3 == '') {
                sett3(event.data.player)
                setkm(true)
            }
            if (event.data.player == 'x') {
                setxx([...xx, 3])
            }
            else {
                setoo([...oo, 3])
            }
        }
        if (event.type == "4thmove" && event.user.id !== u._id) {
            const currentPlayer = event.data.player === "x" ? "o" : "x";
            setplayer(currentPlayer);
            setturn(currentPlayer);
            if (event.data.t4 == '') {
                sett4(event.data.player)
                setkm(true)
            }
            if (event.data.player == 'x') {
                setxx([...xx, 4])
            }
            else {
                setoo([...oo, 4])
            }
        }
        if (event.type == "5thmove" && event.user.id !== u._id) {
            const currentPlayer = event.data.player === "x" ? "o" : "x";
            setplayer(currentPlayer);
            setturn(currentPlayer);
            if (event.data.t5 == '') {
                sett5(event.data.player)
                setkm(true)
            }
            if (event.data.player == 'x') {
                setxx([...xx, 5])
            }
            else {
                setoo([...oo, 5])
            }
        }
        if (event.type == "6thmove" && event.user.id !== u._id) {
            const currentPlayer = event.data.player === "x" ? "o" : "x";
            setplayer(currentPlayer);
            setturn(currentPlayer);
            if (event.data.t6 == '') {
                sett6(event.data.player)
                setkm(true)
            }
            if (event.data.player == 'x') {
                setxx([...xx, 6])
            }
            else {
                setoo([...oo, 6])
            }
        }
        if (event.type == "7thmove" && event.user.id !== u._id) {
            const currentPlayer = event.data.player === "x" ? "o" : "x";
            setplayer(currentPlayer);
            setturn(currentPlayer);
            if (event.data.t7 == '') {
                sett7(event.data.player)
                setkm(true)
            }
            if (event.data.player == 'x') {
                setxx([...xx, 7])
            }
            else {
                setoo([...oo, 7])
            }
        }
        if (event.type == "8thmove" && event.user.id !== u._id) {
            const currentPlayer = event.data.player === "x" ? "o" : "x";
            setplayer(currentPlayer);
            setturn(currentPlayer);
            if (event.data.t8 == '') {
                sett8(event.data.player)
                setkm(true)
            }
            if (event.data.player == 'x') {
                setxx([...xx, 8])
            }
            else {
                setoo([...oo, 8])
            }
        }
        if (event.type == "9thmove" && event.user.id !== u._id) {
            const currentPlayer = event.data.player === "x" ? "o" : "x";
            setplayer(currentPlayer);
            setturn(currentPlayer);
            if (event.data.t9 == '') {
                sett9(event.data.player)
                setkm(true)
            }
            if (event.data.player == 'x') {
                setxx([...xx, 9])
            }
            else {
                setoo([...oo, 9])
            }
        }
        
    })
    
    const handlestart=()=>{
        axios.post('https://kind-pink-trunks.cyclic.app/feed',userwin).then(()=>{
            navigate('/ghome')
        }).catch((err)=>{
            console.log(err)
        })
    }

    console.log(xx, oo)
    return (
        <>
        <div style={{ height: '96%', width: '90%' }}>
            <div style={{height:'2rem'}}>
                <img src={piece} style={{height:'2rem',marginLeft:'1rem'}}/>
            </div>
            <div style={{ height: '15%', width: '96%', backgroundColor: '#F2C94C', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {wc ? kj : km ? 'your turn' : 'other turn'}
            </div>
            <div style={{ height: '26%', width: '96%', display: 'flex' }}>
                <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '33%', borderRight: 'solid #F2C94C', borderBottom: 'solid #F2C94C' }} onClick={sett11}>
                    {t1 == '' ? <></> : <img src={t1 == 'x' ? c : s} style={{ height: '90%', width: '90%' }} />}
                    {/* <img src={s} style={{height:'90%',width:'90%'}}/> */}
                </div>
                <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '33%', borderRight: 'solid #F2C94C', borderBottom: 'solid #F2C94C' }} onClick={sett22}>
                    {t2 == '' ? <></> : <img src={t2 == 'x' ? c : s} style={{ height: '90%', width: '90%' }} />}
                </div>
                <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '33%', borderBottom: 'solid #F2C94C' }} onClick={sett33}>
                    {t3 == '' ? <></> : <img src={t3 == 'x' ? c : s} style={{ height: '90%', width: '90%' }} />}
                </div>
            </div>
            <div style={{ height: '26%', width: '96%', display: 'flex' }}>
                <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '33%', borderRight: 'solid #F2C94C', borderBottom: 'solid #F2C94C' }} onClick={sett44}>
                    {t4 == '' ? <></> : <img src={t4 == 'x' ? c : s} style={{ height: '90%', width: '90%' }} />}
                </div>
                <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '33%', borderRight: 'solid #F2C94C', borderBottom: 'solid #F2C94C' }} onClick={sett55}>
                    {t5 == '' ? <></> : <img src={t5 == 'x' ? c : s} style={{ height: '90%', width: '90%' }} />}
                </div>
                <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '33%', textAlign: 'center', borderBottom: 'solid #F2C94C' }} onClick={sett66}>
                    {t6 == '' ? <></> : <img src={t6 == 'x' ? c : s} style={{ height: '90%', width: '90%' }} />}
                </div>
            </div>
            <div style={{ height: '26%', width: '96%', display: 'flex' }}>
                <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '33%', borderRight: 'solid #F2C94C' }} onClick={sett77}>
                    {t7 == '' ? <></> : <img src={t7 == 'x' ? c : s} style={{ height: '90%', width: '90%' }} />}
                </div>
                <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '33%', borderRight: 'solid #F2C94C' }} onClick={sett88}>
                    {t8 == '' ? <></> : <img src={t8 == 'x' ? c : s} style={{ height: '90%', width: '90%' }} />}
                </div>
                <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '33%' }} onClick={sett99}>
                    {t9 == '' ? <></> : <img src={t9 == 'x' ? c : s} style={{ height: '90%', width: '90%' }} />}
                </div>
            </div>
        </div>
        <div style={{height:'10%',marginBottom:'0.5rem',marginTop:'0.5rem',width:'100vw',textAlign:'center'}}>
            {wc?
            <button style={{height:'95%',width:'95%',borderRadius:'0.6rem',
            backgroundColor:'#F2C94C',border:'none',fontWeight:'bold',
            color:'white'}} onClick={handlestart}
         >Start another game</button>:
         <button style={{height:'95%',width:'95%',borderRadius:'0.6rem',
            backgroundColor:'#8b8f90',border:'none',fontWeight:'bold',
            color:'white'}}
         >Submit</button>}
         
         </div>
        </>
    )
}

export default Board1