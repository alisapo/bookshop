import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../Actions/Cart';
import ProductPage from '../Components/ProductPage';

const mapStateToProps = ({ products }, ownProps) => ({
  id: ownProps.match.params.id,
  title: products.items[ownProps.match.params.id].title,
  author: products.items[ownProps.match.params.id].author,
  image: products.items[ownProps.match.params.id].image,
  price: products.items[ownProps.match.params.id].price,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch),
}); 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);
