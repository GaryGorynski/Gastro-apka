import axios from "axios";

export const fetchRecipes = (data) =>
  axios.get(
    `https://api.airtable.com/v0/appcWXfVQzYfiEUpm/recipes?filterByFormula=SEARCH({tab}, "${data}")`,
    {
      headers: {
        Authorization: "Bearer keynWocdalGuKcaAt",
      },
    }
  );
