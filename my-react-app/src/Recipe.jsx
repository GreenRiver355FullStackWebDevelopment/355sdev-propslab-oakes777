import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Button,
  Collapse,
  Box,
} from "@mui/material";

function Recipe({ recipe }) {
  const [showGlaze, setShowGlaze] = useState(false);

  //choose title color based on bread type
  const getTitleColor = () => {
    const name = recipe.name.toLowerCase();
    //make banana bread title bright yellow, pumpkin bread title orange, nut bread title brown and zucchini bread title green
    if (name.includes("banana")) return "#fdd835";
    if (name.includes("pumpkin")) return "#fb8c00";
    if (name.includes("nut")) return "#8d6e63";
    if (name.includes("zucchini")) return "#43a047";
    //fallback
    return "inherit";
  };

  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" sx={{ color: getTitleColor() }}>
          {recipe.name}
        </Typography>

        <Typography variant="h6">Ingredients:</Typography>
        <List>
          {recipe.ingredients.map((item, i) => (
            <ListItem key={i}>{item}</ListItem>
          ))}
        </List>

        <Typography variant="h6">Instructions:</Typography>
        <Box component="ol" sx={{ pl: 2 }}>
          {recipe.instructions.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </Box>

        {recipe.optionalGlaze && (
          <>
            <Button
              variant="outlined"
              onClick={() => setShowGlaze(!showGlaze)}
              sx={{ marginTop: 2 }}
            >
              {showGlaze ? "Hide Glaze" : "Show Glaze"}
            </Button>

            <Collapse in={showGlaze}>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">
                  Optional: {recipe.optionalGlaze.name}
                </Typography>
                <List>
                  {recipe.optionalGlaze.ingredients.map((item, i) => (
                    <ListItem key={i}>{item}</ListItem>
                  ))}
                </List>
                <Box component="ol" sx={{ pl: 2 }}>
                  {recipe.optionalGlaze.instructions.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </Box>
              </Box>
            </Collapse>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default Recipe;
