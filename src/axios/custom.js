import axios from "axios";
// All request going to this will have this settings
//for specific request
const authFetch = axios.create({
  baseURL: "https://course-api.com",
  headers: {
    Accept: "application/json",
  },
});

export default authFetch;
