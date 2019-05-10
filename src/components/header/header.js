import React from "react";
import "./style.css";


function Header() {
    return (
        <div className="container">
            <div className="jumbotron">
            <div className="card text-center">
                <p>Click on a space ship to score a point. Careful though, if you click on the same ship twice you lose all your points!</p>
            </div>
            </div>
        </div>
    )
}

export default Header;