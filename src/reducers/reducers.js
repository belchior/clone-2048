import { saveState, loadState } from '../localStorage';
import {
  ADD_SCORE,
  LOAD,
  BEST_SCORE,
  MOVE_DOWN,
  MOVE_LEFT,
  MOVE_RIGHT,
  MOVE_UP,
  RESTART,
  ROLLBACK,
  SAVE,
  TOGGLE_HARDMODE,
} from '../actionTypes';


const initialState = {
  score: 0,
  bestScore: 0,
  rollBack: 2,
  hardMode: false,
  wall: Array(16).fill(0),
  initialWall: [2, 4, 8, 16, 4096, 0, 0, 32, 2048, 0, 0, 64, 1024, 512, 256, 128],
};


export const addScore = (state, payload) => ({
  ...state,
  score: state.score + payload
});

export const load = (state) => ({
  ...state,
  ...loadState()
});

export const setBestScore = (state, payload) => ({
  ...state,
  bestScore: payload > state.bestScore ? payload : state.bestScore
});

export const restart = () => ({
  ...initialState
});

export const rollBack = (state) => ({
  ...state,
  rollBack: Math.max(--state.rollBack, 0)
});

export const toggleHardMode = (state) => ({
  ...state,
  hardMode: !state.hardMode
});

export const moveUp = (state) => ({
  ...state
});

export const moveDown = (state) => ({
  ...state
});

export const moveLeft = (state) => ({
  ...state
});

export const moveRight = (state) => ({
  ...state
});

export const save = (state) => {
  saveState(state);
  return state;
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCORE: return addScore(state, action.payload);
    case BEST_SCORE: return setBestScore(state, action.payload);
    case LOAD: return load(state);
    case MOVE_DOWN: return moveDown(state, action.payload);
    case MOVE_LEFT: return moveLeft(state, action.payload);
    case MOVE_RIGHT: return moveRight(state, action.payload);
    case MOVE_UP: return moveUp(state, action.payload);
    case RESTART: return restart();
    case ROLLBACK: return rollBack(state);
    case SAVE: return save(state);
    case TOGGLE_HARDMODE: return toggleHardMode(state);
    default: return state;
  }
};
