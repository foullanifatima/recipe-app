const recipeReducer = (state, action) => {
  switch (action.type) {
    case 'GET_BY_NAME':
      return {
        ...state,
        recipies: action.payload,
        loading: false,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'GET_BY_ID':
      return {
        ...state,
        recipe: action.payload,
        loading: false,
      }
    case 'GET_ALL_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
        loading: false,
      }
    case 'GET_BY_CATEGORIES':
      return {
        ...state,
        recipies_by_category: action.payload,
        loading: false,
      }
    default:
      return state
  }
}

export default recipeReducer
