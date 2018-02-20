import React, { Component } from 'react';
import './Wall.css';
import { Block } from '../Block';

export class Wall extends Component {
  render() {
    return (
      <div className="Wall">
        <Block value="2"></Block>
        <Block value="4"></Block>
        <Block value="8"></Block>
        <Block value="16"></Block>
        <Block value="4096"></Block>
        <Block value="0"></Block>
        <Block value="0"></Block>
        <Block value="32"></Block>
        <Block value="2048"></Block>
        <Block value="0"></Block>
        <Block value="0"></Block>
        <Block value="64"></Block>
        <Block value="1024"></Block>
        <Block value="512"></Block>
        <Block value="256"></Block>
        <Block value="128"></Block>
      </div>
    );
  }
}
