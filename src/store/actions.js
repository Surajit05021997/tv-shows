import { getAllShows } from '@/service/service';


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
};