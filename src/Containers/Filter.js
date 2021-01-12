import Categories from '../Components/Categories';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as categoryActions from '../Actions/Filter';

const mapStateToProps = ({ products }) => ({
  filterBy: products.filterBy
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(categoryActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
