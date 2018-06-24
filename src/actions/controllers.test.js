import * as action from './controllers';
import * as actionTypes from './types';

it('The controllers file should have 5 actions', () => {
  expect(Object.keys(action)).toHaveLength(5);
});

it('The action load should return an object type LOAD', () => {
  expect(action.load()).toEqual({type: actionTypes.LOAD});
});

it('The action restart should return an object type RESTART', () => {
  expect(action.restart()).toEqual({type: actionTypes.RESTART});
});

it('The action rollback should return an object type ROLLBACK', () => {
  expect(action.rollback()).toEqual({type: actionTypes.ROLLBACK});
});

it('The action save should return an object type SAVE', () => {
  expect(action.save()).toEqual({type: actionTypes.SAVE});
});

it('The action toggleHardmode should return an object type TOGGLE_HARDMODE', () => {
  expect(action.toggleHardmode()).toEqual({type: actionTypes.TOGGLE_HARDMODE});
});
