import {useState} from 'react'
 
//-----import component files-------
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './components/data/FeedbackData'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from './components/FeedbackStats'


function App() {
     // global state 
     const [feedback,setFeedback] = useState(FeedbackData)

////////////////////////////////////////////////
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete❓'))
        {
         setFeedback(feedback.filter((item) => item.id !==id))   
        }
    }
   
    return(
        <>
            <Header />
            <div className='container'>
                <FeedbackForm/>
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            
                
            </div>
        </>
    )
}

export default App