import React from 'react'
import ReactDOM from 'react-dom'

const Content = (props) => {
    return(
        <div>
            {props.part1}
            {props.exercises1}
            {props.part2}
            {props.exercises2}
            {props.part3}
            {props.exercises3}
        </div>
    )
}

export default Content