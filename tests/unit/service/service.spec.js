import axios from 'axios';
import { getAllShowsService, getShowDetailsService, getSearchResultService, getCastService } from '@/service/service';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('In service', () => {
  const baseURL = 'http://api.tvmaze.com';
  
  it('getAllShows service', async () => {
    axios.get.mockImplementation(() => Promise.resolve('Some Data'));
    const response = await getAllShowsService();
    expect(axios.get).toHaveBeenCalledWith(`${baseURL}/shows`);
    expect(response).toBe('Some Data');
  });

  it('getShowDetails service', async () => {
    axios.get.mockImplementation(() => Promise.resolve('Some Data'));
    const response = await getShowDetailsService(1);
    expect(axios.get).toHaveBeenCalledWith(`${baseURL}/shows/1`);
    expect(response).toBe('Some Data');
  });

  it('getSearchResult service', async () => {
    axios.get.mockImplementation(() => Promise.resolve('Some Data'));
    const response = await getSearchResultService('Under the Dome');
    expect(axios.get).toHaveBeenCalledWith(`${baseURL}/search/shows?q=Under the Dome`);
    expect(response).toBe('Some Data');
  });

  it('getCast service', async () => {
    axios.get.mockImplementation(() => Promise.resolve('Some Data'));
    const response = await getCastService(1);
    expect(axios.get).toHaveBeenCalledWith(`${baseURL}/shows/1/cast`);
    expect(response).toBe('Some Data');
  });
});
