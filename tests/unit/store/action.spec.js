import actions from '@/store/actions';
import { getAllShowsService, getShowDetailsService, getSearchResultService, getCastService } from '@/service/tvApi.service';

jest.mock('@/service/tvApi.service', () => ({
  getAllShowsService: jest.fn(),
  getShowDetailsService: jest.fn(),
  getSearchResultService: jest.fn(),
  getCastService: jest.fn(),
}));

describe('In action', () => {
  const context = {
    commit: jest.fn(),
  };
  describe('In getAllShows action', () => {
    it('Resolved response', async () => {
      getAllShowsService.mockImplementation(() => Promise.resolve({data: 'Some Data'}));
      await actions.getAllShows(context);
      expect(context.commit).toHaveBeenCalledWith('setAllShows', 'Some Data');
    })

    it('Rejected response', async () => {
      getAllShowsService.mockImplementation(() => Promise.reject(new Error('Some error occured!!')));
      await expect(actions.getAllShows(context)).rejects.toThrow('Some error occured!!');
    })
  });

  describe('In getShowDetails action', () => {
    it('Resolved response', async () => {
      getShowDetailsService.mockImplementation(() => Promise.resolve({data: 'Some Data'}));
      await actions.getShowDetails(context, 1);
      expect(context.commit).toHaveBeenCalledWith('setShowDetails', 'Some Data');
    })

    it('Rejected response', async () => {
      getShowDetailsService.mockImplementation(() => Promise.reject(new Error('Some error occured!!')));
      await expect(actions.getShowDetails(context, 1)).rejects.toThrow('Some error occured!!');
    })
  });

  describe('In getSearchResult action', () => {
    it('Resolved response', async () => {
      getSearchResultService.mockImplementation(() => Promise.resolve({data: 'Some Data'}));
      await actions.getSearchResult(context, 'Under the Dome');
      expect(context.commit).toHaveBeenCalledWith('setSearchResult', 'Some Data');
    })

    it('Rejected response', async () => {
      getSearchResultService.mockImplementation(() => Promise.reject(new Error('Some error occured!!')));
      await expect(actions.getSearchResult(context, 'Under the Dome')).rejects.toThrow('Some error occured!!');
    })
  });

  describe('In getCast action', () => {
    it('Resolved response', async () => {
      getCastService.mockImplementation(() => Promise.resolve({data: 'Some Data'}));
      await actions.getCast(context, 1);
      expect(context.commit).toHaveBeenCalledWith('setCast', 'Some Data');
    })

    it('Rejected response', async () => {
      getCastService.mockImplementation(() => Promise.reject(new Error('Some error occured!!')));
      await expect(actions.getCast(context, 1)).rejects.toThrow('Some error occured!!');
    })
  });
});
