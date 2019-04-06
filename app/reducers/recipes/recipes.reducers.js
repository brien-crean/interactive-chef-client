const { GET_RECIPES, SET_RECIPES } = require("../../lib/constants").default;

const initialState = {
  recipes: [],
  recipesLoading: false
};

export default function recipesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipesLoading: true
      };

    case SET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        recipesLoading: false
      };
  }

  return state;
}
