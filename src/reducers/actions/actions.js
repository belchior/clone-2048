import {
  LOAD,
  PLAYER_LOSE,
  PLAYER_WON,
  PLAYING,
  MOVE_ERROR,
  MOVIMENT,
  RESTART,
  ROLLBACK,
  SAVE,
  START,
  TOGGLE_HARDMODE,
} from './types';


export const load = () => ({ type: LOAD, });

export const playerLose = () => ({ type: PLAYER_LOSE, });

export const moveError = bool => ({ payload: bool, type: MOVE_ERROR, });

export const moviment = state => ({ payload: state, type: MOVIMENT, });

export const playerWon = () => ({ type: PLAYER_WON, });

export const playing = () => ({ type: PLAYING, });

export const restart = () => ({ type: RESTART, });

export const rollback = () => ({ type: ROLLBACK, });

export const save = () => ({ type: SAVE, });

export const start = () => ({ type: START, });

export const toggleHardmode = () => ({ type: TOGGLE_HARDMODE, });
