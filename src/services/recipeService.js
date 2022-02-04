import axios from "axios";

export const fetchRecipesService = (data) =>
  axios.get(
    `https://api.airtable.com/v0/appcWXfVQzYfiEUpm/recipes?filterByFormula=SEARCH({tab}, "${data}")`,
    {
      headers: {
        Authorization: "Bearer keynWocdalGuKcaAt",
      },
    }
  );
