import * as actionType from './types';

it('The types file should have 13 actions', () => {
  expect(Object.keys(actionType)).toHaveLength(13);
});


describe('The Action types', () => {
  it('LOAD should be defined', () => {
    expect(actionType.LOAD).toBe('LOAD');
  });

  it('MOVIMENT should be defined', () => {
    expect(actionType.MOVIMENT).toBe('MOVIMENT');
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

  it('PLAYING should be defined', () => {
    expect(actionType.PLAYING).toBe('PLAYING');
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

  it('START should be defined', () => {
    expect(actionType.START).toBe('START');
  });

  it('TOGGLE_HARDMODE should be defined', () => {
    expect(actionType.TOGGLE_HARDMODE).toBe('TOGGLE_HARDMODE');
  });

  it('WELCOME should be defined', () => {
    expect(actionType.WELCOME).toBe('WELCOME');
  });
});
