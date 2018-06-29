import {
  LOAD,
  RESTART,
  ROLLBACK,
  SAVE,
  TOGGLE_HARDMODE,
  MOVIMENT,
  MOVE_ERROR,
  PLAYER_LOSE,
  PLAYER_WON,
  PLAYING,
} from './types';


export const load = () => ({type: LOAD});

export const restart = () => ({type: RESTART});

export const rollback = () => ({type: ROLLBACK});

export const save = () => ({type: SAVE});

export const toggleHardmode = () => ({type: TOGGLE_HARDMODE});

export const moviment = state => ({type: MOVIMENT, payload: state});

export const moveError = bool => ({type: MOVE_ERROR, payload: bool});

export const playerLose = () => ({type: PLAYER_LOSE});

export const playerWon = () => ({type: PLAYER_WON});

export const playing = () => ({type: PLAYING});
