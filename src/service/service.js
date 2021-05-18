import axios from 'axios';

const baseURL = 'http://api.tvmaze.com';

function getAllShows() {
  return axios.get(`${baseURL}/shows`);
}

function getShowDetails(id) {
  return axios.get(`${baseURL}/shows/${id}`);
}

export { getAllShows, getShowDetails };
