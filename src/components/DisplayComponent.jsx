import React, {useState} from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";

const hogsGreased = hogs.filter(hogs =>{
    if(hogs.greased == true) {
        return false
    }
    return true;
}
    )



function DisplayComponent({hogs}) {
    
    return ( 
        <div>
            <div aria-label = "hog card" className ></div>
            <th> {hogsGreased[1].name} = </th>


            
        </div>
    )



}

export default DisplayComponent;