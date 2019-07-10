import React, { Component } from "react";
import "./Footer.css";
import copyright from "./copyright.png"


var footerImage = {
    backgroundImage: `url(${copyright})`,
    backgroundSize: `100%`,
  };
  
class Footer extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center" id="footer" style={footerImage}>The Clicky Game!</div>
        )
    }
}

export default Footer;