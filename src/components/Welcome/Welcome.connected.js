import { connect } from 'react-redux';

import { Welcome } from './Welcome';
import { start as startAction } from '../../reducers/actions/actions';

export const mapStateToProps = (state) => ({
  hardMode: state.hardMode,
  wall: state.welcomeWall,
});

export const mapDispatchToProps = (dispatch) => ({
  button: {
    text: 'Start',
    action: () => dispatch(startAction()),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
