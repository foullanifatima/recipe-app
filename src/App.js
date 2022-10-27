import { Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import { RecipeProvider } from './Context/api-data/RecipeContext'
import RecipePage from './Pages/RecipePage'
import Header from './Components/Header'
import Categories from './Pages/Categories'
import ListMealByCategory from './Pages/ListMealByCategory'
function App() {
  return (
    <RecipeProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="/categories/" element={<Categories />} />
        <Route path="categories/:category" element={<ListMealByCategory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </RecipeProvider>
  )
}

export default App
