import React from 'react';
import Square from './Square';

class Board extends React.Component{
 constructor(props){
   super(props)
   this.state = {
     values: ['', '', '', '', '', '', '', '', ''],
     isTurnX: true,
     startX: true
   }
   this.handleClicked = this.handleClicked.bind(this)
   this.calculateGameState = this.calculateGameState.bind(this)
   this.findEmpties = this.findEmpties.bind(this)
   this.minimax = this.minimax.bind(this)
   this.searchMove = this.searchMove.bind(this)
   this.restartGame = this.restartGame.bind(this)
   this.randomlyChoose = this.randomlyChoose.bind(this)
   this.displayGameState = this.displayGameState.bind(this)
 }

 renderSquare(index, value){
   const squareStyles = [
    {"border-left": "0px", "border-top": "0px"},
    {"border-top": "0px"},
    {"border-right": "0px", "border-top": "0px"},
    {"border-left": "0px"},
    {},
    {"border-right": "0px"},
    {"border-left": "0px", "border-bottom": "0px"},
    {"border-bottom": "0px"},
    {"border-right": "0px", "border-bottom": "0px"},
   ]

   const squareStyle = {};
 }
}

export default Board;
