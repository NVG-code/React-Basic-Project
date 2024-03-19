import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  List,
  ListItem,
  Button,
  Grid,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, onDeselect }) => {
  const {
    label,
    image,
    mealType,
    dishType,
    totalTime,
    dietLabels,
    healthLabels,
    cautions,
    ingredients,
    yield: servings,
    totalNutrients,
  } = recipe.recipe;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      textAlign="left"
      px="4"
      bg="gray.100"
    >
      <Box maxWidth="800px" width="100%">
        <Box mb="4" textAlign="center">
          <Button onClick={onDeselect} colorScheme="teal" mb="2">
            Back to Recipes
          </Button>{" "}
          <Heading as="h1" mb="4" color="teal.500">
            {label}
          </Heading>
          <Image
            src={image}
            alt={label}
            maxH="400px"
            objectFit="cover"
            mb="4"
            mx="auto"
          />
        </Box>

        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
          <Box>
            <Heading as="h2" size="md" mb="2" color="teal.500">
              Meal Type:
            </Heading>
            <Text>{mealType && mealType.join(", ")}</Text>
          </Box>

          <Box>
            <Heading as="h2" size="md" mb="2" color="teal.500">
              Dish Type:
            </Heading>
            <Text>{dishType && dishType.join(", ")}</Text>
          </Box>

          <Box>
            <Heading as="h2" size="md" mb="2" color="teal.500">
              Total Cooking Time:
            </Heading>
            <Text>{totalTime} minutes</Text>
          </Box>

          {dietLabels && (
            <Box>
              <Heading as="h2" size="md" mb="2" color="teal.500">
                Diet Label:
              </Heading>
              <Text>{dietLabels.join(", ")}</Text>
            </Box>
          )}

          <Divider my="4" />

          <Box>
            <Heading as="h2" size="md" mb="2" color="teal.500">
              Health Labels
            </Heading>
            <List mb="4">
              {healthLabels &&
                healthLabels.map((label, index) => (
                  <ListItem key={index}>{label}</ListItem>
                ))}
            </List>
          </Box>

          {cautions && (
            <Box>
              <Heading as="h2" size="md" mb="2" color="teal.500">
                Cautions
              </Heading>
              <List mb="4">
                {cautions.map((caution, index) => (
                  <ListItem key={index}>{caution}</ListItem>
                ))}
              </List>
            </Box>
          )}

          <Divider my="4" />

          <Box>
            <Heading as="h2" size="md" mb="2" color="teal.500">
              Ingredients
            </Heading>
            <List mb="4">
              {ingredients &&
                ingredients.map((ingredient, index) => (
                  <ListItem key={index}>{ingredient.text}</ListItem>
                ))}
            </List>
          </Box>

          <Box>
            <Text mb="4" color="teal.500">
              Servings: {servings}
            </Text>
          </Box>

          <Divider my="4" />

          <Box>
            <Heading as="h2" size="md" mb="2" color="teal.500">
              Total Nutrients
            </Heading>
            {totalNutrients && (
              <>
                <Text>
                  Energy: {totalNutrients.ENERC_KCAL.quantity}{" "}
                  {totalNutrients.ENERC_KCAL.unit}
                </Text>
                <Text>
                  Protein: {totalNutrients.PROCNT.quantity}{" "}
                  {totalNutrients.PROCNT.unit}
                </Text>
                <Text>
                  Fat: {totalNutrients.FAT.quantity} {totalNutrients.FAT.unit}
                </Text>
                <Text>
                  Carbs: {totalNutrients.CHOCDF.quantity}{" "}
                  {totalNutrients.CHOCDF.unit}
                </Text>
                <Text>
                  Cholesterol: {totalNutrients.CHOLE.quantity}{" "}
                  {totalNutrients.CHOLE.unit}
                </Text>
                <Text>
                  Sodium: {totalNutrients.NA.quantity} {totalNutrients.NA.unit}
                </Text>
              </>
            )}
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};
