import React from "react";
import imageGDL from "../images/gdl.jpg"
import imageTech from "../images/tech.jpg"

function Main() {
    return(
        <main /*style={{backgroundImage:`url(${imageGDL})` }} */> 
        <div className="container">
            <div className="name-career">
                <h1>Fernando Garcia Tejeda</h1>
                <h2 style={{color: '#F7EFE5'}} >Computer Science</h2>
            </div>
            <div className="horizontal">
                <div className="photo">
                    <img src={imageTech} className="picture" />
                </div>
                <div className="paragraph">
                    <p>
                    Hey! I am Fernando Garcia, a computer science student interested in web development (fullstack), networking and cibersecurity. 
                    </p>
                </div>
            </div>
        

        <div className="latest-projects">
        <h2>Latest Projects</h2>
        <div>
            <h3>SEL4C App</h3>
            <p style={{color: '#F7EFE5'}} >Mobile application for social entrepeneurs. Created a dashboard to monitor entrepeneurs profiles. Created a mobile App
                where students could perform activities made by psychologists and quizes to measure improvement thoughout the course. 
            </p>
            <h4>Tools</h4>
            <ul style={{color: '#F7EFE5'}} >
                <li>Xcode</li>
                <li>Node</li>
                <li>React</li>
            </ul>
        </div>
        <div>
            <h3>Networking</h3>
            <p style={{color: '#F7EFE5'}} > Fiction networking scenario for a programming olympics for middle and high school students. Network for approximately 
                400 people. The goal was to make subnets for teachers, judges, and students depending on their school grade. Worked with DHCP,
                DNS servers and protocols for routers and switches
            </p>
            <h4>Tools</h4>
            <ul style={{color: '#F7EFE5'}} >
                <li>Cisco Packet Tracer</li>
               
            </ul>
        </div>
      </div>  
      </div>
        </main>
    );
}

export default Main;