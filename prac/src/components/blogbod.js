import React from 'react'
import "../App.css";

function blogbod(props) {
  return (
    <div>
        <h1>
            {props.title}
        </h1>
        <h3>
            {props.author}
        </h3>
        <h3>
            {props.date}
        </h3>
        <p>
            {props.body}
        </p>
        
    </div>
  )
}

export default blogbod