import { combineReducers } from 'redux';
import recipes from './recipes/recipes.reducers';

export default (rootReducer = combineReducers({
  recipes
}));
