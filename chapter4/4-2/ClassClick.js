import React, { Component, PropTypes } from 'react';

class ClassClick extends Component {

  clickHandler(){
    console.log('已點擊按鈕');
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}

ClassClick.propTypes = {

};

export default ClassClick;
