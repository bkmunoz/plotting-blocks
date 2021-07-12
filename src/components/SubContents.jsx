import React, { Component } from "react";

const subStyle = {
    backgroundColor: "#ffd966",
    margin: "20px 60px",
    border: "2px solid black",
    height: "450px",
    width: "325px",
    display: "inline-block",
    justifyContent: "space-around"
}

class SubContents extends Component{
    render(){
        return(
            <div className="Sub" style={ subStyle}>
            </div>
        )
    }
}

export default SubContents;