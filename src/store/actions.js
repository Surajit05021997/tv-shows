import { getAllShowsService, getShowDetailsService, getSearchResultService, getCastService } from '@/service/tvApi.service';

export default {
  async getAllShows({ commit }) {
    try {
      const response = await getAllShowsService();
      const allShows = response.data;
      commit('setAllShows', allShows);
    } catch (error) {
      const err = new Error(error.message);
      throw err;
    }
  },
  async getShowDetails({ commit }, id) {
    try {
      const response = await getShowDetailsService(id);
      const showDetails = response.data;
      commit('setShowDetails', showDetails);
    } catch(error) {
      const err = new Error(error.message);
      throw err;
    }
  },
  async getSearchResult({ commit }, searchInput) {
    try {
      const response = await getSearchResultService(searchInput);
      const searchResult = response.data;
      commit('setSearchResult', searchResult);
    } catch (error) {
      const err = new Error(error.message);
      throw err;
    }
  },
  async getCast({ commit }, id) {
    try {
      const response = await getCastService(id);
      const cast = response.data;
      commit('setCast', cast);
    } catch (error) {
      const err = new Error(error.message);
      throw err;
    }
  },
};
