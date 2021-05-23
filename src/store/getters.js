export default {
  getTop20Shows(state) {
    const [...allShows] = state.allShows;
    allShows.sort((obj1, obj2) => {
      const [rating1] = Object.values(obj1.rating);
      const [rating2] = Object.values(obj2.rating);
      return rating2 - rating1;
    });
    return allShows.slice(0,20);
  },
  getShowListByGenre(state) {
    return state.allShows.filter((show) => show.genres.includes(state.selectedGenre));
  }
};
