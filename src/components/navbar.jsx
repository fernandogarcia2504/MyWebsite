import React from "react";
import image1 from "../images/logo.png"

function Navbar() {
    return(
        <header>
            <img src={image1} />
            <ul>
                <li>About Me</li>
                <li>Contact Me</li>
                <li>Blog</li>
            </ul>
            

        </header>
    );
}

export default Navbar;