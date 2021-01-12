import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemsActions from '../Actions/Products';
import App from '../Components/App';

const mapStateToProps = ({ products }) => ({ 
  products: products.items,
  isReady: products.isReady,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(itemsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);