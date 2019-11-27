import { connect } from 'react-redux';

import { Wall } from './Wall';

export const mapStateToProps = (state) => {
  return {
    hardMode: state.hardMode,
    moveError: state.moveError,
    wall: state.wall,
  };
};

export const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Wall);
