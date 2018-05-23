import { connect } from 'react-redux';
import { Wall } from './Wall';

export const mapStateToProps = (state) => {
  return {
    hardMode: state.hardMode,
    wall: state.wall,
    moveError: state.moveError,
  };
};

export const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Wall);
