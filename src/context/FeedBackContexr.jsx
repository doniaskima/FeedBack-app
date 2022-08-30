import { createContext, useState } from "react"

const FeedBackContext = createContext()

export const FeedBackProvider = ({ children }) => {
    const [feedBack, setFeedBack] = useState([
        {
            id: 1,
            rating: 8,
            text: "this data from context",
        },
    ])
    return (
        <FeedBackContext.Provider value={{}}>{children}</FeedBackContext.Provider>
    )
}