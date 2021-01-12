import Order from '../Components/Order';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as orderActions from '../Actions/Order';

const mapStateToProps = ({ cart }) => ({
  items: cart.items,
  total: cart.total,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(orderActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);
