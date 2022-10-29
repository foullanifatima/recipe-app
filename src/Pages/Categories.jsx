import { useEffect, useContext } from 'react'
import { get_All_Categories } from '../Context/api-data/RecipeActions'
import RecipeContext from '../Context/api-data/RecipeContext'
import SpinnerLoading from '../Components/SpinnerLoading'
import CardCategory from '../Components/CardCategory'
import { Link } from 'react-router-dom'

function Categories() {
  const { loading, categories, dispatch } = useContext(RecipeContext)
  useEffect(() => {
    const get_Categories = async () => {
      dispatch({ type: 'SET_LOADING' })
      const data = await get_All_Categories()
      dispatch({ type: 'GET_ALL_CATEGORIES', payload: data })
    }
    get_Categories()
  }, [dispatch])
  return (
    <div className="container">
      <div className="row gy-5 my-5 ">
        {loading && <SpinnerLoading />}

        {categories == null && (
          <p className="col-12 justify-content-center align-items-center text-center">
            Nothing found !!
          </p>
        )}
        {/**
         * testing if api response is not null
         */}
        {!loading &&
          categories != null &&
          categories.map((category) => {
            return (
              <div
                className="col-lg-4 col-md-6 col-sm-12 p-3"
                key={category.idCategory}
              >
                <Link to={`${category.strCategory}`}>
                  <CardCategory category={category} />
                </Link>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Categories
