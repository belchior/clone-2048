import { store } from '../store';
import {
  ADD_SCORE,
  ADD_HISTORY,
  BEST_SCORE,
  MOVE_ERROR,
  PLAYER_LOSE,
  PLAYER_WON,
  PLAYING,
  SAVE_MOVIMENT,
  SET_WALL,
} from './types';
import {
  contains,
  equals,
  flatten,
  isEmpty,
  padEnd,
  padStart,
  pairs,
  pipe,
  raffle,
  removeFalsy,
  sumEquals,
  sumEqualsRight,
  toSquareMatrix,
  transpose,
} from '../helpers/list';

const dispatch = store.dispatch;
const zerosToLeft = padStart(4)(0);
const zerosToRight = padEnd(4)(0);


/**
  pairsFromDirection :: (String a, Number b, Array c) => a -> [b] -> [c]
*/
const pairsFromDirection = direction => list => {
  const matrix = contains(direction)(['top', 'bottom'])
    ? pipe(toSquareMatrix, transpose)(list)
    : toSquareMatrix(list);

  return pipe(
    mtx => mtx.map(removeFalsy),
    mtx => mtx.map(pairs),
    flatten
  )(matrix);
};


/**
  calculateScore :: (String a, Number b) => a -> [b] -> b
*/
const calculateScore = direction => list => {
  const pairsList = pairsFromDirection(direction)(list);
  return pairsList.reduce((score, pair) => score + pair[0] + pair[1], 0);
};


/**
  playerLose :: (String a, Object b) => a -> b -> Boolean
*/
const playerLose = state => {
  const pairsVertical = pairsFromDirection('top')(state.wall);
  const pairsHorizontal = pairsFromDirection('right')(state.wall);
  return (
    state.rollBack <= 0 &&
    isEmpty(pairsVertical) &&
    isEmpty(pairsHorizontal) &&
    !contains(0)(state.wall)
  );
};


/**
  playerWon :: (Number a) => a -> [a] -> Boolean
*/
const playerWon = maxBlock => wall => contains(maxBlock)(wall);


/**
  move :: (String a) => a -> undefined
*/
export const move = direction => () => {
  const state = store.getState();

  if (state.status !== PLAYING) return;

  if (playerLose(state)) return dispatch({type: PLAYER_LOSE});

  const movedWall = moveTo(direction)(state.wall);
  if (equals(state.wall)(movedWall)) return moveError();

  const score = calculateScore(direction)(state.wall);
  const wall = raffle(movedWall);

  dispatch({type: ADD_SCORE, payload: score});
  dispatch({type: BEST_SCORE});
  dispatch({type: SET_WALL, payload: wall});
  dispatch({type: ADD_HISTORY, payload: wall});
  dispatch({type: SAVE_MOVIMENT});

  if (playerWon(state.maxBlock)(wall)) dispatch({type: PLAYER_WON});
};


/**
  move :: undefined -> undefined
*/
export const moveError = () => {
  dispatch({ type: MOVE_ERROR, payload: true });
  setTimeout(() => dispatch({ type: MOVE_ERROR, payload: false }), 300);
};


/**
  moveTo :: (String a, Number b) => a -> [b] -> Boolean
*/
const moveTo = direction => wall => {
  switch (direction) {
    case 'bottom': return moveToBottom(wall);
    case 'left': return moveToLeft(wall);
    case 'right': return moveToRight(wall);
    case 'top': return moveToTop(wall);
    default: return wall;
  }
};


/**
  moveToBottom :: (Number a) => [a] -> [a]
*/
const moveToBottom = wall => {
  return pipe(
    toSquareMatrix,
    transpose,
    matrix => matrix.map(removeFalsy),
    matrix => matrix.map(sumEqualsRight),
    matrix => matrix.map(zerosToLeft),
    transpose,
    flatten,
  )(wall);
};


/**
  moveToLeft :: (Number a) => [a] -> [a]
*/
const moveToLeft = wall => {
  return pipe(
    toSquareMatrix,
    matrix => matrix.map(removeFalsy),
    matrix => matrix.map(sumEquals),
    matrix => matrix.map(zerosToRight),
    flatten,
  )(wall);
};


/**
  moveToRight :: (Number a) => [a] -> [a]
*/
const moveToRight = wall => {
  return pipe(
    toSquareMatrix,
    matrix => matrix.map(removeFalsy),
    matrix => matrix.map(sumEqualsRight),
    matrix => matrix.map(zerosToLeft),
    flatten,
  )(wall);
};


/**
  moveToTop :: (Number a) => [a] -> [a]
*/
const moveToTop = wall => {
  return pipe(
    toSquareMatrix,
    transpose,
    matrix => matrix.map(removeFalsy),
    matrix => matrix.map(sumEquals),
    matrix => matrix.map(zerosToRight),
    transpose,
    flatten,
  )(wall);
};
