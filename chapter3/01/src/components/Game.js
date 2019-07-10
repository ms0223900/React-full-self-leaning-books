import React,{Component} from 'react';
import Board from './Board';
import '../App.css';


class Game extends Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{/* 狀態 */}</div>
                    <div>{/* 要做的 */}</div>
                </div>
            </div>
        )
    }
}

export default Game
