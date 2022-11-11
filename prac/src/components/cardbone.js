import React from 'react';
import "../App.css";
import pic from "../images/hogo.png";
import {Link} from "react-router-dom";

function Cardbone(props) {
  return (
<div>
<div class="blog-container">
        <div class="blog-box">
            <div class="blog-img">
                <img src={pic} alt="logo"/>
            </div>

            <div class="blog-text">
                <span>{props.date}</span>
                <span>{props.author}</span>
                <h1 className='blog-title'>{props.title}</h1>
                {/* <Link to="#" class="blog-title">what has happen</a>
                <p>I am mad like baby racks that takeoff stuff was some bull right now we are just trying some stuff</p>
            <a href="#">read more</a> */}
                <p>{props.body}</p>
                <p><Link to= {props.path}>

                     read more
                </Link>
               
                </p>
            </div>
        </div>
    </div>


    </div>
  )
}

export default Cardbone