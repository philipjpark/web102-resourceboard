import React from "react";

const Card = (props) => {

    return (
        <div className={'Card '}>
            <img src={props.img}/>
            <h5>{props.title}</h5>
            <p>{props.description}</p>
            <a  href={props.link}> 
            <button>Link to Article</button></a>
        </div>
    )
}

export default Card;
