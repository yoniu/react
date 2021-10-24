import Count from "../../components/Count";
import {connect} from 'react-redux'

import { incrementAction, decrementAction, incrementActionAsync } from '../../redux/actions'

function mapStateToProps (state) {
  return {
    count: state
  }
}

function mapDispatchToProps (dispatch) {
  return {
    handleIncrement: value => dispatch(incrementAction(value)),
    handleDecrement: value => dispatch(decrementAction(value)),
    handleIncrementAsync: (value, delay) => dispatch(incrementActionAsync(value, delay))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)