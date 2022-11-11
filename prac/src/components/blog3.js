import React from "react";
import Blogbod from "./blogbod"
import {data} from "./BlogData";


function Blog3(){
    return(<div>
        <Blogbod
            title={data[2].title}
            author={data[2].author}
            date={data[2].date}
            body={data[2].body}

            />
    </div>)
}

export default Blog3;