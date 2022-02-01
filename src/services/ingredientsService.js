import axios from "axios";

export const fetchIngredients = () =>
  axios.get("https://api.airtable.com/v0/appcWXfVQzYfiEUpm/ingredients", {
    headers: {
      Authorization: "Bearer keynWocdalGuKcaAt",
    },
  });
