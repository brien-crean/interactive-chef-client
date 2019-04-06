import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RecipeDetail from '../components/RecipeDetail';

function mapStateToProps(state) {
  return {
    recipes: state.recipes.recipes
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);
