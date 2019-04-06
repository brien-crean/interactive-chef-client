import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RecipeList from '../components/RecipeList';
import getRecipes from '../reducers/recipes/recipes.actions'

function mapStateToProps(state) {
  return {
    recipes: state.recipes.recipes,
    recipesLoading: state.recipes.recipesLoading
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getRecipes: getRecipes,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
