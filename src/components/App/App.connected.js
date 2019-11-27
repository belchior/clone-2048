import { connect } from 'react-redux';

import { App } from './App';
import { moveTo } from './move';
import { restart as restartAction } from '../../reducers/actions/actions';

export const mapStateToProps = state => ({
  bestScore: state.bestScore,
  hardMode: state.hardMode,
  maxBlock: state.maxBlock,
  rollback: state.rollback,
  score: state.score,
  status: state.status,
  wall: state.wall,
  welcomeWall: state.welcomeWall,
});

export const mapDispatchToProps = dispatch => ({
  moveTo: moveTo(dispatch),
  restartAction: () => dispatch(restartAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
