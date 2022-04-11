import React from "react";

function Hero(){
    return(
        <div>
            <div className="hero-background">

             <h1>Hello World! My name is Justin McKenzie</h1>
             <h3>I am Full-stack Web Developer/Software engineer</h3>
             <button className="btn">Contact</button>
             <div>
                 <p>
                     <a href="https://www.instagram.com/mckenjus/"target="_blank" rel="noreferrer"><img src="./assets/instagram.png" alt="Instagram logo"></img></a>|
                     <a href="https://github.com/mckenjus"target="_blank" rel="noreferrer">Github</a>|
                     <a href="https://www.linkedin.com/in/mckenjus/"target="_blank" rel="noreferrer">LinkedIn</a>
                 </p>
                
             </div>
            </div>
        </div>
    )
}

export default Hero;