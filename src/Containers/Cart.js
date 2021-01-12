import Cart from '../Components/Cart';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../Actions/Cart';

const mapStateToProps = ({ cart }) => ({
  items: cart.items,
  total: cart.total,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
