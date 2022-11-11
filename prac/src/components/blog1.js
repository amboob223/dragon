import React from "react";
import Blogbod from "./blogbod"
import {data} from "./BlogData";


function Blog1(){
    return(<div>
        <Blogbod
            title={data[0].title}
            author={data[0].author}
            date={data[0].date}
            body={data[0].body}
            path={data[0].path}

            />
    </div>)
}

export default Blog1;