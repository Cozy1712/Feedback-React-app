import React from 'react'
import { Link } from 'react-router-dom'

function ContactPage() {
  return (
    <div>
        <form style={{textAlign:"center"}}>
          <input type="text" name='name' placeholder='Name' style={{
            width:"500px", height:"50px", margin:"20px", borderRadius:"10px", border:"6px solid skyblue", fontWeight:"bold",padding:"3px"}}/>
            <br/>
          <input type="email"name='email' placeholder='Email'style={{
            width:"500px", height:"50px", margin:"20px", borderRadius:"10px", border:"6px solid skyblue", fontWeight:"bold",padding:"3px"}} />
            <br/>
          <textarea name="msg" id="msg" placeholder="Message Here"style={{
            width:"500px", height:"100px", margin:"20px", borderRadius:"10px", border:"6px solid skyblue", fontWeight:"bold",padding:"3px"}}></textarea><br /><br />
            <button type="submit" style={{
            width:"100px", height:"50px", margin:"20px", borderRadius:"10px", border:"2px solid skyblue", fontWeight:"bold",padding:"3px",backgroundColor:"darkgreen" ,cursor:"pointer"}} >Send</button>
            
          

        </form>
        <p>
          <Link to = '/' style={{
            color:"skyblue", textDecoration:"none", padding:"10px", margin:"20px"
          }}>Back to home </Link>
        </p>
    </div>
  )
}

export default ContactPage