import React from "react";
import {Button, Row, Col} from "reactstrap";
import ReactDOM from "react-dom"


let bar = {
    background:"lightblue"
}


let scorePlaceholder = -1;

class LogoBar extends React.Component{
    
render(){
    return(
        <Row style= {bar}>
        <Col md = "2"> </Col>
        <Col className = 'btn' color="primary" >Clicky Games</Col>
        <Col >
        </Col>
        <Col >
        High Score: {this.props.highScore}           Your Score: {this.props.score}
        </Col>
        <Col md ="1">
        </Col>
        </Row>
    )
}
}











export { LogoBar}; 
