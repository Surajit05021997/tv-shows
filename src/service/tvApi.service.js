import axios from 'axios';

const baseURL = 'https://api.tvmaze.com';

function getAllShowsService() {
  return axios.get(`${baseURL}/shows`);
}

function getShowDetailsService(id) {
  return axios.get(`${baseURL}/shows/${id}`);
}

function getSearchResultService(searchInput) {
  return axios.get(`${baseURL}/search/shows?q=${searchInput}`);
}

function getCastService(id) {
  return axios.get(`${baseURL}/shows/${id}/cast`);
}

export { getAllShowsService, getShowDetailsService, getSearchResultService, getCastService };
