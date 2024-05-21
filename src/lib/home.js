import axios from "axios";

export const fetchData = async () => {
  let result = await axios.get("http://localhost:3000/resturant");
  //console.log(result);
  return result.data;
};
