import * as action from './actions';
import * as actionTypes from './types';


describe('Action', () => {
  it('the action file should export 11 actions', () => {
    expect(Object.keys(action)).toHaveLength(11);
  });

  it('load should return an object with attribute type equal to LOAD', () => {
    expect(action.load()).toHaveProperty('type', actionTypes.LOAD);
  });

  it('moveError should return an object with attribute type equal to MOVE_ERROR', () => {
    expect(action.moveError()).toHaveProperty('type', actionTypes.MOVE_ERROR);
  });

  it('moviment should return an object with attribute type equal to MOVIMENT', () => {
    expect(action.moviment()).toHaveProperty('type', actionTypes.MOVIMENT);
  });

  it('playerLose should return an object with attribute type equal to PLAYER_LOSE', () => {
    expect(action.playerLose()).toHaveProperty('type', actionTypes.PLAYER_LOSE);
  });

  it('playerWon should return an object with attribute type equal to PLAYER_WON', () => {
    expect(action.playerWon()).toHaveProperty('type', actionTypes.PLAYER_WON);
  });

  it('playing should return an object with attribute type equal to PLAYING', () => {
    expect(action.playing()).toHaveProperty('type', actionTypes.PLAYING);
  });

  it('restart should return an object with attribute type equal to RESTART', () => {
    expect(action.restart()).toHaveProperty('type', actionTypes.RESTART);
  });

  it('rollback should return an object with attribute type equal to ROLLBACK', () => {
    expect(action.rollback()).toHaveProperty('type', actionTypes.ROLLBACK);
  });

  it('save should return an object with attribute type equal to SAVE', () => {
    expect(action.save()).toHaveProperty('type', actionTypes.SAVE);
  });

  it('start should return an object with attribute type equal to START', () => {
    expect(action.start()).toHaveProperty('type', actionTypes.START);
  });

  it('toggleHardmode should return an object with attribute type equal to TOGGLE_HARDMODE', () => {
    expect(action.toggleHardmode()).toHaveProperty('type', actionTypes.TOGGLE_HARDMODE);
  });
});
