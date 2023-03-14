// import use state
//import { useState } from "react"
import {FaTimesCircle} from 'react-icons/fa'
import Card from "../shared/Card"
import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({item}) {

  const {deleteFeedback} = useContext(FeedbackContext)
  
// const handleClick = (id) => {
//   console.log(id)
  
// }
//COMPONENT LEVEL STATE
//create state variable with initial variable
    // const [rating, setRating] = useState(6)
    // const [text, setText] = useState('This is a feedback item i created')

    // const handclick = () => {
    //     setRating((prev) =>{
    //         return prev + 1}
    //     )
    // }
  return (
    <Card > 
        <div className="num-display">{item.rating}</div>
         <button onClick={() => deleteFeedback(item.id)} className='close'>
            <FaTimesCircle color='red'/>
          </button>
        <div className="text-display">{item.text}</div>   
    </Card>
  )
} 

FeedbackItem.prototype ={
  item: PropTypes.object.isrequired,

}

export default FeedbackItem