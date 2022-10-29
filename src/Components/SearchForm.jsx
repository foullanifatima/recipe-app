import { useState, useContext } from 'react'
import RecipeContext from '../Context/api-data/RecipeContext'
import { get_Recipe_By_Name } from '../Context/api-data/RecipeActions'

function SearchForm() {
  const { state, dispatch } = useContext(RecipeContext)
  const [text, setText] = useState('')
  const handleChange = (e) => setText(e.target.value)
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (text == '') {
      alert('please make sure to enter content')
    } else {
      dispatch({ type: 'SET_LOADING' })
      const data = await get_Recipe_By_Name(text)
      dispatch({ type: 'GET_BY_NAME', payload: data })

      setText('')
    }
  }
  return (
    <div className="container my-5 ">
      <form onSubmit={handleSubmit}>
        <div className="form-group row align-items-center justify-content-center ">
          <div class="col-sm-7 align-items-center justify-content-center">
            <input
              type="text"
              class="form-control"
              id="text"
              placeholder="Your favorite dish"
              value={text}
              onChange={handleChange}
            />
          </div>
          <div className="col-sm-2 d-flex align-items-center justify-content-center">
            <button className="button m-2" type="submit" disabled={!text}>
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchForm
