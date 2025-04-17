import Recipe from "./Recipe.jsx";

function RecipeContainer({ recipes }) {
    return (
        <div>
            {recipes.map((recipe, index) => (
                <Recipe key={index} recipe={recipe} />
            ))}
        </div>
    );
}

export default RecipeContainer;