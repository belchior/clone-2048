import * as action from './actions';
import * as actionTypes from './types';

it('The actions file should export 11 actions', () => {
  expect(Object.keys(action)).toHaveLength(11);
});

it('The action load should return an object type LOAD', () => {
  expect(action.load()).toEqual({ type: actionTypes.LOAD, });
});

it('The action moveError should return an object type MOVE_ERROR', () => {
  expect(action.moveError()).toEqual({ type: actionTypes.MOVE_ERROR, });
});

it('The action moviment should return an object type MOVIMENT', () => {
  expect(action.moviment()).toEqual({ type: actionTypes.MOVIMENT, });
});

it('The action playerLose should return an object type PLAYER_LOSE', () => {
  expect(action.playerLose()).toEqual({ type: actionTypes.PLAYER_LOSE, });
});

it('The action playerWon should return an object type PLAYER_WON', () => {
  expect(action.playerWon()).toEqual({ type: actionTypes.PLAYER_WON, });
});

it('The action playing should return an object type PLAYING', () => {
  expect(action.playing()).toEqual({ type: actionTypes.PLAYING, });
});

it('The action restart should return an object type RESTART', () => {
  expect(action.restart()).toEqual({ type: actionTypes.RESTART, });
});

it('The action rollback should return an object type ROLLBACK', () => {
  expect(action.rollback()).toEqual({ type: actionTypes.ROLLBACK, });
});

it('The action save should return an object type SAVE', () => {
  expect(action.save()).toEqual({ type: actionTypes.SAVE, });
});

it('The action start should return an object type START', () => {
  expect(action.start()).toEqual({ type: actionTypes.START, });
});

it('The action toggleHardmode should return an object type TOGGLE_HARDMODE', () => {
  expect(action.toggleHardmode()).toEqual({ type: actionTypes.TOGGLE_HARDMODE, });
});
