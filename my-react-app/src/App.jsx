import { recipes } from "./data/data.js";
import RecipeContainer from "./RecipeContainer.jsx";

function App() {
  return (
    <>
    <h1>Family Recipes</h1>
    <RecipeContainer recipes={recipes} />
    </>
  )
}

export default App
