import { useState } from "react";
import {
  Heading,
  Box,
  Grid,
  Image,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";

export const RecipeListPage = ({ recipes, onSelectRecipe }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) => {
    const nameMatch = recipe.recipe.label
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const healthLabelMatch = recipe.recipe.healthLabels.some((label) =>
      label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return nameMatch || healthLabelMatch;
  });

  const isVegetarian = (recipe) => {
    return recipe.recipe.healthLabels.includes("Vegetarian");
  };

  const isVegan = (recipe) => {
    return recipe.recipe.healthLabels.includes("Vegan");
  };

  return (
    <Box p="4" bg="gray.100" minH="100vh">
      <Heading
        as="h1"
        mb="4"
        textAlign="center"
        fontSize="3xl"
        color="teal.500"
      >
        Delicious Recipes
      </Heading>
      <Input
        placeholder="Search recipes by name or health labels"
        value={searchQuery}
        onChange={handleSearchChange}
        mb="4"
      />
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {filteredRecipes.map((recipe) => (
          <Box
            key={recipe.recipe.label}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            cursor="pointer"
            onClick={() => onSelectRecipe(recipe)}
            _hover={{ shadow: "md" }}
          >
            <Image
              src={recipe.recipe.image}
              alt={recipe.recipe.label}
              maxH="200px"
              objectFit="cover"
              borderTopRadius="lg"
            />
            <Box p="6">
              <Heading as="h2" size="md" mb="2" color="teal.500">
                {recipe.recipe.label}
              </Heading>
              {isVegetarian(recipe) && (
                <Button
                  colorScheme="teal"
                  variant="solid"
                  mb="2"
                  isDisabled
                  _hover={{ cursor: "default" }}
                >
                  Vegetarian
                </Button>
              )}
              {isVegan(recipe) && (
                <Button
                  colorScheme="green"
                  variant="solid"
                  mb="2"
                  isDisabled
                  _hover={{ cursor: "default" }}
                >
                  Vegan
                </Button>
              )}
              <Text color="gray.600" mb="2">
                <Text as="span" fontWeight="bold" color="teal.500">
                  Cautions:{" "}
                </Text>
                {recipe.recipe.cautions.join(", ")}
              </Text>
              <Text color="gray.600" mb="2">
                <Text as="span" fontWeight="bold" color="teal.500">
                  Meal Type:{" "}
                </Text>
                {recipe.recipe.mealType}
              </Text>
              <Text color="gray.600" mb="2">
                <Text as="span" fontWeight="bold" color="teal.500">
                  Dish Type:{" "}
                </Text>
                {recipe.recipe.dishType}
              </Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};
