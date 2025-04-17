import { Card, CardContent, Typography, List, ListItem } from "@mui/material";

function Recipe({ recipe }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5">{recipe.name}</Typography>
        <Typography variant="h6">Ingredients:</Typography>
        <List>
          {recipe.ingredients.map((item, i) => (
            <ListItem key={i}>{item}</ListItem>
          ))}
        </List>
        <Typography variant="h6">Instructions:</Typography>
        <ol>
          {recipe.instructions.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>

        {recipe.optionalGlaze && (
          <>
            <Typography variant="h6">
              Optional: {recipe.optionalGlaze.name}
            </Typography>
            <List>
              {recipe.optionalGlaze.ingredients.map((item, i) => (
                <ListItem key={i}>{item}</ListItem>
              ))}
            </List>
            <ol>
              {recipe.optionalGlaze.instructions.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default Recipe;
