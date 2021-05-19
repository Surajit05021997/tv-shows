import { getAllShowsService, getShowDetailsService, getSearchResultService, getCastService } from '@/service/service';

export default {
  async getAllShows(context) {
    try {
      const response = await getAllShowsService();
      const allShows = response.data;
      context.commit('setAllShows', allShows);
    } catch (error) {
      const err = new Error(error.message);
      throw err;
    }
  },
  async getShowDetails(context, id) {
    try {
      const response = await getShowDetailsService(id);
      const showDetails = response.data;
      context.commit('setShowDetails', showDetails);
    } catch(error) {
      const err = new Error(error.message);
      throw err;
    }
  },
  async getSearchResult(context, searchInput) {
    try {
      const response = await getSearchResultService(searchInput);
      const searchResult = response.data;
      context.commit('setSearchResult', searchResult);
    } catch (error) {
      const err = new Error(error.message);
      throw err;
    }
  },
  async getCast(context, id) {
    try {
      const response = await getCastService(id);
      const cast = response.data;
      context.commit('setCast', cast);
    } catch (error) {
      const err = new Error(error.message);
      throw err;
    }
  },
};
