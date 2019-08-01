import React from "react";
import {Button, Row, Col} from "reactstrap";
import ReactDOM from "react-dom"


let bar = {
    background:"lightblue"
}


let scorePlaceholder = -1;





function Logic (props){
    scorePlaceholder++;
    console.log(scorePlaceholder)
    
    

    return(
        <Row style= {bar}>
        <Col md = "2"> </Col>
        <Col className = 'btn' color="primary" >Clicky Games</Col>
        <Col >
        </Col>
        <Col >
        High Score: 0           Your Score: {scorePlaceholder}
        </Col>
        <Col md ="1">
        </Col>
        </Row>
    )
    

}







export { Logic}; 
