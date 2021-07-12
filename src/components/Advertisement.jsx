import React, { Component } from "react";

const adStyle ={
    backgroundColor: "#b4a7d6",
    margin: "20px 50px",
    height: "150px",
    width: "1300px",
    border: "2px solid black",
    display: "center"
}

class Advertisement extends Component{
    render(){
        return(
            <div className="Ad" style={adStyle}>
            </div>
        )
    }
}

export default Advertisement;