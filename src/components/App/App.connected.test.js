import { mapStateToProps } from './index';
import { initialState } from '../../reducers';

it('mapStateToProps should be a function', () => {
  expect(typeof mapStateToProps === 'function').toBe(true);
});

it('mapStateToProps should return un Object', () => {
  const props = mapStateToProps(initialState);
  expect(typeof props === 'object').toBe(true);
});

it('mapStateToProps should return un Object that contains the maxBlock key', () => {
  const props = mapStateToProps(initialState);
  expect(props.state).toHaveProperty('maxBlock');
  expect(typeof props.state.maxBlock).toBe('number');
});

it('mapStateToProps should return un Object that contains the rollback key', () => {
  const props = mapStateToProps(initialState);
  expect(props.state).toHaveProperty('rollback');
  expect(typeof props.state.rollback).toBe('number');
});

it('mapStateToProps should return un Object that contains the status key', () => {
  const props = mapStateToProps(initialState);
  expect(props.state).toHaveProperty('status');
  expect(typeof props.state.status).toBe('string');
});

it('mapStateToProps should return un Object that contains the wall key', () => {
  const props = mapStateToProps(initialState);
  expect(props.state).toHaveProperty('wall');
  expect(Array.isArray(props.state.wall)).toBe(true);
});
