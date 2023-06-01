import React from "react";

class Menu extends React.Component {
    render(){
        return(
            <div className="nav">
                <nav>
                    <h2 className="logo">Joelene <span>Ciel</span></h2>
                    <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/news">News</a></li>
                    <li><a href="/kontakt">Contact</a></li>
                    <li><a href="/about">About us</a></li>
                    </ul>
                    <div className="outer button">
                        <button>
                            <a href="/login">Log in</a>
                        </button>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </div> 

        )
    }
}

export default Menu;