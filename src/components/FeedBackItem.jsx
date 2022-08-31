import React, { useContext, useState } from "react"
import Card from "./shared/Card"
import PropTypes from "prop-types"
import { FaTimes } from "react-icons/fa"
import FeedBackContext from "../context/FeedBackContext";

const FeedBackItem = ({ item }) => {
    const { deleteFeedback } = useContext(FeedBackContext)
    return (
        <Card>
            <div className="num-display">{item.rating} </div>
            <button className="close" onClick={() => deleteFeedback(item.id)}>
                <FaTimes color="purple" size={20} />
            </button>
            <div className="text-display"> {item.text}</div>
        </Card>
    )
}

FeedBackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedBackItem
