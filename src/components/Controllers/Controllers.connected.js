import { connect, } from 'react-redux';

import { Controllers, } from './Controllers';
import { ROLLBACK, RESTART, TOGGLE_HARDMODE, } from '../../reducers/actions/types';

export const mapStateToProps = (state) => {
  return {
    hardMode: state.hardMode,
    rollback: state.rollback,
    status: state.status,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    hardModeAction: () => dispatch({ type: TOGGLE_HARDMODE, }),
    restartAction: () => dispatch({ type: RESTART, }),
    rollbackAction: () => dispatch({ type: ROLLBACK, }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Controllers);
