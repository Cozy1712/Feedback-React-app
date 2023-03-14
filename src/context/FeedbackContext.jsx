import { v4 as uuidv4 } from 'uuid'

import { createContext, useState } from "react"; // 👈👈 global state with useContext hook
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState(FeedbackData)

    //////////////////////////////////////////////for the submit addfeedback or add feedback
    const addFeedback =(newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])// to add the new comment to app level state/global
 
    }


    //////////////////////////////////delete feedback//////////////
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete❓'))
        {
         setFeedback(feedback.filter((item) => item.id !==id))   
        }
    }



    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,

    }}>
        {children}

    </FeedbackContext.Provider>

}

export default FeedbackContext