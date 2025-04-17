import { recipes } from "./data/data.js";
import RecipeContainer from "./RecipeContainer.jsx";
import { Typography } from "@mui/material";

function App() {
  return (
    <>
      <Typography variant="h4" color="primary" gutterBottom>
        Family Recipes
      </Typography>
      <RecipeContainer recipes={recipes} />
    </>
  );
}

export default App;
