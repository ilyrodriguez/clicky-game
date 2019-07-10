import React, { Component } from "react";
import "./Navbar.css";
import nav from "./nav.png"

var navImage = {
  backgroundImage: `url(${nav})`,
  backgroundSize: `100%`,
};

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top" style={navImage}>
        {/* <image src="./nav.png" id="nav"/> */}
         <ul> 
          <li className="itemCenter text-center center">the office</li>
          <li className="itemRight"> {this.props.children}
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;