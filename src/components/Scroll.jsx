import React from "react";
import "../css/App.css";

const Scroll = (props)=> {
return (
    <div className="noScroll" style={{overflowY: 'scroll', border: '1px solid black', height: '800px'}}>
        {props.children}
    </div>
)
}


export default Scroll;