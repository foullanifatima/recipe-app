import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RecipeContext from '../Context/api-data/RecipeContext'
import { get_Recipe_By_ID } from '../Context/api-data/RecipeActions'
import SpinnerLoading from '../Components/SpinnerLoading'

function RecipePage() {
  const { loading, recipe, dispatch } = useContext(RecipeContext)
  const params = useParams()
  /**
   * dispatch the specific recipe by id
   */
  useEffect(() => {
    const get_Recipe_Content = async () => {
      dispatch({ type: 'SET_LOADING' })
      const data = await get_Recipe_By_ID(params.id)
      dispatch({ type: 'GET_BY_ID', payload: data[0] })
    }
    get_Recipe_Content()
  }, [params.id, dispatch])

  /**
   * distracting measures and ingredients to show them
   */
  let measures = []
  const getMeasures = () => {
    for (let i = 1; i <= 20; i++) {
      if (recipe[`strMeasure${i}`] !== '')
        measures = [
          ...measures,
          recipe[`strMeasure${i}`] + '   ' + recipe[`strIngredient${i}`],
        ]
      else break
    }
  }

  return (
    <div className="container ">
      {loading && <SpinnerLoading />}
      {!loading && (
        <div className="conatiner m-5 p-1 justify-content-center align-items-center">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-md-12">
              <h1>{recipe.strMeal} </h1>
              <p>{recipe.strCategory}</p>
              <p> Area : {recipe.strArea}</p>
            </div>
            <div className="col-lg-6 col-md-12">
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="img-fluid image-recipe-page"
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <h1>Ingredients :</h1>
              <div className="px-2">
                {recipe[`strIngredient1`] && getMeasures()}
                {measures.map((measure, index) => (
                  <p key={index}>{measure}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="row mt-5 justify-content-center align-items-center ">
            <div className="col-12">
              <h1>Instructions :</h1>
              {recipe.strInstructions &&
                recipe.strInstructions.split('\n').map((i, index) => (
                  <p className="px-2" key={index}>
                    {i}
                  </p>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default RecipePage
