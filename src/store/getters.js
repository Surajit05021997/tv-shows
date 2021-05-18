export default {
  getTop20Shows(state) {
    const top20Shows = [];
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
    for (let index = 0; index < 20; index += 1) {
      top20Shows.push(allShows[index]);
    }
    return top20Shows;
  },
  getShowsByGenres(state) {
    const showsByGenres = {};
    const actionShows = [];
    const thrillerShows = [];
    const horrorShows = [];
    const dramaShows = [];
    state.allShows.forEach((show) => {
      show.genres.forEach((genres) => {
        if (genres === 'Action') {
          actionShows.push(show);
          showsByGenres[genres] = actionShows;
        } else if (genres === 'Thriller') {
          thrillerShows.push(show);
          showsByGenres[genres] = thrillerShows;
        } else if (genres === 'Horror') {
          horrorShows.push(show);
          showsByGenres[genres] = horrorShows;
        } else if (genres === 'Drama') {
          dramaShows.push(show);
          showsByGenres[genres] = dramaShows;
        }
      });
    });
    return showsByGenres;
  },
};
