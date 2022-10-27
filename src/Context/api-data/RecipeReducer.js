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
      return {}
    case 'GET_BY_CATEGORIES':
      return {}
    default:
      return state
  }
}

export default recipeReducer
