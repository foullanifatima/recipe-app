function CardRecipe({ recipe }) {
  return (
    <div className="card-recipe">
      <img src={recipe.strMealThumb} alt="" className="img-recipe" />
      <div className="card-content">
        <h3 class="title">{recipe.strMeal}</h3>
        <h4 className="category">{recipe.strCategory}</h4>
        <p>{recipe.strArea}</p>
      </div>
    </div>
  )
}

export default CardRecipe
