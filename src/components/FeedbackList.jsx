import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'



function FeedbackList( {feedback, handleDelete} ) {
    if(!feedback || feedback.length === 0){
        return <p>No feedback yet❕</p>
    }
  return (
    <div className='feedback-list'>

      {feedback.map((item) => ( 
        <FeedbackItem key={item.id} item={item} handleDelete ={handleDelete}/>

      
      ))}
          
    </div>
  )
}

FeedbackList.prototype ={
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isrequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequird,
    })
  )
}

export default FeedbackList