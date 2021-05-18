import axios from 'axios';

const baseURL = 'http://api.tvmaze.com';

function getAllShows() {
  return axios.get(`${baseURL}/shows`);
}

export { getAllShows };
