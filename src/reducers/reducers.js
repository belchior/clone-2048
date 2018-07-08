import { loadState, saveState, } from '../localState';
import { last, pipe, reverse, tail, raffle, } from '../helpers/list';
import {
  LOAD,
  MOVE_ERROR,
  MOVIMENT,
  PLAYER_LOSE,
  PLAYER_WON,
  PLAYING,
  RESTART,
  ROLLBACK,
  SAVE,
  TOGGLE_HARDMODE,
} from './actions/types';


export const initialState = {
  bestScore: 0,
  hardMode: false,
  history: [],
  initialWall: [],
  maxBlock: 2048,
  moveError: false,
  rollback: 2,
  score: 0,
  status: PLAYING,
  wall: [],
};

const initialize = () => ({
  ...initialState,
  history: [[]],
  wall: raffle(raffle(Array(16).fill(0))),
  initialWall: [2, 4, 8, 16, 4096, 0, 0, 32, 2048, 0, 0, 64, 1024, 512, 256, 128, ]
});

export const reducer = (state = initialize(), action) => {
  switch (action.type) {
    case LOAD: return load(state);
    case MOVIMENT: return moviment(state, action.payload);
    case MOVE_ERROR: return moveError(state, action.payload);
    case PLAYER_LOSE: return playerLose(state);
    case PLAYER_WON: return playerWon(state);
    case RESTART: return restart(state);
    case ROLLBACK: return rollback(state);
    case SAVE: return save(state);
    case TOGGLE_HARDMODE: return toggleHardMode(state);
    default: return state;
  }
};


const load = state => ({
  ...loadState(),
  ...state,
});

const moviment = (state, newState) => {
  return pipe(
    setBestScore,
    addHistory(state),
  )(newState);
};

const addHistory = state => newState => ({
  ...newState,
  history: [ last(state.history), state.wall ],
});

const save = state => {
  saveState(state);
  return state;
};

const setBestScore = state => ({
  ...state,
  bestScore: state.score > state.bestScore
    ? state.score
    : state.bestScore,
});


const moveError = (state, error) => ({
  ...state,
  moveError: error
});


const playerLose = state => ({
  ...state,
  status: PLAYER_LOSE,
});


const playerWon = state => ({
  ...state,
  status: PLAYER_WON,
});

const restart = state => ({
  ...initialState,
  bestScore: state.bestScore
});

const rollback = state => ({
  ...state,
  rollback: Math.max(state.rollback - 1, 0),
  wall: last(state.history),
  history: tail(reverse(state.history)),
});

const toggleHardMode = state => ({
  ...state,
  hardMode: !state.hardMode
});
