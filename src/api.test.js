import {fetchAndJson} from './api';
import {mockPerson} from './mockData';

describe('api', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockPerson)
      }));
  });

  it('fetchAndJson returns data object once promise resolves', async () => {
    const actual = await fetchAndJson('www.thing.com');
    expect(actual).toEqual(mockPerson);
  });

  it('should call the data with the correct params', () => {
    const url=`https://swapi.co/api`;

    fetchAndJson(url);
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should catch errors', async () => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.reject({
        status: 404,
        json: () => Promise.reject("Error")
      }));
    const error = await fetchAndJson();

    expect(error).toEqual("Error");
  });
});