import { connect } from 'react-redux';

import { Controllers } from './Controllers';
import { ROLLBACK, RESTART, TOGGLE_HARDMODE } from '../../reducers/actions/types';

export const mapStateToProps = (state) => {
  return {
    rollback: state.rollback,
    hardMode: state.hardMode,
    status: state.status,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    rollbackAction: () => dispatch({type: ROLLBACK}),
    restartAction: () => dispatch({type: RESTART}),
    hardModeAction: () => dispatch({type: TOGGLE_HARDMODE}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Controllers);
