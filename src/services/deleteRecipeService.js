import axios from "axios";
export const postRecipeService = (recipe) =>
  axios.delete(`https://api.airtable.com/v0/appcWXfVQzYfiEUpm/"${recipe}"`);
