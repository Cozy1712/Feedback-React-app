import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'
///for routing
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'


 
//-----import component files-------
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './components/data/FeedbackData'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from './components/FeedbackStats'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'


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
   
//////////////////////////////////////////////for the submit addfeedback
    const addFeedback =(newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])// to add the new comment to app level state/global
 
    }
    return( 
        <Router>
            <Header/>
            <div className='container'>
              <Routes>
                <Route exact path="/" 
                element={
                    <>
                    <FeedbackForm handleAdd={addFeedback}/>
                    <FeedbackStats feedback={feedback}/>
                    <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                    </>
                }
                ></Route>
                <Route path="/about" element={<AboutPage/>}></Route>
                <Route path="/contact" element={<ContactPage/>}></Route>
              </Routes>
                 <AboutIconLink/> 
                
            </div>
             
        </Router>
    )
}

export default App