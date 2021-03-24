import React, { Component } from 'react';

class Band extends Component {

  render() {
    console.log("here");
    return(
      <li>
        <span>{this.props.band.name}</span><button onClick={() => this.props.delete(this.props.band.id)}>Delete</button>
      </li>
    );
  }
};

export default Band;
