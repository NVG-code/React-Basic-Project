import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { data } from "./utils/data";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleDeselectRecipe = () => {
    setSelectedRecipe(null);
  };

  return (
    <div>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} onDeselect={handleDeselectRecipe} />
      ) : (
        <RecipeListPage
          recipes={data.hits}
          onSelectRecipe={handleRecipeSelect}
        />
      )}
    </div>
  );
};
