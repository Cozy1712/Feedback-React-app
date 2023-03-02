// import use state
//import { useState } from "react"

function FeedbackItem({item}) {

//COMPONENT LEVEL STATE
    // const [rating, setRating] = useState(6)
    // const [text, setText] = useState('This is a feedback item i created')

    // const handclick = () => {
    //     setRating((prev) =>{
    //         return prev + 1}
    //     )
    // }
  return (
    <div className="card">
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>   
    </div>
  )
}

export default FeedbackItem