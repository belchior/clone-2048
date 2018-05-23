import { store } from '../store';
import { MOVE_ERROR, SET_WALL } from './types';
import {
  equals,
  flatten,
  padEnd,
  padStart,
  pipe,
  raffle,
  removeFalsy,
  sumEquals,
  toSquareMatrix,
  transpose,
} from '../helpers/list';

const dispatch = store.dispatch;
const zerosToLeft = padStart(4)(0);
const zerosToRight = padEnd(4)(0);

export const moveError = () => {
  dispatch({ type: MOVE_ERROR, payload: true });
  setTimeout(() => dispatch({ type: MOVE_ERROR, payload: false }), 500);
};

export const moveToBottom = () => {
  const state = store.getState();
  const movedWall = pipe(
    toSquareMatrix,
    transpose,
    matrix => matrix.map(removeFalsy),
    matrix => matrix.map(sumEquals),
    matrix => matrix.map(zerosToLeft),
    transpose,
    flatten,
  )(state.wall);


  equals(state.wall)(movedWall)
    ? moveError()
    : dispatch({type: SET_WALL, payload: raffle(movedWall)});
};

export const moveToLeft = () => {
  const state = store.getState();
  const movedWall = pipe(
    toSquareMatrix,
		matrix => matrix.map(removeFalsy),
	  matrix => matrix.map(sumEquals),
	  matrix => matrix.map(zerosToRight),
    flatten,
  )(state.wall);

  equals(state.wall)(movedWall)
    ? moveError()
    : dispatch({type: SET_WALL, payload: raffle(movedWall)});
};

export const moveToRight = () => {
  const state = store.getState();
  const movedWall = pipe(
    toSquareMatrix,
    matrix => matrix.map(removeFalsy),
    matrix => matrix.map(sumEquals),
    matrix => matrix.map(zerosToLeft),
    flatten,
  )(state.wall);

  equals(state.wall)(movedWall)
    ? moveError()
    : dispatch({type: SET_WALL, payload: raffle(movedWall)});
};

export const moveToTop = () => {
  const state = store.getState();
  const movedWall = pipe(
    toSquareMatrix,
    transpose,
    matrix => matrix.map(removeFalsy),
    matrix => matrix.map(sumEquals),
    matrix => matrix.map(zerosToRight),
    transpose,
    flatten,
    raffle,
  )(state.wall);

  equals(state.wall)(movedWall)
    ? moveError()
    : dispatch({type: SET_WALL, payload: raffle(movedWall)});
};
