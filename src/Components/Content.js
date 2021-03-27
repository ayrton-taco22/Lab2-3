import React from 'react'
import ReactDOM from 'react-dom'

const Content = (props) => {
    return(
        <div>
            <h1>{props.part1}</h1>
            <h1>{props.part2}</h1>
            <h1>{props.part3}</h1>
        </div>
    )
}

export default Content