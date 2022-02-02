import axios from "axios";

export const fetchQuantity = () =>
  axios.get("https://api.airtable.com/v0/appcWXfVQzYfiEUpm/quantities", {
    headers: {
      Authorization: "Bearer keynWocdalGuKcaAt",
    },
  });
