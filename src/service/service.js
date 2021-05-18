import axios from 'axios';

const baseURL = 'http://api.tvmaze.com';

function getAllShows() {
  return axios.get(`${baseURL}/shows`);
}

function getShowDetails(id) {
  return axios.get(`${baseURL}/shows/${id}`);
}

function getSearchResult(searchInput) {
  return axios.get(`${baseURL}/search/shows?q=${searchInput}`);
}

export { getAllShows, getShowDetails, getSearchResult };
