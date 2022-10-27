import CardRecipe from '../Components/CardRecipe'
import { get_Recipe_By_Name } from '../Context/api-data/RecipeActions'
import { useEffect, useContext } from 'react'
import RecipeContext from '../Context/api-data/RecipeContext'
import SearchForm from '../Components/SearchForm'
import SpinnerLoading from '../Components/SpinnerLoading'
import { Link } from 'react-router-dom'
function Home() {
  const { loading, recipies } = useContext(RecipeContext)

  return (
    <div className="container my-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-7 col-md-12 col-sm-12 text-center">
          <h1>Select Your favourite special dish and make your day happy...</h1>

          <p>
            You can enjoy your favorite meal by searching online and you will
            get what you want.
          </p>
        </div>
      </div>

      <hr></hr>
      <SearchForm />
      <div className="row gy-5 my-5 ">
        {/**
         * testing if the user enter text in field
         */}
        {loading && <SpinnerLoading />}
        {/**
         * testing if api response is null
         */}
        {recipies == null && (
          <p className="col-12 justify-content-center align-items-center text-center">
            Nothing found !!
          </p>
        )}
        {/**
         * testing if api response is not null
         */}
        {!loading &&
          recipies != null &&
          recipies.map((recipe) => {
            return (
              <div
                className="col-lg-4 col-md-6 col-sm-12 p-3"
                key={recipe.idMeal}
              >
                <Link to={`recipe/${recipe.idMeal}`}>
                  <CardRecipe recipe={recipe} />
                </Link>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Home
