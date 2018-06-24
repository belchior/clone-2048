import * as action from './game';
import * as actionTypes from './types';

it('The controllers file should have 5 actions', () => {
  expect(Object.keys(action)).toHaveLength(5);
});

it('The action moviment should return an object type MOVIMENT', () => {
  expect(action.moviment()).toEqual({type: actionTypes.MOVIMENT});
});

it('The action moveError should return an object type MOVE_ERROR', () => {
  expect(action.moveError()).toEqual({type: actionTypes.MOVE_ERROR});
});

it('The action playerLose should return an object type PLAYER_LOSE', () => {
  expect(action.playerLose()).toEqual({type: actionTypes.PLAYER_LOSE});
});

it('The action playerWon should return an object type PLAYER_WON', () => {
  expect(action.playerWon()).toEqual({type: actionTypes.PLAYER_WON});
});

it('The action playing should return an object type PLAYING', () => {
  expect(action.playing()).toEqual({type: actionTypes.PLAYING});
});
