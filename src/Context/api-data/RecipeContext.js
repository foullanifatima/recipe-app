import { createContext, useReducer } from 'react'
import recipeReducer from './RecipeReducer'

const RecipeContext = createContext()

export const RecipeProvider = ({ children }) => {
  const initialState = {
    recipies: [],
    recipe: {},
    categories: [],
    recipies_by_category: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(recipeReducer, initialState)
  return (
    <RecipeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  )
}

export default RecipeContext
