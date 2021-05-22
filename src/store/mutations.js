export default {
  setAllShows(state, payload) {
    state.allShows = payload;
  },
  setShowDetails(state, payload) {
    state.showDetails = payload;
  },
  setSearchResult(state, payload) {
    state.searchResult = payload;
  },
  setCast(state, payload) {
    state.cast = payload;
  },
  setSelectedGenre(state, payload) {
    state.selectedGenre = payload;
  },
  setSearchValue(state, payload) {
    state.searchValue = payload;
  },
  setIsReload(state) {
    state.isReload = false;
  }
};
