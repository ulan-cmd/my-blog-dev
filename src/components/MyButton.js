import React from "react";

const MyButton = (props) => {
    return (
        <p>
            <button className={`w3-button w3-padding-large w3-border ${props.color}`}><b>{props.text} »</b>
            </button>
        </p>
    )
}

export default MyButton;