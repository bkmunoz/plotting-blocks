import React, { Component } from "react";

const headStyle ={
    backgroundColor: "#6aa84f",
    margin: "0px 20px",
    height: "200px",
    width: "1810px",
    border: "2px solid black"
}

class Header extends Component{
    render(){
        return(
            <div className="Head" style={headStyle}>
            </div>
        )
    }
}

export default Header;