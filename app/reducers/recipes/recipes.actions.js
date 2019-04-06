import config from "../../lib/config";

const { GET_RECIPES, SET_RECIPES } = require("../../lib/constants").default;

export default function getRecipes() {
  return (dispatch) => {
    dispatch({ type: GET_RECIPES });
    fetch(config.ROOT_URL + '/recipes.json')
      .then(response => response.json())
      .then(recipes => {
        dispatch({ type: SET_RECIPES, payload: recipes });
      })
      .done();
  };
}
