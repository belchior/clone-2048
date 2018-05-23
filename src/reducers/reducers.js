import { saveState, loadState } from '../localStorage';
import { last } from '../helpers/list';
import {
  ADD_SCORE,
  LOAD,
  BEST_SCORE,
  MOVE_ERROR,
  RESTART,
  ROLLBACK,
  SAVE,
  SET_WALL,
  TOGGLE_HARDMODE,
} from '../actions/types';


const initialState = {
  score: 0,
  bestScore: 0,
  rollBack: 2,
  hardMode: false,
  moveError: false,
  wall: [
    2, 2, 2, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
  ],
  history: [],
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

export const moveError = (state, error) => ({
  ...state,
  moveError: error
});

export const restart = () => ({
  ...initialState
});

export const rollBack = (state) => ({
  ...state,
  rollBack: Math.max(--state.rollBack, 0)
});

export const save = (state) => {
  saveState(state);
  return state;
};

export const saveHistory = (state, wall) => {
  return {
    ...state,
    history: [ last(state.history), wall ]
  };
};

export const setBestScore = (state, payload) => ({
  ...state,
  bestScore: payload > state.bestScore ? payload : state.bestScore
});

export const setWall = (state, wall) => ({
  ...state,
  wall: wall
});

export const toggleHardMode = (state) => ({
  ...state,
  hardMode: !state.hardMode
});

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCORE: return addScore(state, action.payload);
    case BEST_SCORE: return setBestScore(state, action.payload);
    case LOAD: return load(state);
    case MOVE_ERROR: return moveError(state, action.payload);
    case SET_WALL: return setWall(state, action.payload);
    case RESTART: return restart();
    case ROLLBACK: return rollBack(state);
    case SAVE: return save(state);
    case TOGGLE_HARDMODE: return toggleHardMode(state);
    default: return state;
  }
};
