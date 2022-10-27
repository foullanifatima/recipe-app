/**
 * Get all data (Recipes) from API
 */
/**
 * ?Todo add https:// in .env file so that it works fine
 */
export const get_Recipe_By_Name = async (query) => {
  const response = fetch(
    'https://www.themealdb.com/api/json/v1/1/search.php?s=' + query
  )

  const data = (await response)
    .json()
    .then((data) => {
      return data.meals
    })
    .catch((err) => alert(err))

  return data
}

export const get_Recipe_By_ID = async (id) => {
  const response = fetch(
    'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id
  )

  const data = (await response)
    .json()
    .then((data) => {
      return data.meals
    })
    .catch((err) => alert(err))

  return data
}

export const get_All_Categories = async () => {
  const response = fetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php'
  )

  const data = (await response)
    .json()
    .then((data) => {
      return data.categories
    })
    .catch((err) => alert(err))

  return data
}
export const get_Recipies_By_Category = async (query) => {
  const response = fetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + query
  )

  const data = (await response)
    .json()
    .then((data) => {
      return data.meals
    })
    .catch((err) => alert(err))

  return data
}
