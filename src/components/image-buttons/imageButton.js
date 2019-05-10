import React from "react";
import "./img-btn.css";

function ImageButton(props) {
    return (
        <div onClick={() => props.shufflePics(props.id)} className="card img-card">
            <div className="img-container">
                <button className="button" type="button">
                    <img alt={props.name} src={props.image} id={props.id}/>
                </button>
            </div>
        </div>
    );
}



export default ImageButton;


