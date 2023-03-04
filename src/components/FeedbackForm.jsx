import React from 'react'
import Card from '../shared/Card'
import Button from '../shared/Button'
import { useState } from 'react'




function FeedbackForm() {

/// text input using use state hook 
    const [text, setTest] = useState('')
// to disable send button
const [btnDisabled, setBtnDisabled] = useState(true)
// message that display
const [message, setMessage] = useState('')



    const handleTextchange = (e) =>{
/////validation
        if (text === '') {
          setBtnDisabled(true)
          setMessage(null)
        }else if(text !== '' && text.trim().length <= 10){
          setBtnDisabled(true)
        } else{
          setMessage(null)
          setBtnDisabled(false)
        }

        setTest(e.target.value) 
    }
  return (
    <Card>
        <form> 
            <h2>How Would You Rate Us❓</h2> 
            <br/>

            {/* @todo -rating select component */}

            <div className='input-group'>
            <input
             onChange={handleTextchange}
             type='text' placeholder='Rate us here⭐⭐⭐❕'
             value={text}/>
             <Button type='submit' isDisabled={btnDisabled}>SEND</Button>
            </div>

            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm