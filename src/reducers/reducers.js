import {
  ADD_SCORE,
  BEST_SCORE,
  ROLLBACK,
  TOGGLE_HARDMODE,
  MOVE_UP,
  MOVE_DOWN,
  MOVE_LEFT,
  MOVE_RIGHT,
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

export const setBestScore = (state, payload) => ({
  ...state,
  bestScore: payload > state.bestScore ? payload : state.bestScore
});

export const rollBack = (state) => ({
  ...state,
  rollBack: Math.max(--state.rollBack, 0)
});

export const toggleHardMode = (state) => ({
  ...state,
  hardMode: !state.hardMode
});

export const moveUp = (state, payload) => ({
  ...state,
  hardMode: !state.hardMode
});

export const moveDown = (state, payload) => ({
  ...state,
  hardMode: !state.hardMode
});

export const moveLeft = (state, payload) => ({
  ...state,
  hardMode: !state.hardMode
});

export const moveRight = (state, payload) => ({
  ...state,
  hardMode: !state.hardMode
});

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ROLLBACK: return rollBack(state, action.payload);
    case ADD_SCORE: return addScore(state, action.payload);
    case BEST_SCORE: return setBestScore(state, action.payload);
    case TOGGLE_HARDMODE: return toggleHardMode(state, action.payload);
    case MOVE_UP: return moveUp(state, action.payload);
    case MOVE_DOWN: return moveDown(state, action.payload);
    case MOVE_LEFT: return moveLeft(state, action.payload);
    case MOVE_RIGHT: return moveRight(state, action.payload);
    default: return state;
  }
};
