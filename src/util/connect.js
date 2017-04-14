import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actionCreators from "../actions/filter";

function mapStateToProps(state) {
    return {
        state
    }
}

function mapDispachToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}


export default connect(mapStateToProps, mapDispachToProps);