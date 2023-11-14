import React from "react";
import image1 from "../images/logo.png"

function Navbar() {
    return(
        <header>
            <img src={image1} />
            <ul className="navlist">
                <li className="navlistitem">About Me</li>
                <li className="navlistitem">Contact Me</li>
                <li className="navlistitem" >Blog</li>
                
            </ul>
            

        </header>
    );
}

export default Navbar;