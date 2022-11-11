import React from 'react';
import "../App.css";

import {data} from "./BlogData";
import Cardbone from "./cardbone"
function Card() {
  return (
    <div>
        <h1>Wocktan Blog post</h1>
<section>
    <Cardbone
    title={data[0].title}
    author={data[0].author}
    body={data[0].body}
    date={data[0].date}
    path={data[0].path}
    />
    
    <Cardbone
    title={data[1].title}
    author={data[1].author}
    body={data[1].body}
    date={data[1].date}
    path={data[1].path}
    />
    
    <Cardbone
    title={data[2].title}
    author={data[2].author}
    body={data[2].body}
    date={data[2].date}
    path={data[2].path}
    />
    


   
</section>
    </div>
  )
}

export default Card