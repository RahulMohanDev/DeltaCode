import axios from "axios";

console.log("Hi we finally got here");

const result = await axios.get(
  "https://64ca8a15700d50e3c70507e4.mockapi.io/api/v1/book"
);
console.log(result.data);
