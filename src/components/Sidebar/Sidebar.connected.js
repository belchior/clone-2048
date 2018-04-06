import { connect } from 'react-redux';
import { Sidebar } from './Sidebar';

export const mapStateToProps = (state) => {
  return {
    score: state.score,
    bestScore: state.bestScore,
  };
};

export const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
