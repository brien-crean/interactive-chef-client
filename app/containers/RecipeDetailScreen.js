import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RecipeDetail from '../components/RecipeDetail';

function mapStateToProps(state) {
  return {
    steps: state.recipes.steps
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);
