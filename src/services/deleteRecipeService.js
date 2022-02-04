import axios from "axios";
export const deleteRecipeService = (recipe) =>
  axios.delete(
    `https://api.airtable.com/v0/appcWXfVQzYfiEUpm/recipes/${recipe}`
  );
