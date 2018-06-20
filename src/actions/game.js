import {
  MOVIMENT,
  MOVE_ERROR,
  PLAYER_LOSE,
  PLAYER_WON,
  PLAYING,
} from './types';


export const moviment = state => ({type: MOVIMENT, payload: state});

export const moveError = bool => ({type: MOVE_ERROR, payload: bool});

export const playerLose = () => ({type: PLAYER_LOSE});

export const playerWon = () => ({type: PLAYER_WON});

export const playing = () => ({type: PLAYING});
