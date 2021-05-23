export default {
  getTop20Shows(state) {
    const [...allShows] = state.allShows;
    allShows.sort((obj1, obj2) => {
      const [rating1] = Object.values(obj1.rating);
      const [rating2] = Object.values(obj2.rating);
      if (rating1 > rating2) {
        return -1;
      }
      if (rating1 < rating2) {
        return 1;
      }
      return 0;
    });
    return allShows.slice(0,20);
  },
  getShowListByGenre(state) {
    const showList = [];
    state.allShows.forEach((show) => {
      show.genres.forEach((genre) => {
        if(state.selectedGenre === genre) {
          showList.push(show);
        }
      });
    });
    return showList;
  }
};
