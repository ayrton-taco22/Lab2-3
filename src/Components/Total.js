import React from 'react'
import ReactDOM from 'react-dom'

const Total = (props) => {
    return(
        <div>
            <h1>{props.exercises1}</h1>
            <h1>{props.exercises2}</h1>
            <h1>{props.exercises3}</h1>
        </div>
    )
}

export default Total
