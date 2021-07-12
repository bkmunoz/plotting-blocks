import React, { Component } from "react";

const mainStyle = {
    backgroundColor: "#e06666",
    margin: "20px 20px 0px 20px",
    display: "inline-block",
    border: "2px solid black",
    height: "700px",
    width: "1400px"
}

class Main extends Component{
    render(){
        return(
            <div className="Main" style={mainStyle}>
                { this.props.children }
            </div>
        )
    }
}

export default Main;