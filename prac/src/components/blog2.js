import React from "react";
import Blogbod from "./blogbod"
import {data} from "./BlogData";


function Blog2(){
    return(<div>
        <Blogbod
            title={data[1].title}
            author={data[1].author}
            date={data[1].date}
            body={data[1].body}

            />
    </div>)
}

export default Blog2;