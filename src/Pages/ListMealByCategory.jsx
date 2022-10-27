import { useEffect, useContext } from 'react'
import { get_Recipies_By_Category } from '../Context/api-data/RecipeActions'
import RecipeContext from '../Context/api-data/RecipeContext'
import { useParams } from 'react-router-dom'
import SpinnerLoading from '../Components/SpinnerLoading'
import { Link } from 'react-router-dom'
import CardRecipe from '../Components/CardRecipe'

function ListMealByCategory() {
  const { loading, recipies_by_category, dispatch } = useContext(RecipeContext)
  const params = useParams()
  useEffect(() => {
    const get_Recipies = async () => {
      dispatch({ type: 'SET_LOADING' })
      const data = await get_Recipies_By_Category(params.category)
      dispatch({ type: 'GET_BY_CATEGORIES', payload: data })
    }
    get_Recipies()
  }, [params.category, dispatch])
  return (
    <div className="container">
      <div className="row gy-5 my-5 ">
        {/**
         * testing if the user enter text in field
         */}
        {loading && <SpinnerLoading />}
        {/**
         * testing if api response is null
         */}
        {recipies_by_category == null && (
          <p className="col-12 justify-content-center align-items-center text-center">
            Nothing found !!
          </p>
        )}
        {/**
         * testing if api response is not null
         */}
        {!loading &&
          recipies_by_category != null &&
          recipies_by_category.map((recipe) => {
            return (
              <div
                className="col-lg-4 col-md-6 col-sm-12 p-3"
                key={recipe.idMeal}
              >
                <Link to={`/recipe/${recipe.idMeal}`}>
                  <CardRecipe recipe={recipe} />
                </Link>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default ListMealByCategory
