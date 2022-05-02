
import React  from "react";
import {VideoItem} from "./videoItem/videoItem";

function  ViedeoList(props) {

console.log("video props  >> ",props);

    
    
        return(
            <div>
                <p>number of videos : {props.videos.length} </p>
                <hr />
                
                <VideoItem videos= {props.videos}/>
            
            </div>
            )
    
}
export default ViedeoList;