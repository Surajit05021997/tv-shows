import actions from '@/store/actions';
import { getAllShowsService, getShowDetailsService, getSearchResultService, getCastService } from '@/service/tvApi.service';

jest.mock('@/service/tvApi.service');

describe('In action', () => {
  const commit = jest.fn();
  describe('In getAllShows action', () => {
    it('Resolved response', async () => {
      getAllShowsService.mockImplementation(() => Promise.resolve({data: 'Some Data'}));
      await actions.getAllShows({ commit });
      expect(commit).toHaveBeenCalledWith('setAllShows', 'Some Data');
    });

    it('Rejected response', async () => {
      getAllShowsService.mockImplementation(() => Promise.reject(new Error('Some error occured!!')));
      await expect(actions.getAllShows({ commit })).rejects.toBeInstanceOf(Error);
    });
  });

  describe('In getShowDetails action', () => {
    it('Resolved response', async () => {
      getShowDetailsService.mockImplementation(() => Promise.resolve({data: 'Some Data'}));
      await actions.getShowDetails({ commit }, 1);
      expect(commit).toHaveBeenCalledWith('setShowDetails', 'Some Data');
    });

    it('Rejected response', async () => {
      getShowDetailsService.mockImplementation(() => Promise.reject(new Error('Some error occured!!')));
      await expect(actions.getShowDetails({ commit }, 1)).rejects.toBeInstanceOf(Error);
    });
  });

  describe('In getSearchResult action', () => {
    it('Resolved response', async () => {
      getSearchResultService.mockImplementation(() => Promise.resolve({data: 'Some Data'}));
      await actions.getSearchResult({ commit }, 'Under the Dome');
      expect(commit).toHaveBeenCalledWith('setSearchResult', 'Some Data');
    });

    it('Rejected response', async () => {
      getSearchResultService.mockImplementation(() => Promise.reject(new Error('Some error occured!!')));
      await expect(actions.getSearchResult({ commit }, 'Under the Dome')).rejects.toBeInstanceOf(Error);
    });
  });

  describe('In getCast action', () => {
    it('Resolved response', async () => {
      getCastService.mockImplementation(() => Promise.resolve({data: 'Some Data'}));
      await actions.getCast({ commit }, 1);
      expect(commit).toHaveBeenCalledWith('setCast', 'Some Data');
    });

    it('Rejected response', async () => {
      getCastService.mockImplementation(() => Promise.reject(new Error('Some error occured!!')));
      await expect(actions.getCast({ commit }, 1)).rejects.toBeInstanceOf(Error);
    });
  });

  it('should commit setSelectedGenre mutationn when getSelectedGenre action is called', () => {
    actions.getSelectedGenre({ commit }, 'Drama');
    expect(commit).toHaveBeenCalledWith('setSelectedGenre', 'Drama');
  });

  it('should commit setSearchValue mutationn when getSearchValue action is called', () => {
    actions.getSearchValue({ commit }, 'Dark');
    expect(commit).toHaveBeenCalledWith('setSearchValue', 'Dark');
  });

  it('should commit setIsReload mutationn when changeIsReload action is called', () => {
    actions.changeIsReload({ commit });
    expect(commit).toHaveBeenCalledWith('setIsReload');
  });
});
