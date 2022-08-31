import React, { useContext, useState } from 'react'
import Button from './shared/Button';
import Card from "./shared/Card";
import FeedBackRating from "./FeedBackRating";
import FeedBackContext from "../context/FeedBackContext"
 
const FeedBackForm = ( ) => {
    const { addFeedback } = useContext(FeedBackContext)
    const [text, setText] = useState("");
    const [isBtnDisabled, setIsBtnDisabled] = useState(true)
    const [message, setMessage] = useState("")
    const [rating, setRating] = useState(10)
    const handleInputChange = (e) => {
        setText(e.target.value)
        if (text === "") {
            setIsBtnDisabled(true)
            setMessage(null)
        } else if (text !== "" && text.trim().length <= 10) {
            setIsBtnDisabled(true)
            setMessage("Review must be at least 10 characters")
        } else {
            setMessage(null)
            setIsBtnDisabled(false)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newFeedBack = {
            text,
            rating,
        }
        addFeedback(newFeedBack)
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How do you rate your sevice with us ?</h2>
                <FeedBackRating choose={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input type="text" placeholder="Write a Review" value={text} onChange={handleInputChange} />
                    <Button type="submit" isDisabled={isBtnDisabled}>Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedBackForm