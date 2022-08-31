import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedBackContext = createContext();

export const FeedBackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            rating: 8,
            text: " This Data from the Context",
        },
        {
            id: 2,
            rating: 8,
            text: " This Data from the Context",
        },
        {
            id: 3,
            rating: 8,
            text: " This Data from the Context",
        },
    ]);

    const deleteFeedback = (id) => {
        if (window.confirm("are u sure wanna delete this ?")) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };
    const [feedBackUpdate, setFeedBackUpdate] = useState({
        item: {},
        isOnUpdateMode: false,
    })
    const updateFeedBack = (item) => {
        setFeedBackUpdate({
            item,
            isOnUpdateMode: true
        })
    }
    return (
        <FeedBackContext.Provider value={{ feedback, deleteFeedback, addFeedback, updateFeedBack }}>
            {children}
        </FeedBackContext.Provider>
    );
};

export default FeedBackContext;
