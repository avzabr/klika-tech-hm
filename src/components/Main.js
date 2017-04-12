import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/filter';
import App from './App';

function mapStateToProps(state) {
  return {
    songs: state.songs,
    filter: state.filter
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Main = connect(mapStateToProps, mapDispachToProps)(App);

export default Main;