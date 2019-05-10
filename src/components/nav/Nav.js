import React from 'react';
import "./style.css";


const listStyle = {
    listStyleType: 'none'
};

const nobr = {
    display: 'inline'
}

function Nav(props) {
    
    return (
        <nav className="bg-dark fixed-top">
            <div className="container">
                <ul style={listStyle} className="text-center">
                    <div className="row">
                        <div className="col">
                            <li className="brand"><a href="/"><h3 className="text-light">Clicky Game</h3></a></li>
                        </div>
                        <div className="col">
                            <li className="col"><h3 className="text-light">{props.activeMessage}</h3></li>
                        </div>
                        <div className="col">
                            <li><h3 className="text-light" style={nobr} >Score: </h3>
                            <h3 className="text-light" style={nobr} > {props.score}</h3>
                            <h3 className="text-light" style={nobr}> | </h3>
                            <h3 className="text-light" style={nobr}>Top Score:</h3>
                            <h3 className="text-light top-score" style={nobr}> {props.topScore}</h3>
                            </li>
                        </div>
                    </div>
                </ul>
            </div>
        </nav>


    )
}


export default Nav;