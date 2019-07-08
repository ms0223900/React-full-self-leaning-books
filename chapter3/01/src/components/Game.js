import React from 'react';
import Square from './Square';
import Board from './Board';


//紀錄贏的二維陣列,判斷誰贏了
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Game extends React.Component {
  //建立建構子傳入值
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
          //紀錄ooxx的值，放在陣列。
        }
      ],
      stepNumber: 0,
      //步驟紀錄
      oIsNext: true
      //x和o交換 布林值
    };
  }

  //點擊事件
  handleClick(i) {

    //步驟記錄
    const history = this.state.history.slice(0, this.state.stepNumber + 1);

    //當前紀錄
    const current = history[history.length - 1];

    // 判斷誰贏誰輸
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    // 如果x是下一個話 就是x,否則就是Ｏ
    squares[i] = this.state.oIsNext ? "O" : "X";

    //紀錄x o 更新
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      oIsNext: !this.state.oIsNext
    });
  }

  //紀錄xo步數
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      oIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    //輪流到誰先。
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    //紀錄誰贏了
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.oIsNext ? "O" : "X");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
