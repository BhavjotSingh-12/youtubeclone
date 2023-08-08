import axios from 'axios';

export const BASE_URL='https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
 maxResults:50,
  },
  headers: {
    'X-RapidAPI-Key': '11f32357f6msh1419e1c0dca42a8p11f038jsne99c636d1d08',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};