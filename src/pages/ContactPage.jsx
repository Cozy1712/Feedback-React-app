import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../shared/Card'

function ContactPage() {
  return (
    <Card>
        <form >
          <div className='input-group'>
             <input type="text" name='name' placeholder='Name' style={{
             height:"50px", borderRadius:"10px", border:"3px solid skyblue", fontWeight:"bold",padding:"3px"}}/>
            </div><br />
            <div  className='input-group'>
              <input type="email"name='email' placeholder='Email'style={{
              height:"50px", borderRadius:"10px", border:"3px solid skyblue", fontWeight:"bold",padding:"3px"}}></input>
             </div><br />
             <div  className='input-group'>
                <textarea name="text" id="msg" cols="100" rows="10"style={{
               borderRadius:"10px", border:"3px solid skyblue", fontWeight:"bold",padding:"3px"}}></textarea>
             </div><br />
             <div className='message'>
                <button type="submit" style={{ width:"70px",
                height:"40px", borderRadius:"10px", border:"2px solid skyblue", fontWeight:"bold",padding:"3px",backgroundColor:"darkgreen" ,justifyContent:"centre", cursor:"pointer"}} >Send</button>
            </div>
          

        </form>
        <p>
          <Link to = '/' style={{
            color:"skyblue", textDecoration:"none", padding:"10px", margin:"20px"
          }}>Back to home </Link>
        </p>
    </Card>
  )
}

export default ContactPage