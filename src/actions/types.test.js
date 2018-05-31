import * as actionType from './types';

it('The types file should have 13 actions', () => {
  expect(Object.keys(actionType)).toHaveLength(13);
});

describe('The Action types' , () => {
  it('ADD_SCORE should be defined', () => {
    expect(actionType.ADD_SCORE).toBe('ADD_SCORE');
  });
  it('ADD_HISTORY should be defined', () => {
    expect(actionType.ADD_HISTORY).toBe('ADD_HISTORY');
  });
  it('BEST_SCORE should be defined', () => {
    expect(actionType.BEST_SCORE).toBe('BEST_SCORE');
  });
  it('LOAD should be defined', () => {
    expect(actionType.LOAD).toBe('LOAD');
  });
  it('MOVE_ERROR should be defined', () => {
    expect(actionType.MOVE_ERROR).toBe('MOVE_ERROR');
  });
  it('PLAYER_LOSE should be defined', () => {
    expect(actionType.PLAYER_LOSE).toBe('PLAYER_LOSE');
  });
  it('PLAYER_WON should be defined', () => {
    expect(actionType.PLAYER_WON).toBe('PLAYER_WON');
  });
  it('RESTART should be defined', () => {
    expect(actionType.RESTART).toBe('RESTART');
  });
  it('ROLLBACK should be defined', () => {
    expect(actionType.ROLLBACK).toBe('ROLLBACK');
  });
  it('SAVE should be defined', () => {
    expect(actionType.SAVE).toBe('SAVE');
  });
  it('SAVE_MOVIMENT should be defined', () => {
    expect(actionType.SAVE_MOVIMENT).toBe('SAVE_MOVIMENT');
  });
  it('SET_WALL should be defined', () => {
    expect(actionType.SET_WALL).toBe('SET_WALL');
  });
  it('TOGGLE_HARDMODE should be defined', () => {
    expect(actionType.TOGGLE_HARDMODE).toBe('TOGGLE_HARDMODE');
  });
});
