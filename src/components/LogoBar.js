import React from "react";
import {Button, Row, Col} from "reactstrap";


let bar = {
    background:"white"
}


let score = {
    float: "right",
    textAlign: "left"
}
let placeholder = 0;


// this is where you can pass in properties
// put props into the parens 

const LogoBar = (props) =>{
    return(
        <Row style= {bar}>
        <Col md = "2"> </Col>
        <Col className = 'btn' color="primary" >Clicky Games</Col>
        <Col >
        </Col>
        <Col >
        High Score: {props.highScore}           Your Score: {props.score}
        </Col>
        <Col md ="1">
        </Col>
        </Row>
    )
}




export default LogoBar; 
