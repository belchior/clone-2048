import { connect } from 'react-redux';

import { Sidebar } from './Sidebar';

export const mapStateToProps = (state) => {
  return {
    bestScore: state.bestScore,
    score: state.score,
  };
};

export const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
