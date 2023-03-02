import {useState} from 'react'
 
//-----import component files-------
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './components/data/FeedbackData'

function App() {
    const [feedback] = useState(FeedbackData)

    return(
        <>
            <Header />
            <div className='container'>
            <FeedbackList feedback={feedback} />
                
            </div>
        </>
    )
}

export default App