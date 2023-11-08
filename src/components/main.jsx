import React from "react";
import imageGDL from "../images/gdl.jpg"
import imageTech from "../images/tech.jpg"

function Main() {
    return(
        <main /*style={{backgroundImage:`url(${imageGDL})` }} */> 
        <div className="container">
            <div className="name-career">
                <h1>Fernando Garcia Tejeda</h1>
                <h2>Computer Science</h2>
            </div>
            <div className="horizontal">
                <div className="photo">
                    <img src={imageTech} className="picture" />
                </div>
                <div className="paragraph">
                    <p>
                    Hey! I am Fernando Garcia, a computer science student interested in web development (fullstack), networking and cibersecurity. I live in Mexico City.
                    Curious about how things work.
                    </p>
                </div>
            </div>
        </div>
        </main>
    );
}

export default Main;