import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../Actions/Cart';
import ProductCard from '../Components/ProductCard';

const mapStateToProps = ({ cart }) => ({
  addedCount: 0,
}); 

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCard);
