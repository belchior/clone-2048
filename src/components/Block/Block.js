import React, { Component } from 'react';

import './Block.css';

export class Block extends Component {
  render() {
    return (
      <div className={'Block block-' + this.props.value}>{this.props.value}</div>
    );
  }
}
