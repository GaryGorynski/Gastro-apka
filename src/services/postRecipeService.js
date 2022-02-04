import axios from "axios";

export const postRecipesService = (data) =>
  axios.post("https://api.airtable.com/v0/appcWXfVQzYfiEUpm/recipes", data, {
    headers: {
      Authorization: "Bearer keynWocdalGuKcaAt",
      "Content-Type": "application/json",
    },
  });
