import React from 'react';
import PropTypes from 'prop-types';

import './Wall.css';
import { Block } from '../Block';

export const Wall = ({ hardMode }) => (
  <div className={'Wall ' + (hardMode ? 'hard-mode' : '')}>
    <Block value={2}></Block>
    <Block value={4}></Block>
    <Block value={8}></Block>
    <Block value={16}></Block>
    <Block value={4096}></Block>
    <Block value={0}></Block>
    <Block value={0}></Block>
    <Block value={32}></Block>
    <Block value={2048}></Block>
    <Block value={0}></Block>
    <Block value={0}></Block>
    <Block value={64}></Block>
    <Block value={1024}></Block>
    <Block value={512}></Block>
    <Block value={256}></Block>
    <Block value={128}></Block>
  </div>
);

Wall.propTypes = {
  hardMode: PropTypes.bool,
};
