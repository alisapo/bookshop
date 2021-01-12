import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../Actions/Cart';
import Header from '../Components/Header';

const mapStateToProps = ({ cart })=> ({
  count: cart.items.reduce((total, item) => total + item.quantity, 0),
  summary: cart.total,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
