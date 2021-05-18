import { getAllShows, getShowDetails, getSearchResult, getCast } from '@/service/service';

export default {
  async getAllShows(context) {
    try {
      const response = await getAllShows();
      const allShows = response.data;
      context.commit('setAllShows', allShows);
    } catch (error) {
      const err = new Error(error.message);
      throw err;
    }
  },
  async getShowDetails(context, id) {
    try {
      const response = await getShowDetails(id);
      const showDetails = response.data;
      context.commit('setShowDetails', showDetails);
    } catch(error) {
      const err = new Error(error.message);
      throw err;
    }
  },
  async getSearchResult(context, searchInput) {
    try {
      const response = await getSearchResult(searchInput);
      const searchResult = response.data;
      context.commit('setSearchResult', searchResult);
    } catch (error) {
      const err = new Error(error.message);
      throw err;
    }
  },
  async getCast(context, id) {
    try {
      const response = await getCast(id);
      const cast = response.data;
      context.commit('setCast', cast);
    } catch (error) {
      const err = new Error(error.message);
      throw err;
    }
  },
};
