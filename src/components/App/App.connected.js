import { connect } from 'react-redux';
import { App } from './App';

export const mapStateToProps = state => ({ state: state });

export default connect(mapStateToProps)(App);
