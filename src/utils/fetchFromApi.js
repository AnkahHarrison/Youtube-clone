import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  //   url: BASE_URL,
  params: {
    maxResults: "47",
    // THE MAXIMUM NUMBER OF RESULTS TO RETURN WAS 50 BUT 2 WAS CAUSE ERROR
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
    // "X-RapidAPI-Key": "ce155671d6msh9e9536aa4cc2ad4p15163ejsn11ac3d4fd12a",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
