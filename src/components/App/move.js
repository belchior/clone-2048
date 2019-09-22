import { PLAYER_LOSE, PLAYING, } from '../../reducers/actions/types';
import {
  moveError as actionMoveError,
  moviment as actionMoviment,
  playerLose as actionPlayerLose,
  playerWon as actionPlayerWon,
} from '../../reducers/actions/actions';
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
} from '../../helpers/list';


/**
 * move :: (Function a, Object b, String c) => a -> b -> c -> undefined
 */
export const moveTo = dispatch => state => direction => () => {
  if (state.status !== PLAYING) return;

  if (playerLose(state)) return dispatch(actionPlayerLose());

  const newState = { ...state, };
  newState.wall = moveToDirection(direction)(state.wall);

  if (equals(state.wall)(newState.wall)) return moveError(dispatch);

  newState.score += calculateScore(direction)(state.wall);
  newState.wall = raffle(newState.wall);

  dispatch(actionMoviment(newState));

  if (playerWon(state.maxBlock)(newState.wall)) dispatch(actionPlayerWon());
};


/**
 * calculateScore :: (String a, Number b) => a -> [b] -> b
 */
const calculateScore = direction => (list) => {
  const pairsList = pairsFromDirection(direction)(list);
  return pairsList.reduce((score, pair) => score + pair[0] + pair[1], 0);
};


/**
 * move :: undefined -> undefined
 */
const moveError = (dispatch) => {
  dispatch(actionMoveError(true));
  setTimeout(() => dispatch(actionMoveError(false)), 300);
};


/**
 * moveTo :: (String a, Number b) => a -> [b] -> Boolean
 */
const moveToDirection = direction => (wall) => {
  switch (direction) {
    case 'bottom': return moveToBottom(wall);
    case 'left': return moveToLeft(wall);
    case 'right': return moveToRight(wall);
    case 'top': return moveToTop(wall);
    default: return wall;
  }
};


/**
 * moveToBottom :: (Number a) => [a] -> [a]
 */
const moveToBottom = (wall) => {
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
 * moveToLeft :: (Number a) => [a] -> [a]
 */
const moveToLeft = (wall) => {
  return pipe(
    toSquareMatrix,
    matrix => matrix.map(removeFalsy),
    matrix => matrix.map(sumEquals),
    matrix => matrix.map(zerosToRight),
    flatten,
  )(wall);
};


/**
 * moveToRight :: (Number a) => [a] -> [a]
 */
const moveToRight = (wall) => {
  return pipe(
    toSquareMatrix,
    matrix => matrix.map(removeFalsy),
    matrix => matrix.map(sumEqualsRight),
    matrix => matrix.map(zerosToLeft),
    flatten,
  )(wall);
};


/**
 * moveToTop :: (Number a) => [a] -> [a]
 */
const moveToTop = (wall) => {
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


/**
 * pairsFromDirection :: (String a, Number b, Array c) => a -> [b] -> [c]
 */
const pairsFromDirection = direction => (list) => {
  const matrix = contains(direction)([ 'top', 'bottom', ])
    ? pipe(toSquareMatrix, transpose)(list)
    : toSquareMatrix(list);

  return pipe(
    mtx => mtx.map(removeFalsy),
    mtx => mtx.map(pairs),
    flatten
  )(matrix);
};


/**
 * playerLose :: (String a, Object b) => a -> b -> Boolean
 */
const playerLose = (state) => {
  const pairsVertical = pairsFromDirection('top')(state.wall);
  const pairsHorizontal = pairsFromDirection('right')(state.wall);
  return (
    state.status === PLAYER_LOSE ||
    (
      state.rollback <= 0 &&
      isEmpty(pairsVertical) &&
      isEmpty(pairsHorizontal) &&
      !contains(0)(state.wall)
    )
  );
};


/**
 * playerWon :: (Number a) => a -> [a] -> Boolean
 */
const playerWon = maxBlock => wall => contains(maxBlock)(wall);


/**
 * zerosToLeft :: (Number a) => [a] -> [a]
 */
const zerosToLeft = padStart(4)(0);


/**
 * zerosToRight :: (Number a) => [a] -> [a]
 */
const zerosToRight = padEnd(4)(0);
