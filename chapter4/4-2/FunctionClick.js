import React from 'react';

function FunctionClick(){

  function clickHandler(){
    console.log('Button clicked');
  }

  return (
    <div>
      <button type="button" onClick={clickHandler()}></button>
    </div>
  )
}

export default FunctionClick;
