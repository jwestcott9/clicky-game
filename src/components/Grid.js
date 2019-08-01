import React from "react";
import {Row} from 'reactstrap';
import images from '../images.json';
import {LogoBar, Logic} from "./LogoBar";
import Banner from "./Banner";
import "./styles.css"
import ReactDOM from 'react-dom'

let style={
    height: '175px',
    width: '175px',
    padding: '5px',
    
}

let row = {
 background: "grey",
  width: "100%",
  margin: "0 auto"
}

let gridStyle = {
 
  width: "50%",
  margin: "0 auto"
}

let arrayPlaceholder = [];
let scorePlaceholder = 0;
let placeholder= [];



class Grid extends React.Component {
  // this has too many statefUl properties figure out how to seperate out the functionality
 state={
    orderArray: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    images:[images[0], images[1], images[2], images[3],images[4], images[5], images[6], images[7],images[8], images[9], images[10], images[11],images[12], images[13], images[14], images[15],],
    idLog:[] ,
    score: 0 
    

 };

 lose = () => {
   console.log("you lose")

 }



shuffle = (event) => {
       console.log(event.target)
        this.placeholder = [];
       
        let copy = this.state.idLog;
        
        console.log(this.state.idLog)
        console.log(this.state.idLog.indexOf(event.target.id))


        if(this.state.idLog.indexOf(event.target.id)===-1){
          copy.push(event.target.id);
          this.setState({idLog:copy}, ()=>{
          console.log(this.state.idLog)
          for (let i = this.state.orderArray.length - 1; i > 0; i--) {      //Unique Random Number 0-15
          
            let j = Math.floor(Math.random() * (i + 1));        // random index from 0 to i
            [this.state.orderArray[i], this.state.orderArray[j]] = [this.state.orderArray[j], this.state.orderArray[i]]; // swap elements
          }
       
          for(let i =0; i<this.state.orderArray.length; i++){   // Placeholder Image Array
          this.placeholder.push(images[this.state.orderArray[i]])
          }
          
          this.setState({images: this.placeholder})  
        })}else { 
          
          this.lose();}
       
      }

render(){

  
return(
<>
  <Logic > </Logic>
  <Banner></Banner>  
   
  <div className = "gridStyle"> 
   <Row style = {row}>
            <img alt= "character Card" className = "character-card" onClick={(event)=>this.shuffle(event)}  id = {this.state.images[0].id} src = {this.state.images[0].image}>
            </img>
            <img alt= "character Card" className = "character-card" onClick={(event)=>this.shuffle(event)}  id = {this.state.images[1].id} src = {this.state.images[1].image}>
            </img>
            <img alt= "character Card" className = "character-card" onClick={(event)=>this.shuffle(event)}  id = {this.state.images[2].id} src = {this.state.images[2].image}>
            </img>
            <img alt= "character Card" className = "character-card" onClick={(event)=>this.shuffle(event)}  id = {this.state.images[3].id} src = {this.state.images[3].image}>
            </img>
    </Row>
    <Row style = {row}>
            <img alt= "character Card"  className = "character-card" onClick={(event)=>this.shuffle(event)}  id = {this.state.images[4].id} src = {this.state.images[4].image}>
            </img>
            <img alt= "character Card" className = "character-card" onClick={(event)=>this.shuffle(event)}  id = {this.state.images[5].id} src = {this.state.images[5].image}>
            </img>
            <img alt= "character Card"  className = "character-card" onClick={(event)=>this.shuffle(event)}  id = {this.state.images[6].id} src = {this.state.images[6].image}>
            </img>
            <img alt= "character Card"  className = "character-card" onClick={(event)=>this.shuffle(event)}  id = {this.state.images[7].id} src = {this.state.images[7].image}>
            </img>
    </Row>
    <Row style = {row}>
            <img alt= "character Card"  className = "character-card" onClick={(event)=>this.shuffle(event)}  id = {this.state.images[8].id} src = {this.state.images[8].image}>
            </img>
            <img alt= "character Card"  className = "character-card" onClick={(event)=>this.shuffle(event)}  id = {this.state.images[9].id} src = {this.state.images[9].image}>
            </img>
            <img alt= "character Card"  className = "character-card" onClick={(event)=>this.shuffle(event)}  id = {this.state.images[10].id} src = {this.state.images[10].image}>
            </img>
            <img alt= "character Card"  className = "character-card" onClick={(event)=>this.shuffle(event)}  id = {this.state.images[11].id} src = {this.state.images[11].image}>
            </img>
    </Row>
    <Row style = {row}>
           <img alt= "character Card"  className = "character-card" onClick={(event)=>this.shuffle(event)}  id = {this.state.images[12].id} src = {this.state.images[12].image}>
            </img>
            <img alt= "character Card" className = "character-card" onClick={(event)=>this.shuffle(event)}  id = {this.state.images[13].id} src = {this.state.images[13].image}>
            </img>
            <img alt= "character Card" className = "character-card" onClick={(event)=>this.shuffle(event)}  id = {this.state.images[14].id} src = {this.state.images[14].image}>
            </img>
            <img alt= "character Card" className = "character-card" onClick={(event)=>this.shuffle(event)}  id = {this.state.images[15].id} src = {this.state.images[15].image}>
            </img>
    </Row>
    </div>
    </>)
}
}



export default Grid;