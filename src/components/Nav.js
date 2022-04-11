import React from "react";



function Nav() {
    return( 
        <div>
            <header>
                <div className="navbar">
                    <ul>
                        <li><a className="navbar-link" href="/">Home</a></li>
                        <li><a className="navbar-link" href="/Hero">About Me</a></li>
                        <li><a className="navbar-link" href="/Skills">Skills</a></li>
                        <li><a className="navbar-link" href="/Projects">Projects</a></li>
                        <li><a className="navbar-link" href="/Contact">Contact</a></li>
                    </ul>
                </div>
            </header>
        </div>  
     )
}
export default Nav;