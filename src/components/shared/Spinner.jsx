import React from 'react'
import spinner from "./200.gif";

const Spinner = () => {
    return (
        <img
            src={spinner}
            alt="Loading ..."
            style={{ width: "100px", margin: "auto", display: "block" }}
        />
    )
}

export default Spinner