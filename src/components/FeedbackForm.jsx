import React from 'react'
import RatingSelect from './RatingSelect'
import Card from '../shared/Card'
import Button from '../shared/Button'
import { useState } from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'




function FeedbackForm() {
  const {addFeedback} = useContext(FeedbackContext)

/// text input using use state hook 
    const [text, setTest] = useState('')
//state to disable send button
const [btnDisabled, setBtnDisabled] = useState(true)
// state message that display
const [message, setMessage] = useState('')
// state for rating
const  [ rating, setRating] = useState(10)



    const handleTextchange = (e) =>{
/////validation to run whenever we type something in 
        if (text === '') {
          setBtnDisabled(true)
          setMessage(null) 
        }else if(text !== '' && text.trim().length <= 10){
          setMessage('Text must be up to 10 characters😝 ')//Realtime error checking 
          setBtnDisabled(true)
        } else{
          setMessage(null)
          setBtnDisabled(false)
        }

        setTest(e.target.value) 
    }

    // declaring the handlesubmit
    const handleSubmit = (e) =>{
      //prevent the default element/number 10 from submitting 
      e.preventDefault()
      if (text.trim ().length > 10){
        const newFeedback ={ text, rating}

       addFeedback(newFeedback)
         /////////////// when submitted text goes away 
        setTest('')
      }
    }
  return (
    <Card>

        <form onSubmit={handleSubmit}> {/*creating an event handler for submitting the form which is onSubmit  */}
            <h2>How Would You Rate Us❓</h2> 
            <br/>

            {/* @todo -rating select component */}
            < RatingSelect select={(rating) => setRating(rating)}/>

            <div className='input-group'>
            <input
             onChange={handleTextchange}
             type='text' placeholder='Rate us here⭐⭐⭐❕'
             value={text}/>
             <Button type='submit' isDisabled={btnDisabled}>
               SEND 
              </Button>

            </div>

            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm