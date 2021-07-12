import React, { Component } from "react";

const navStyle = {
    backgroundColor: "#6fa8dc",
    margin: "20px 20px 0px 20px",
    border: "2px solid black",
    float: "left",
    height: "575px",
    width: "350px"
}

class Navigation extends Component{
    render(){
        return(
            <div className="Nav" style={navStyle}>
            </div>
        )
    }
}

export default Navigation;