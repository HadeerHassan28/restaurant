import axios from "axios";

export const fetchData = async () => {
  try {
    const result = await axios.get("http://localhost:3000/resturant");
    return result.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
