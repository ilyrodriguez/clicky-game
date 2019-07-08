import React, { Component } from "react";
import "./Navbar.css";
import nav from "./nav.png"

var navImage = {
  backgroundImage: `url(${nav})`
}

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top" style={navImage}>
        <image src="/nav.png" id="nav"/>
         <ul> 
          <li className="itemCenter text">the office</li>
          <li className="itemRight"> Score: {this.props.score} | Highscore: {this.props.highscore}
          </li>
        </ul>
        
      </nav>
    );
  }
}
export default Navbar;