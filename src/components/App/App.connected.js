import { connect } from 'react-redux';
import { App } from './App';

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

export default connect(mapStateToProps)(App);
