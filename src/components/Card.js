import React from "react";
import Grid from "./Grid";

const Card = (props) =>{
    return(
    <img alt= "character Card" style={props.style} className = "character-card" onClick={Grid.shuffle}  id = {props.id} src = {props.image}>
            </img>)
}

export default Card