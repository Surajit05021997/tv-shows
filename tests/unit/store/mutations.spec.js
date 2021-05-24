import mutations from '@/store/mutations';

describe('In mutations', () => {
  it('should mutate allShows', () => {
    const state = {
      allShows: [],
    };
    const payload = [
      {"id":1,"rating":{"average":6.6},"genres":["Action","Thriller"]},
      {"id":2,"rating":{"average":9.2},"genres":["Drama","Horror"]},
    ];
    mutations.setAllShows(state, payload);
    expect(state.allShows).toEqual(payload);
  });

  it('should mutate showDetails', () => {
    const state = {
      showDetails: {},
    };
    const payload = {"id":1,"rating":{"average":6.6},"genres":["Action","Thriller"]};
    mutations.setShowDetails(state, payload);
    expect(state.showDetails).toEqual(payload);
  });

  it('should mutate searchResult', () => {
    const state = {
      searchResult: [],
    };
    const payload = [
      {"id":1,"rating":{"average":6.6},"genres":["Action","Thriller"]},
      {"id":2,"rating":{"average":9.2},"genres":["Drama","Horror"]},
    ];
    mutations.setSearchResult(state, payload);
    expect(state.searchResult).toEqual(payload);
  });

  it('should mutate cast', () => {
    const state = {
      cast: [],
    };
    const payload = [
      {"person":{"id":1,"name":"Mike Vogel","image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/0/1815.jpg"}}},
      {"person":{"id":2,"name":"Rachelle Lefevre","image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/82/207417.jpg"}}},
    ];
    mutations.setCast(state, payload);
    expect(state.cast).toEqual(payload);
  });

  it('should mutat selectedGenre', () => {
    const state = {
      selectedGenre: '',
    };
    const payload = 'Action';
    mutations.setSelectedGenre(state, payload);
    expect(state.selectedGenre).toBe('Action');
  });

  it('should mutate searchValue', () => {
    const state = {
      searchValue: '',
    };
    const payload = 'Dark';
    mutations.setSearchValue(state, payload);
    expect(state.searchValue).toBe('Dark');
  });

  it('should mutate isReload', () => {
    const state = {
      isReload: true,
    }
    mutations.setIsReload(state);
    expect(state.isReload).toBe(false);
  });
});
