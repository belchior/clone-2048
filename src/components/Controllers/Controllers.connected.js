import { connect } from 'react-redux';

import { Controllers } from './Controllers';
import { ROLLBACK, SAVE, LOAD, RESTART, TOGGLE_HARDMODE } from '../../actions/types';

export const mapStateToProps = (state) => {
  return {
    rollBack: state.rollBack,
    hardMode: state.hardMode,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    rollBackAction: () => dispatch({type: ROLLBACK}),
    saveAction: () => dispatch({type: SAVE}),
    loadAction: () => dispatch({type: LOAD}),
    restartAction: () => dispatch({type: RESTART}),
    hardModeAction: () => dispatch({type: TOGGLE_HARDMODE}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Controllers);
