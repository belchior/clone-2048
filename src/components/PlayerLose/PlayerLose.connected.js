import { connect } from 'react-redux';

import { PlayerLose } from './PlayerLose';
import { restart as restartAction } from '../../reducers/actions/actions';

export const mapStateToProps = (state) => ({
  bestScore: state.bestScore,
  hardMode: state.hardMode,
  score: state.score,
  wall: state.welcomeWall,
});

export const mapDispatchToProps = (dispatch) => ({
  button: {
    text: 'Try Again',
    action: () => dispatch(restartAction()),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerLose);
