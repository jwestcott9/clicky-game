import React from "react";
import {Row} from 'reactstrap';
import images from '../images.json';
import {LogoBar} from "./LogoBar";
import Banner from "./Banner";
import "./styles.css"

let row = {
 background: "grey",
  width: "100%",
  margin: "0 auto"
}

class Grid extends React.Component {
  constructor(props){
    super(props);
  }
 
 state={
    orderArray: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    images:[images[0], images[1], images[2], images[3],images[4], images[5], images[6], images[7],images[8], images[9], images[10], images[11],images[12], images[13], images[14], images[15],],
    idLog:[] ,
    score: 0,
    highScore: 0,
    

 };

 lose = () => {
   console.log("you lose")
   this.setState({score: 0, idLog:[]})
   alert("You Lost!!!!")
 }

 win = () => {
    alert("You win!!!")
    this.setState({score:0, idLog:[]})
 }


shuffle = (event) => {
       console.log(event.target)
        this.placeholder = [];
       
        let copy = this.state.idLog;
        
        console.log(this.state.idLog)
        console.log(this.state.idLog.indexOf(event.target.id))
      

        if(this.state.idLog.indexOf(event.target.id)===-1){
          this.setState({score: this.state.score+1}, ()=>{
            if(this.state.score>this.state.highScore){
              this.setState({highScore:this.state.score})
            }
            if(this.state.score === 16){
              this.win();
            }
          })
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
  <LogoBar {...this.state} > </LogoBar>
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