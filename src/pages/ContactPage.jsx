import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../shared/Card'
<script src="https://smtpjs.com/v3/smtp.js"></script>


function ContactPage() {

//   const sendEmail = () =>{


//   function sendEmail(Email) {
            
//     Email.send({ 
//       secureToken :"398515c4-0604-491e-8667-4d67f0220096",
//       To : "akangbekabiru89@gmail.com",
//       From : " ",
//       Subject : "",
//       Body : "",
//     }).then(
//       Message => alert("Message has being sent successfully"))
    
//   }
// }
////////////////onSubmit="sendEmail(); reset(); return false;"
  return (
    <Card>
        <form  autoComplete='off' className='input-contactpage'>
      
          <input type="text" id='name' placeholder='Name'/>
          <input type="email" id='email' placeholder='Email' required/>
          <input type="text" id='phone' placeholder='Phone No.' required/>
          <textarea name="text" id="msg" rows="5" placeholder=" Enter Your Message Here"/>
          <button type="submit" >Send</button>
        
        </form>
        <p>
          <Link to = '/' className='contact-link'>Back to home </Link>
        </p>
        {/* <script>
          function sendEmail() {
            Email.send({ 
              secureToken :"398515c4-0604-491e-8667-4d67f0220096",
              To : "akangbekabiru89@gmail.com",
              From : document.getElementById('email').value,
              Subject : " New Contact From Enquiry",
              Body : " Name: "+ getElementById('name').value
               +"<br> Email: "+ getElementById('email').value
               +"<br> Phone No: "+ getElementById('phone').value
               +"<br> Message: "+ getElementById('msg').value,
            }).then(
              message => alert("Message has being sent successfully"))
            
          }



        </script> */}
    </Card>
  )
}

export default ContactPage

// securetooken
// 398515c4-0604-491e-8667-4d67f0220096