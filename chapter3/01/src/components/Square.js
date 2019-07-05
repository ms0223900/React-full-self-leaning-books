import React from 'react';

//九宮格每個按鈕都一個小組件
function Square(props){
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
