import axios from "axios";
const api_key = process.env.VUE_APP_API_KEY;
export const fetchQuantity = () =>
  axios.get("https://api.airtable.com/v0/appcWXfVQzYfiEUpm/quantities", {
    headers: {
      Authorization: `Bearer ${api_key}`,
    },
  });
